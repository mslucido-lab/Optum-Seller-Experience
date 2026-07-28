import { TrackerStep } from "@/lib/types";

const stepClass: Record<TrackerStep, string> = {
  empty: "border-border-lt",
  done: "border-green bg-green/[.14] text-green",
  warn: "border-yellow bg-yellow/[.14] text-yellow",
  error: "border-red bg-red/[.14] text-red",
};

const stepGlyph: Record<TrackerStep, string> = {
  empty: "",
  done: "✓",
  warn: "!",
  error: "✕",
};

export default function TrackerCircles({ steps }: { steps: TrackerStep[] }) {
  return (
    <div className="flex gap-1">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center text-[8px] ${stepClass[step]}`}
        >
          {stepGlyph[step]}
        </div>
      ))}
    </div>
  );
}
