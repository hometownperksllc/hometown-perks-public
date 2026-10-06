export default function PublicHero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1d7cff,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed,transparent_30%)] opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80">
            Local Advertising Network • Preparing to Launch
          </div>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            Get Ready to Grow With Hometown Perks
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            We are preparing our local screen advertising network. Register your interest in our planned $149/month advertising package, with an optional Connect Plate add-on. When paid enrollment opens, $149 is paid upfront for your first 30 calendar days of advertising. The 30-day period begins when your approved ad goes live. After that, $149 monthly renewals require your separate authorization.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/merchant-signup"
              className="rounded-xl bg-white px-6 py-4 text-center font-semibold text-[#050816]"
            >
              Become a Founding Advertiser
            </a>

            <a
              href="/gift-cards"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-center font-semibold text-white"
            >
              Explore Community Gift Cards
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Merchant Dashboard</h3>

            <span className="rounded-full bg-green-400/20 px-3 py-1 text-sm text-green-300">
              Example
            </span>
          </div>

          <div className="space-y-4">
            <DashboardRow
              title="Ad Request Submitted"
              status="Complete"
            />

            <DashboardRow
              title="Creative In Design"
              status="Active"
            />

            <DashboardRow
              title="Campaign Scheduled"
              status="Pending"
            />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <Stat number="TV" label="Advertising" />
            <Stat number="QR/NFC" label="Connect Plates" />
            <Stat number="1" label="Platform" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardRow({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex justify-between gap-4">
        <span>{title}</span>

        <span className="text-sm text-white/60">
          {status}
        </span>
      </div>
    </div>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 text-center">
      <div className="text-2xl font-bold">
        {number}
      </div>

      <div className="text-sm text-white/60">
        {label}
      </div>
    </div>
  );
}