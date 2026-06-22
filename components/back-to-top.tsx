import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <a className="back-to-top" href="#top" aria-label="Back to top">
      <ArrowUp size={20} aria-hidden="true" />
    </a>
  );
}
