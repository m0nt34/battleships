// Draggable.jsx
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
const Draggable = ({ children = "", id, left = 0 }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="absolute z-100"
      style={{
        transform: CSS.Translate.toString(transform),
        cursor: "move",
        left: left,
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
