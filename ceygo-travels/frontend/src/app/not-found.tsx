import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 pb-24 pt-28 sm:px-5 md:px-8 md:pt-36">
      <div className="mx-auto max-w-3xl">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-palm-ink">404</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl md:text-7xl">This page is not on the route.</h1>
        <p className="mt-4 text-lg text-mute">
          The link may be old, or the city has not been added yet. The island is still there.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-ink">Back home</Link>
          <Link href="/destinations" className="btn btn-line">Browse cities</Link>
          <Link href="/plan" className="btn btn-saffron">Plan a journey</Link>
        </div>
      </div>
    </section>
  );
}
