import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useGame } from "../store/useGame";

const Draggable = ({ children, id, left, top = "" }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const { gameStarted } = useGame();
  const style = {
    transform: CSS.Translate.toString(transform),
    left,
    top,
  };
  return (
    <div
      className={`absolute select-none  ${
        gameStarted ? "pointer-events-none" : null
      }`}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Draggable;
