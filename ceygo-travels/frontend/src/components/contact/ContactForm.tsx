"use client";

import { useMemo, useState } from "react";
import { interestOptions, type InterestId } from "@/data/types";
import { months } from "@/lib/utils";

type Prefill = {
  journey?: string;
  month?: string;
  days?: string;
  pace?: string;
  interests?: string;
  saved?: string;
};

type Errors = Partial<Record<"name" | "email" | "party", string>>;

export function ContactForm({ prefill }: { prefill: Prefill }) {
  const initialInterests = useMemo(() => {
    const ids = (prefill.interests ?? "")
      .split(",")
      .filter((item): item is InterestId => interestOptions.some((option) => option.id === item));
    return ids;
  }, [prefill.interests]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("");
  const [month, setMonth] = useState(prefill.month || months[0]);
  const [days, setDays] = useState(prefill.days || "10");
  const [party, setParty] = useState("2");
  const [notes, setNotes] = useState("");
  const [interests, setInterests] = useState<InterestId[]>(initialInterests);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function toggle(id: InterestId) {
    setInterests((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Tell us what to call you.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email does not look usable.";
    if (!party || Number(party) < 1) next.party = "Add at least one traveler.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const enquiry = {
      name: name.trim(),
      email: email.trim(),
      from: from.trim(),
      month,
      days,
      party,
      interests,
      notes: notes.trim(),
      journey: prefill.journey ?? "",
      saved: prefill.saved ?? "",
      pace: prefill.pace ?? "",
      createdAt: new Date().toISOString(),
    };
    const existing = window.localStorage.getItem("ceygo-enquiries");
    let list: unknown[] = [];
    try {
      if (existing) list = JSON.parse(existing) as unknown[];
    } catch {
      list = [];
    }
    window.localStorage.setItem("ceygo-enquiries", JSON.stringify([enquiry, ...list]));
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-[28px] bg-ink p-6 text-cream md:p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-saffron">Saved in this browser</p>
        <h2 className="mt-3 font-display text-4xl">Your note is ready, {name.split(" ")[0]}.</h2>
        <p className="mt-4 text-cream/80">
          This preview does not email the CeyGo desk yet. The enquiry stays on this device so you can review it. When the backend is connected, the same form will deliver it.
        </p>
        <dl className="mt-6 grid gap-3 text-sm">
          <div><dt className="text-cream/50">Travelers</dt><dd>{party} · {days} days · {month}</dd></div>
          {prefill.journey ? <div><dt className="text-cream/50">Starting journey</dt><dd>{prefill.journey}</dd></div> : null}
          {interests.length ? <div><dt className="text-cream/50">Themes</dt><dd>{interests.join(", ")}</dd></div> : null}
        </dl>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-[28px] border border-ink/10 bg-paper p-5 md:p-8" noValidate>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {prefill.journey ? (
        <p className="rounded-2xl bg-cream px-4 py-3 text-sm">
          Starting from the journey <strong>{prefill.journey}</strong>
          {prefill.pace ? ` · pace ${prefill.pace}` : ""}.
        </p>
      ) : null}
      {prefill.saved ? (
        <p className="rounded-2xl bg-cream px-4 py-3 text-sm">
          Shortlist attached: {prefill.saved.replaceAll(",", ", ")}.
        </p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input value={name} onChange={(event) => setName(event.target.value)} className="field" autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input value={email} onChange={(event) => setEmail(event.target.value)} className="field" autoComplete="email" inputMode="email" />
        </Field>
        <Field label="Where you live">
          <input value={from} onChange={(event) => setFrom(event.target.value)} className="field" placeholder="City and country" />
        </Field>
        <Field label="Travelers" error={errors.party}>
          <input value={party} onChange={(event) => setParty(event.target.value)} className="field" inputMode="numeric" min={1} />
        </Field>
        <Field label="Month">
          <select value={month} onChange={(event) => setMonth(event.target.value)} className="field">
            {months.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="Days on the island">
          <select value={days} onChange={(event) => setDays(event.target.value)} className="field">
            {["7", "8", "10", "12", "14", "18"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
      </div>
      <fieldset>
        <legend className="text-sm font-medium">Themes</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {interestOptions.map((option) => (
            <button
              type="button"
              key={option.id}
              onClick={() => toggle(option.id)}
              aria-pressed={interests.includes(option.id)}
              className={`rounded-full border px-3 py-2 text-sm ${interests.includes(option.id) ? "border-ink bg-ink text-cream" : "border-ink/15"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>
      <Field label="Anything the desk should know">
        <textarea value={notes} onChange={(event) => setNotes(event.target.value)} className="field min-h-32" placeholder="Children’s ages, a wedding, a fear of heights, a hotel you already love." />
      </Field>
      <button className="btn btn-ink w-fit" type="submit">
        Save this enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium">{label}</span>
      {children}
      {error ? <span className="text-palm-ink">{error}</span> : null}
    </label>
  );
}
