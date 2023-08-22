import { StrictModeDroppable } from "@/components/StrictDnd/StrictModeDroppable";
import KanbanRow from "./KanbanRow";
import React, { FC } from "react";

interface KanbanColumnProps {
  droppableId: string;
  title: string;
  message: { id: string; messageTitle: string; messageText: string }[];
}

const KanbanColumn: FC<KanbanColumnProps> = ({
  droppableId,
  message,
  title,
}) => {
  return (
    <div className="bg-[#F5F5F5] min-w-[250px] w-100 py-0.75 px-0.5 rounded-[4px]">
      <div className="flex items-center">
        <h1 className="text-orblack text-15px font-[400] break-all">{title}</h1>
        <span className="text-12px text-orblack font-[400] ml-[5px]">
          - {message.length} items
        </span>
      </div>
      <StrictModeDroppable droppableId={droppableId} type="group">
        {(provided) => (
          <div
            className="py-0.5 space-y-0.5 h-[95%] mt-0.5"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {/* show empty message for empty cards */}
            {message.length === 0 && (
              <div className="text-14px font-[400] text-black">
                No Task to Display
              </div>
            )}
            {/* show message for available cards */}

            {message.map(({ id, messageTitle, messageText }, i) => (
              <KanbanRow
                draggableId={id.toString()}
                index={i}
                key={id.toString()}
                rowTitle={messageTitle}
                rowText={messageText}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </div>
  );
};
export default KanbanColumn;
