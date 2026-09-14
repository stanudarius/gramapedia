import { BookOpenCheck } from "lucide-react";

export function BrandMark() {
  return (
    <span className="brand-mark">
      <span className="brand-mark__icon" aria-hidden="true">
        <BookOpenCheck size={18} strokeWidth={1.8} />
      </span>
      <span className="brand-mark__name">Gramapedia</span>
      <span className="brand-mark__descriptor">club de gramatică</span>
    </span>
  );
}
