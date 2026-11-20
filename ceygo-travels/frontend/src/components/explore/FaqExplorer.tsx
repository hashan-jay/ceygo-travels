"use client";

import { useMemo, useState } from "react";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

const groups = ["All", "Planning", "On the island", "Practical"] as const;

export function FaqExplorer() {
  const [group, setGroup] = useState<(typeof groups)[number]>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(faqs[0]?.question ?? null);
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return faqs.filter((item) => {
      const inGroup = group === "All" || item.group === group;
      const inText = !needle || `${item.question} ${item.answer}`.toLowerCase().includes(needle);
      return inGroup && inText;
    });
  }, [group, query]);

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
          {groups.map((item) => (
            <button
              key={item}
              onClick={() => setGroup(item)}
              className={cn("shrink-0 rounded-full border px-4 py-2 text-sm", group === item ? "bg-ink text-cream" : "bg-paper")}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="block md:w-72">
          <span className="sr-only">Search questions</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions"
            className="min-h-12 w-full rounded-full border border-ink/15 bg-paper px-4"
          />
        </label>
      </div>
      <div className="mt-6 divide-y divide-ink/10 rounded-[28px] border border-ink/10 bg-paper">
        {visible.length === 0 ? (
          <p className="p-6 text-mute">No questions match that. Try “visa”, “children”, or “price”.</p>
        ) : (
          visible.map((item) => {
            const expanded = open === item.question;
            return (
              <div key={item.question}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : item.question)}
                >
                  <span>
                    <span className="block text-[0.72rem] uppercase tracking-[0.14em] text-palm-ink">{item.group}</span>
                    <span className="mt-1 block font-display text-2xl">{item.question}</span>
                  </span>
                  <span aria-hidden className="text-xl">{expanded ? "–" : "+"}</span>
                </button>
                {expanded ? <p className="px-5 pb-5 leading-relaxed text-mute">{item.answer}</p> : null}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
