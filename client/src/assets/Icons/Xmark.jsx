import React from "react";

const Xmark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="absolute z-50 h-full w-full"
    >
      <path
        fill="#ff4444"
        stroke="#ff4444"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
      />
    </svg>
  );
};

export default Xmark;
