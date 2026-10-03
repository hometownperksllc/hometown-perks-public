import PublicHeader from "./PublicHeader";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function ServicePage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return <main className="min-h-screen bg-[#050816] text-white">
    <PublicHeader />
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-12">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300">Hometown Perks</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{intro}</p>
      <div className="mt-10 space-y-8 leading-8 text-white/80">{children}</div>
    </section>
    <Footer />
  </main>;
}

export function Action({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#050816]">{children}</a>;
}
