export default function Chip({ label, color, textColor }) {
  return (
    <div
      className={`rounded-xl py-0.5 px-2.5 border border-transparent ${color} ${textColor}`}
    >
      {label}
    </div>
  );
}
