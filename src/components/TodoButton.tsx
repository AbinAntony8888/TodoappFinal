import React from "react";
type todoButtonType = {
  value: string;
  colour: string;
  buttonClick?: () => void;
};
export default function TodoButton({
  value,
  colour,
  buttonClick,
}: todoButtonType) {
  return (
    <div>
      <button
        className={` p-1  ml-6 ${colour} text-white font-medium ring-1 ring-amber-400`}
        onClick={buttonClick}
      >
        {value}
      </button>
    </div>
  );
}
