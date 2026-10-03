const steps = [
  {
    number: "01",
    title: "Register your interest",
    text: "Tell us about your business and advertising goals. No payment or subscription is required to express interest.",
  },
  {
    number: "02",
    title: "Confirm your launch package",
    text: "We will confirm active screen locations, ad details, and service terms before your campaign starts.",
  },
  {
    number: "03",
    title: "Go live when screens are ready",
    text: "Once your ad is approved and playing on the agreed screens, your advertising service and billing begin.",
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