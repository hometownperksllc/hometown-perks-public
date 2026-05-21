const activity = [
  { label: "Ad request received", status: "New" },
  { label: "Creative ready for review", status: "Review" },
  { label: "Campaign scheduled", status: "Live" },
];

export default function PortalPreview() {
  return (
    <section className="bg-[#050816] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Merchant Portal
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Give local businesses a simple dashboard to manage their promotions.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            Merchants can submit ad requests, track campaign progress, view
            promotion status, and stay connected with Hometown Perks from one
            easy portal.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1020] p-5">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-white/40">Portal Preview</p>
                <h3 className="text-xl font-bold">Merchant Dashboard</h3>
              </div>

              <span className="rounded-full bg-blue-400/20 px-3 py-1 text-sm text-blue-200">
                Active
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Stat title="Ad Requests" value="12" />
              <Stat title="Running Ads" value="4" />
              <Stat title="Locations" value="20+" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-semibold">Campaign Progress</h4>
                <span className="text-sm text-white/40">This Month</span>
              </div>

              <div className="space-y-4">
                <Progress label="Design" value="85%" />
                <Progress label="Approval" value="60%" />
                <Progress label="Scheduled" value="40%" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {activity.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span>{item.label}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm text-white/50">{title}</div>
    </div>
  );
}

function Progress({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-white/70">{label}</span>
        <span className="text-white/40">{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-blue-400"
          style={{ width: value }}
        />
      </div>
    </div>
  );
}