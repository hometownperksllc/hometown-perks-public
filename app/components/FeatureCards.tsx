const features = [
  {
    title: "Community Gift Cards",
    text: "Give customers one easy way to support participating local businesses.",
  },
  {
    title: "Local Advertising Network",
    text: "Promote businesses across in-store screens, print placements, and digital campaigns.",
  },
  {
    title: "Connect Plates",
    text: "QR and NFC countertop plates that connect customers to menus, links, reviews, offers, and more.",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-white px-6 py-20 text-[#050816] md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Everything local businesses need to get noticed.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}