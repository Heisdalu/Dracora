import { Draggable } from "react-beautiful-dnd";
import React, { FC } from "react";

interface KanbanRowProps {
  index: number;
  draggableId: string;
  rowTitle: string;
  rowText: string;
}

const KanbanRow: FC<KanbanRowProps> = ({
  draggableId,
  index,
  rowTitle,
  rowText,
}) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          className="bg-white p-[11px] space-y-0.5"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h1 className="text-14px font-[400] text-black">{rowTitle}</h1>
          <p className="text-[#00000099] font-[400] text-13px">{rowText}.</p>
        </div>
      )}
    </Draggable>
  );
};
export default KanbanRow;
