import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { SectionShell } from "../components/SectionShell";

const details = {
  Bank: "DEMONSTRATION ONLY",
  "Account Holder": "Fictional Sample Couple",
  "Account Number": "NOT-A-REAL-ACCOUNT",
  "Branch Code": "NOT-APPLICABLE"
};

export function Gifts() {
  const [copied, setCopied] = useState("");

  const writeClipboard = async (value: string) => {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch {
        // Some mobile browsers expose the Clipboard API but block it outside
        // stricter permission contexts, so fall back to a selected textarea.
      }
    }

    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, value.length);

    try {
      return document.execCommand("copy");
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const copy = async (value: string, label: string) => {
    const copiedSuccessfully = await writeClipboard(value);
    setCopied(copiedSuccessfully ? label : "Copy unavailable");
    window.setTimeout(() => setCopied(""), 2200);
  };

  return (
    <SectionShell
      id="gifts"
      eyebrow="With Gratitude"
      title="Gift Contributions - Demo"
      intro="This is a user-interface demonstration. It contains no banking details and does not accept payments."
      className="bg-powder/35"
    >
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-powder bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-3">
          {Object.entries(details).map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 rounded-2xl bg-petal/55 px-4 py-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{label}</p>
                <p className="mt-1 font-semibold text-ink">{value}</p>
              </div>
              {label === "Account Number" && (
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-steel text-white" onClick={() => copy(value, label)} aria-label="Copy account number">
                  <Copy size={17} />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-ink shadow-glow transition hover:bg-petal"
          onClick={() => copy(Object.entries(details).map(([label, value]) => `${label}: ${value}`).join("\n"), "All details")}
        >
          {copied === "Copy unavailable" ? <Copy size={18} /> : copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? (copied === "Copy unavailable" ? copied : `${copied} copied`) : "Copy All Details"}
        </button>
      </div>
    </SectionShell>
  );
}
