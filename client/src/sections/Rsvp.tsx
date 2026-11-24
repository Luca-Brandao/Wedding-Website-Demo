import { useState, type FormEvent } from "react";
import { SectionShell } from "../components/SectionShell";

export function Rsvp() {
  const [guest, setGuest] = useState("Morgan Reed");
  const [attending, setAttending] = useState("accept");
  const [meal, setMeal] = useState("Vegetarian");
  const [confirmed, setConfirmed] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setConfirmed(true); };
  return <SectionShell id="rsvp" eyebrow="Save your seat" title="Will you join us?" intro="Please let us know by 1 May 2030 so we can set a place for you. We cannot wait to celebrate together." className="rsvp-section">
    <form onSubmit={submit} className="mx-auto max-w-xl rounded-3xl border border-powder bg-white p-7 shadow-soft">
      <label className="block font-semibold text-ink">Guest name<input value={guest} onChange={e=>{setGuest(e.target.value);setConfirmed(false);}} required maxLength={80} autoComplete="off" className="mt-2 w-full rounded-xl border border-powder bg-linen p-3"/></label>
      <label className="mt-5 block font-semibold text-ink">Your response<select value={attending} onChange={e=>{setAttending(e.target.value);setConfirmed(false);}} className="mt-2 w-full rounded-xl border border-powder bg-linen p-3"><option value="accept">Joyfully accept</option><option value="decline">Regretfully decline</option></select></label>
      {attending === "accept" && <label className="mt-5 block font-semibold text-ink">Meal preference<select value={meal} onChange={e=>{setMeal(e.target.value);setConfirmed(false);}} className="mt-2 w-full rounded-xl border border-powder bg-linen p-3"><option>Standard menu</option><option>Vegetarian</option><option>Vegan</option></select></label>}
      <button type="submit" className="mt-6 w-full rounded-full bg-steel px-6 py-3 font-semibold text-white">Preview response</button>
      <p className="mt-3 text-sm leading-relaxed text-ink/65">Portfolio demo: nothing is sent or saved. The sample name and response stay in this page and clear when you refresh.</p>
      {confirmed && <p role="status" className="mt-5 rounded-xl bg-powder/40 p-4 text-ink">{attending === "accept" ? `Thanks, ${guest.trim()}! Your preview shows one place with the ${meal.toLowerCase()} menu.` : `Thank you for letting us know, ${guest.trim()}. Your preview shows that you cannot attend.`} This is a preview, not a confirmed RSVP.</p>}
    </form>
  </SectionShell>;
}
