import type { Metadata } from "next";
import ServicePage, { Action } from "../components/ServicePage";
export const metadata: Metadata = { title: "About Hometown Perks" };
export default function Page() { return <ServicePage title="About Hometown Perks" intro="Hometown Perks, LLC connects local businesses and their communities."><p>Our services bring together community gift cards, local advertising, and QR and NFC Connect Plates under one Hometown Perks brand.</p><p>For Pikeville, that includes the Hometown Perks — Pikeville Community Gift Card program, powered by Yiftee.</p><Action href="/contact">Get in Touch</Action></ServicePage>; }
