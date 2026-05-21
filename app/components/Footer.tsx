export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03050f] px-6 py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold">
            Hometown <span className="text-blue-400">Perks</span>
          </h3>

          <p className="mt-4 leading-7 text-white/60">
            Helping local businesses grow through community gift cards,
            local advertising, and merchant promotion tools.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
            Platform
          </h4>

          <ul className="space-y-3 text-white/70">
            <li>
              <a href="/merchants">Merchants</a>
            </li>

            <li>
              <a href="/gift-cards">Gift Cards</a>
            </li>

            <li>
              <a href="/advertising">Advertising</a>
            </li>

            <li>
              <a href="/connect-plate">Connect Plate</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
            Company
          </h4>

          <ul className="space-y-3 text-white/70">
            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>

            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>

            <li>
              <a href="/terms">Terms</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
            Merchant Portal
          </h4>

          <p className="mb-4 text-white/60">
            Access the Hometown Perks merchant dashboard.
          </p>

          <a
            href="https://portal.hometownperksusa.com"
            className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-[#050816]"
          >
            Merchant Login
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 text-sm text-white/40">
        © 2026 Hometown Perks, LLC. All rights reserved.
      </div>
    </footer>
  );
}