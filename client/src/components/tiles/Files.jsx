import React from 'react'
import { toChar } from "../../utils/ToChar";
const Files = () => {
  const array = Array(10)
    .fill()
    .map((_, i) => toChar(i));
  return (
    <ul className='w-full flex mb-2'>
      {array.map((x) => (
        <li className="flex items-center justify-center w-[35px]" key={x}>{x}</li>
      ))}
    </ul>
  );
}

export default Files