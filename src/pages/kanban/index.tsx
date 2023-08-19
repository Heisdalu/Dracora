import HomePageContainer from "@/components/HomePage/HomePageContainer";
import React, { FC, useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import KanbanColumn from "@/components/Kanban/KanbanColumn";
import { kanbanData } from "@/data/kanbanData";

const Kanban: FC = () => {
  const [data, setData] = useState(kanbanData);
  const [ready, setReady] = useState(false);

  const handleDragEnd = (results: DropResult) => {
    const { destination, source } = results;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    // share data with same column
    if (source.droppableId === destination.droppableId) {
      const arr = [...data];
      const getSourceValue = arr.find((el) => el.title === source.droppableId)!;
      const [removedValue] = getSourceValue.message.splice(source.index, 1);
      getSourceValue?.message.splice(destination.index, 0, removedValue);
      return setData(arr);
    }

    // share data with another column
    if (source.droppableId !== destination.droppableId) {
      const copyArr = [...data];
      const getSourceValue = copyArr.find(
        (el) => el.title === source.droppableId
      )!;
      const getDestinationValue = copyArr.find(
        (el) => el.title === destination.droppableId
      )!;

      const removedDataInSouceArr = getSourceValue.message.splice(
        source.index,
        1
      );
      getDestinationValue.message.splice(
        destination.index,
        0,
        ...removedDataInSouceArr
      );

      return setData(copyArr);
    }

    return;
  };

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <HomePageContainer>
      {ready && (
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="rounded-[24px] verflow-x-scroll overflow-y-hidden w-100 md:max-w-[450px] lg:max-w-[700px] vlg:max-w-[1000px] p-1 pr-[0] space-y-[1.5rem] bg-white">
            <h1 className="text-otherHeader text-30px font-[800]">Kanban</h1>
            <div className="w-100 overflow-x-scroll container py-1 pr-1 md:pl-0.5  flex space-x-[0.625rem]">
              {data.map((el) => (
                <KanbanColumn
                  droppableId={el.title}
                  message={el.message}
                  key={el.title}
                  title={el.title}
                />
              ))}
            </div>
          </div>
        </DragDropContext>
      )}
    </HomePageContainer>
  );
};
export default Kanban;
