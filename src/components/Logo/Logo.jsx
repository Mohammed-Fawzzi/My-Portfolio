export default function Logo({ className = "" }) {
  return (
    <span
      dir="ltr"
      className={`inline-flex items-baseline whitespace-nowrap ${className}`}
    >
      <span>MF</span>
      <span
        aria-hidden="true"
        className="inline-block w-2 h-2 shrink-0 bg-accent rounded-full -translate-x-[5px] translate-y-[3px]"
      />
    </span>
  );
}
