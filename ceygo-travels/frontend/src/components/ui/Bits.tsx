import Link from "next/link";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em]",
        light ? "text-saffron" : "text-palm-ink",
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden />
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "cream",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "paper" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 px-5 py-20 md:px-8 md:py-28",
        tone === "paper" && "bg-paper",
        tone === "ink" && "bg-ink text-cream",
        className,
      )}
    >
      <div className="mx-auto max-w-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  light?: boolean;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
        <h2
          className={cn(
            "font-display text-4xl leading-[1.02] tracking-tight md:text-5xl",
            eyebrow && "mt-4",
          )}
        >
          {title}
        </h2>
        {text ? (
          <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-cream/75" : "text-mute")}>
            {text}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-mute">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="underline-offset-4 hover:text-ink hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FactList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid gap-4">
      {items.map((item) => (
        <div key={item.label} className="border-t border-ink/10 pt-3">
          <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-mute">
            {item.label}
          </dt>
          <dd className="mt-1 text-base leading-relaxed">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="px-5 pb-20 md:px-8">
      <div className="mx-auto flex max-w-page flex-col gap-8 rounded-[32px] bg-ink px-6 py-12 text-cream md:flex-row md:items-end md:justify-between md:px-12 md:py-14">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl leading-[1.02] tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-cream/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primary.href} className="btn btn-saffron">
            {primary.label} <span aria-hidden>→</span>
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="btn btn-light">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function SampleNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-2xl border border-saffron/40 bg-saffron/15 px-4 py-3 text-sm leading-relaxed text-ink">
      {children}
    </p>
  );
}
