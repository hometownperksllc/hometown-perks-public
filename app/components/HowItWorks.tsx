const steps = [
  {
    number: "01",
    title: "Join the local network",
    text: "Businesses can join Hometown Perks to be part of the community gift card and local promotion network.",
  },
  {
    number: "02",
    title: "Get promoted locally",
    text: "Your business can be featured through digital screens, printed placements, Connect Plates, and online campaigns.",
  },
  {
    number: "03",
    title: "Bring customers back",
    text: "Hometown Perks helps keep local dollars in the community while giving customers more reasons to shop local.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#050816] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          How It Works
        </p>

        <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          A simple way to connect local businesses with local customers.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur"
            >
              <div className="mb-6 text-4xl font-bold text-blue-300">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold">{step.title}</h3>

              <p className="mt-4 leading-7 text-white/65">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}