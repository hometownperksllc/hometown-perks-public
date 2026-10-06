import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import InterestForm from "../components/InterestForm";
export const metadata: Metadata = { title: "Founding Advertiser Interest" };
export default function Page() {
  return <ServicePage title="Become a Founding Advertiser" intro="Tell us about your business and we will discuss the planned $149/month advertising package as our screen network prepares to launch. No payment is required to express interest. When paid enrollment opens, $149 is paid upfront for your first 30 calendar days of advertising. The 30-day period begins when your approved ad goes live. After that, $149 monthly renewals require your separate authorization."><InterestForm /></ServicePage>;
}
