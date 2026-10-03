"use client";

import { useState, type FormEvent } from "react";
const recipient = "michael@hometownperksusa.com";
const inputStyle = "mt-2 block w-full rounded-xl border border-white/20 bg-[#0b1020] px-4 py-3 text-white focus:outline-2 focus:outline-blue-400";

export default function InterestForm() {
  const [emailDraft, setEmailDraft] = useState("");
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = ["I am interested in becoming a Hometown Perks founding advertiser.",
      `Business: ${data.get("business")}`, `Contact: ${data.get("contact")}`,
      `Email: ${data.get("email")}`, `Phone: ${data.get("phone") || "Not provided"}`,
      `City / service area: ${data.get("area")}`,
      `Connect Plate interest: ${data.get("plate") ? "Yes" : "Not selected"}`,
      `Message: ${data.get("message") || "Not provided"}`].join("\n");
    setEmailDraft(`mailto:${recipient}?subject=${encodeURIComponent("Founding advertiser interest")}&body=${encodeURIComponent(body)}`);
  }
  return <form onSubmit={prepareEmail} className="rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8">
    <div className="grid gap-6 sm:grid-cols-2">
      <label>Business name<input name="business" required maxLength={150} autoComplete="organization" className={inputStyle} /></label>
      <label>Contact name<input name="contact" required maxLength={150} autoComplete="name" className={inputStyle} /></label>
      <label>Email<input name="email" type="email" required maxLength={254} autoComplete="email" className={inputStyle} /></label>
      <label>Phone (optional)<input name="phone" type="tel" maxLength={40} autoComplete="tel" className={inputStyle} /></label>
      <label className="sm:col-span-2">City or service area<input name="area" required maxLength={200} className={inputStyle} /></label>
      <label className="sm:col-span-2">What would you like to promote? (optional)<textarea name="message" maxLength={1500} rows={4} className={inputStyle} /></label>
    </div>
    <label className="mt-6 flex items-start gap-3"><input name="plate" type="checkbox" className="mt-2 h-4 w-4" />I would also like information about the optional Connect Plate service.</label>
    <p className="mt-6 text-sm leading-6 text-white/60">This form prepares an email. Nothing is submitted until you send it from your email app. Registering interest does not create an account, subscription, or payment obligation.</p>
    <button type="submit" className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#050816]">Prepare My Interest Email</button>
    {emailDraft && <div role="status" className="mt-6 rounded-xl border border-blue-400/30 p-4">
      <p>Your email draft is ready. Open it, review the details, and send it to complete your inquiry.</p>
      <a href={emailDraft} className="mt-3 inline-block font-semibold text-blue-300 underline">Open My Email Draft</a>
      <p className="mt-3 text-sm">No email app? Email <a href={`mailto:${recipient}`} className="underline">{recipient}</a> directly with your business details.</p>
    </div>}
  </form>;
}
