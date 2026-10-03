import type { Metadata } from "next";
import ServicePage, { Action } from "../components/ServicePage";
export const metadata: Metadata = { title: "Pikeville Community Gift Card" };
export default function Page() { return <ServicePage title="Pikeville Community Gift Card" intro="A community gift-card program under the Hometown Perks name, powered by Yiftee."><h2 className="text-2xl font-semibold">Support participating local businesses</h2><p>Contact Hometown Perks for current program availability, participating businesses, and purchasing information.</p><p>Business owners can contact us to learn about participating in the Pikeville program.</p><Action href="/contact">Ask About Community Gift Cards</Action></ServicePage>; }
