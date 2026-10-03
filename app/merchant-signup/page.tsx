import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import InterestForm from "../components/InterestForm";
export const metadata: Metadata = { title: "Founding Advertiser Interest" };
export default function Page() {
  return <ServicePage title="Become a Founding Advertiser" intro="Tell us about your business and we will discuss the planned $149/month advertising package as our screen network prepares to launch. No payment is required to express interest. Billing starts when your ad goes live."><InterestForm /></ServicePage>;
}
