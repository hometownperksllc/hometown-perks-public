import type { Metadata } from "next";
import ServicePage, { Action } from "../components/ServicePage";
export const metadata: Metadata = { title: "Founding Advertiser Launch Offer" };
export default function Page() {
  return <ServicePage title="Local advertising. One simple package." intro="Our screen network is preparing to launch. Five to six local businesses have expressed interest in hosting screens; installations are not yet complete.">
    <div className="rounded-3xl border border-blue-400/30 bg-white/5 p-8">
      <p className="text-sm uppercase tracking-widest text-blue-300">Planned launch offer</p>
      <h2 className="mt-3 text-4xl font-bold">$149<span className="text-lg font-normal"> / month</span></h2>
      <p className="mt-4">One advertising package across the initial participating screen locations. When paid enrollment opens, $149 is paid upfront for your first 30 calendar days of advertising. The 30-day period begins when your approved ad goes live. After that, $149 monthly renewals require your separate authorization.</p>
      <p className="mt-4">Before you commit, we will confirm active locations, ad duration, rotation frequency, design and update allowances, and cancellation terms with you.</p>
      <p className="mt-4">Registering interest does not create a subscription or require payment.</p>
      <div className="mt-6"><Action href="/merchant-signup">Become a Founding Advertiser</Action></div>
    </div>
    <h2 className="text-2xl font-semibold">Add a Hometown Connect Plate</h2>
    <p>QR and NFC tools are available as an optional service separate from advertising. Ask us about setup and ongoing landing-page service pricing.</p>
    <Action href="/connect-plate">Explore Connect Plates</Action>
  </ServicePage>;
}
