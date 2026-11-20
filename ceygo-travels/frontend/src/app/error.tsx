"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="px-5 pb-24 pt-36 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-5xl tracking-tight">This page did not finish loading.</h1>
        <p className="mt-4 text-lg text-mute">Try it once more. If it keeps failing, use the planner and the desk form.</p>
        <button className="btn btn-ink mt-8" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </section>
  );
}
