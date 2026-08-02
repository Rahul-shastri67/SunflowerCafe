export function SunflowerIcon({
  size = 32,
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sunflower Cafe Logo"
    >
      <g transform="translate(32 32)">
        {/* Petals */}
        <g fill="#F7C948">
          {Array.from({ length: 12 }).map((_, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="-19"
              rx="6.5"
              ry="14"
              transform={`rotate(${index * 30})`}
            />
          ))}
        </g>

        {/* Outer Center */}
        <circle
          r="10.5"
          fill="#3E2C24"
        />

        {/* Inner Center */}
        <circle
          r="5.5"
          fill="#5A4232"
        />
      </g>
    </svg>
  );
}

export default SunflowerIcon;