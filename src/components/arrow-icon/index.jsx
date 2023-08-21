const ArrowIcon = ({ width, height, color, direction }) => {
  // Set default values for width, height, color, and direction
  width = width || "24";
  height = height || "24";
  color = color || "#000";
  direction = direction || "right";

  const arrowDirection =
    direction === "left"
      ? "rotate(180)"
      : direction === "up"
      ? "rotate(-90)"
      : direction === "down"
      ? "rotate(90)"
      : "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      transform={arrowDirection}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M14 7l-5 5 5 5V7z" />
    </svg>
  );
};

export default ArrowIcon;
