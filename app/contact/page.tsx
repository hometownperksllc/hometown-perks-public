import type { Metadata } from "next";
import ServicePage, { Action } from "../components/ServicePage";
export const metadata: Metadata = { title: "Contact Hometown Perks" };
export default function Page() { return <ServicePage title="Contact Hometown Perks" intro="Have a question about advertising, Connect Plates, or community gift cards?"><h2 className="text-2xl font-semibold">Email us</h2><Action href="mailto:michael@hometownperksusa.com">michael@hometownperksusa.com</Action><p>Already have a merchant account? <a className="underline" href="https://portal.hometownperksusa.com/login">Log in to your portal</a>.</p></ServicePage>; }
