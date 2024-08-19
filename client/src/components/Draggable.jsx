// Draggable.jsx
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
const Draggable = ({ children = "", id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: CSS.Translate.toString(transform),
        zIndex: "2",
        cursor: "move",
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
