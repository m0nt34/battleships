import React from "react";

const Randomize = ({className=""}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        fill="black"
        d="M18 6.01L14 9V7h-4l-5 8H2v-2h2l5-8h5V3zM2 5h3l1.15 2.17l-1.12 1.8L4 7H2zm16 9.01L14 17v-2H9l-1.15-2.17l1.12-1.8L10 13h4v-2z"
      />
    </svg>
  );
};

export default Randomize;
