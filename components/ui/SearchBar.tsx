export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex items-center gap-2 bg-navy-card border border-border rounded-full px-3.5 py-[7px] min-w-[200px]">
      <span className="text-text-muted text-sm">🔍</span>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full placeholder:text-text-subtle"
      />
    </div>
  );
}
