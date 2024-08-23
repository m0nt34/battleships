import React from "react";

const Ranks = () => {
  const array = Array(10)
    .fill()
    .map((_, i) => i+1);
  return (
    <ul className="mt-8 mr-3">
      {array.map((x) => (
        <li className="flex items-center justify-end h-[35px] " key={x}>{x}</li>
      ))}
    </ul>
  );
};

export default Ranks;
