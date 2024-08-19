import React from "react";
import { useDroppable } from "@dnd-kit/core";

const DroppableArea = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "304px",
        height: "304px",
        border: `2px dashed ${isOver ? "lightgreen" : "lightgray"}`,
        backgroundColor: isOver ? "lightgreen" : "white",
        margin: "20px",
        alignContent: "flex-start",
        boxSizing: "border-box", 
      }}
    >
      {children}
    </div>
  );
};

export default DroppableArea;
