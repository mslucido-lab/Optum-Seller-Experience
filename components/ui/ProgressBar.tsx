export default function ProgressBar({
  percent,
  color,
}: {
  percent: number;
  color: string;
}) {
  return (
    <div className="w-full h-[5px] bg-border rounded-[3px] overflow-hidden">
      <div
        className="h-full rounded-[3px]"
        style={{ width: `${percent}%`, background: color }}
      />
    </div>
  );
}
