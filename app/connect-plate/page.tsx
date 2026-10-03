import type { Metadata } from "next";
import ServicePage, { Action } from "../components/ServicePage";
export const metadata: Metadata = { title: "Hometown Connect Plate" };
export default function Page() { return <ServicePage title="Hometown Connect Plate" intro="Give customers an easy way to reach your business links with a scan or tap."><h2 className="text-2xl font-semibold">Your links, in one place</h2><p>A countertop plate uses QR and NFC to connect customers to your website, menus, social pages, reviews, and offers.</p><p>Contact us about your landing page, plate setup, and current pricing.</p><Action href="/contact">Ask About a Connect Plate</Action></ServicePage>; }
