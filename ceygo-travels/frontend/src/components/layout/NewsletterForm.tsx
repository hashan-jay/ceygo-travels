"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a real email address.");
      return;
    }
    const existing = window.localStorage.getItem("ceygo-notes");
    let notes: string[] = [];
    try {
      if (existing) notes = JSON.parse(existing) as string[];
    } catch {
      notes = [];
    }
    window.localStorage.setItem("ceygo-notes", JSON.stringify([...notes, email]));
    setDone(true);
    setError("");
  }

  if (done) {
    return (
      <p className="max-w-xl text-sm text-cream/80">
        Saved on this device. The field list is not connected to a mailing desk yet — this preview only keeps your address in the browser.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <label className="grid flex-1 gap-2 text-sm">
        <span className="font-medium text-cream">Notes from the island</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
          className="min-h-12 rounded-full border border-cream/20 bg-transparent px-4 text-cream outline-none placeholder:text-cream/40"
        />
      </label>
      <button className="btn btn-saffron" type="submit">
        Keep me posted
      </button>
      {error ? <p className="text-sm text-saffron sm:hidden">{error}</p> : null}
      <p className="basis-full text-xs text-cream/50">
        {error || "No spam engine is attached yet. The address stays in your browser."}
      </p>
    </form>
  );
}
