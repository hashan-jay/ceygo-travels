"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="px-4 pb-24 pt-28 sm:px-5 md:px-8 md:pt-36">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">This page did not finish loading.</h1>
        <p className="mt-4 text-lg text-mute">Try it once more. If it keeps failing, use the planner and the desk form.</p>
        <button className="btn btn-ink mt-8" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </section>
  );
}
