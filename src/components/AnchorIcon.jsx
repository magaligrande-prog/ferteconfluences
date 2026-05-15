export default function AnchorIcon({ size = 32, color = 'white', strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="8" r="3" stroke={color} strokeWidth={strokeWidth} />
      <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth={strokeWidth} />
      <line x1="16" y1="11" x2="16" y2="26" stroke={color} strokeWidth={strokeWidth} />
      <path d="M7 26 Q16 19 25 26" stroke={color} strokeWidth={strokeWidth} fill="none" />
      <line x1="7" y1="26" x2="4" y2="24" stroke={color} strokeWidth={strokeWidth} />
      <line x1="25" y1="26" x2="28" y2="24" stroke={color} strokeWidth={strokeWidth} />
      <line x1="9" y1="17" x2="23" y2="17" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  )
}
