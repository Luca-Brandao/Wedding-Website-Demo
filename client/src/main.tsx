import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeddingApp from "./pages/WeddingApp";
import "./styles/index.css";

function dismissInitialLoader() {
  const loader = document.getElementById("initial-loader");
  if (!loader) return;

  const startedAt = performance.now();
  const minimumDuration = 1050;
  const maximumDuration = 3600;
  let isDismissed = false;

  const dismiss = () => {
    if (isDismissed) return;
    isDismissed = true;

    const elapsed = performance.now() - startedAt;
    const remaining = Math.max(minimumDuration - elapsed, 0);

    window.setTimeout(() => {
      loader.classList.add("initial-loader--hidden");
      window.setTimeout(() => loader.remove(), 900);
    }, remaining);
  };

  if (document.readyState === "complete") {
    dismiss();
  } else {
    window.addEventListener("load", dismiss, { once: true });
    window.setTimeout(dismiss, maximumDuration);
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WeddingApp />
  </StrictMode>
);

dismissInitialLoader();
