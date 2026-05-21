export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 px-6 py-4 backdrop-blur md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="text-xl font-bold">
          Hometown <span className="text-blue-400">Perks</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="/merchants">Merchants</a>
          <a href="/gift-cards">Gift Cards</a>
          <a href="/advertising">Advertising</a>
          <a href="/connect-plate">Connect Plate</a>
        </nav>

        <a
          href="https://portal.hometownperksusa.com"
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#050816]"
        >
          Merchant Login
        </a>
      </div>
    </header>
  );
}