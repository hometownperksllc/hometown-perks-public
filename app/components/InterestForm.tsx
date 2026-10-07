"use client";

import { useState, type FormEvent } from "react";
const recipient = "michael@hometownperksusa.com";
const inputStyle = "mt-2 block w-full rounded-xl border border-white/20 bg-[#0b1020] px-4 py-3 text-white focus:outline-2 focus:outline-blue-400";

export default function InterestForm() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [saved, setSaved] = useState(false);
  const [requestId, setRequestId] = useState("");
  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || saved) return;
    const data = new FormData(event.currentTarget);
    const id = requestId || crypto.randomUUID();
    setRequestId(id); setBusy(true); setMessage("");
    try {
      const response = await fetch("https://portal.hometownperksusa.com/api/inquiries", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({requestId:id,business:data.get("business"),contact:data.get("contact"),email:data.get("email"),phone:data.get("phone")||"",area:data.get("area"),message:data.get("message")||"",plate:data.get("plate")==="on",consent:data.get("consent")==="on",website:data.get("website")||""}),
        signal: AbortSignal.timeout(20000)
      });
      const result = await response.json();
      if (!response.ok || result.saved !== true) throw Error(result.error || "Unable to save your inquiry.");
      setSaved(true); setMessage("Your inquiry has been saved. Hometown Perks can follow up using the contact information you provided. You have not been enrolled or charged.");
    } catch (error) {
      setMessage(error instanceof Error && error.name !== "TimeoutError" ? error.message : "We could not confirm your inquiry was saved. Please try again or email us directly.");
    } finally { setBusy(false); }
  }
  return <form onSubmit={event => void submitInquiry(event)} className="rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8">
    <fieldset disabled={busy || saved}>
    <div className="grid gap-6 sm:grid-cols-2">
      <label>Business name<input name="business" required maxLength={150} autoComplete="organization" className={inputStyle} /></label>
      <label>Contact name<input name="contact" required maxLength={150} autoComplete="name" className={inputStyle} /></label>
      <label>Email<input name="email" type="email" required maxLength={254} autoComplete="email" className={inputStyle} /></label>
      <label>Phone (optional)<input name="phone" type="tel" maxLength={40} autoComplete="tel" className={inputStyle} /></label>
      <label className="sm:col-span-2">City or service area<input name="area" required maxLength={200} className={inputStyle} /></label>
      <label className="sm:col-span-2">What would you like to promote? (optional)<textarea name="message" maxLength={1500} rows={4} className={inputStyle} /></label>
    </div>
    <label className="mt-6 flex items-start gap-3"><input name="plate" type="checkbox" className="mt-2 h-4 w-4" />I would also like information about the optional Connect Plate service.</label>
    <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="mt-6 flex items-start gap-3"><input name="consent" type="checkbox" required className="mt-2 h-4 w-4" />I agree that Hometown Perks may save these details and contact me about my inquiry.</label>
    <p className="mt-6 text-sm leading-6 text-white/60">Submitting saves your inquiry for Hometown Perks to review. It does not create an account, subscription, or payment obligation.</p>
    <button type="submit" className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#050816] disabled:opacity-60">{busy ? "Saving Your Inquiry…" : saved ? "Inquiry Saved" : "Submit My Interest"}</button>
    </fieldset>
    {message && <div role="status" className="mt-6 rounded-xl border border-blue-400/30 p-4"><p>{message}</p></div>}
    <p className="mt-4 text-sm">Prefer email? Contact <a href={`mailto:${recipient}`} className="underline">{recipient}</a>.</p>
  </form>;
}
