import { Coffee, Heart, Plane } from "lucide-react";
import { SectionShell } from "../components/SectionShell";

const wishes = [
  { icon: Heart, title: "A memory to keep", text: "Bring a favourite photograph or a handwritten note for our memory box. We would love to hear your side of our story." },
  { icon: Coffee, title: "Something for our table", text: "A much-loved recipe, a cookbook with a note inside, or a small piece for our first home together would mean the world." },
  { icon: Plane, title: "Our next adventure", text: "We are dreaming of a honeymoon filled with coastal walks, little cafés and places we have never been. Your good wishes are the best send-off." }
];

export function Gifts() {
  return <SectionShell id="gifts" eyebrow="With gratitude" title="Your presence is our favourite gift" intro="Celebrating with the people we love is all we could ask for. If you would still like to bring something, here are a few ideas close to our hearts." className="bg-powder/35">
    <div className="grid gap-6 md:grid-cols-3">
      {wishes.map(({icon: Icon, title, text}) => <article key={title} className="rounded-3xl border border-powder bg-white p-7 shadow-soft"><Icon className="mb-4 text-steel" size={28}/><h3 className="font-display text-2xl text-ink">{title}</h3><p className="mt-3 leading-relaxed text-ink/75">{text}</p></article>)}
    </div>
  </SectionShell>;
}
