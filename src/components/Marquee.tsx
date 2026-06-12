type Props = {
  text: string;
  speed?: string;
  className?: string;
};

export default function Marquee({ text, speed = "28s", className = "" }: Props) {
  const segment = `${text} — `;
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden>
      <div
        className="marquee-track inline-block"
        style={{ "--marquee-speed": speed } as React.CSSProperties}
      >
        <span>{segment.repeat(4)}</span>
        <span>{segment.repeat(4)}</span>
      </div>
    </div>
  );
}
