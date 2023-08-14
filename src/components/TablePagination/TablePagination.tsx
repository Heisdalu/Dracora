import Context from "@/context/Context";
import React, { FC, useContext, useEffect, useState } from "react";
import { Back, BackWardIcon, Forward, ForwardIcon } from "./PaginateIcons";
import { scrollToTop } from "@/helpers/helper";

interface TablePaginationProps {
  data: object[];
  startingPoint: number;
  updateTableRowData: Function;
}

const TablePagination: FC<TablePaginationProps> = ({
  data,
  startingPoint,
  updateTableRowData,
}) => {
  const { isDesktopScreen } = useContext(Context);

  const [startPoint, setStartPoint] = useState<number>(startingPoint);
  const [listData, setListData] = useState<number[]>([]);

  const countOfElementDisplay =
    data.length % 15 === 0 ? data.length / 15 : Math.ceil(data.length / 15);

  const getTableRowData = (
    data: object[],
    start: number,
    lastValue: number
  ) => {
    if (start === lastValue) {
      // when start is close to the lst value... show the remainig value
      const valueForLastElem = (lastValue - 1) * 15;
      return data.slice(valueForLastElem, data.length);
    } else {
      const valueForElem = start * 15;
      return data.slice(valueForElem - 15, valueForElem);
    }
  };

  const getListData = (start: number, end: number) => {
    if (end <= 5) {
      return Array(end)
        .fill(1)
        .map((_, i) => i + 1);
    }

    if (start + 5 > end) {
      const endValue = end + 1 - 5;
      return Array(5)
        .fill(1)
        .map((_, i) => endValue + i);
    }

    // when start + 5 <= end
    return Array(5)
      .fill(1)
      .map((_, i) => start + i);
  };

  const moveForward = () => {
    if (startPoint === countOfElementDisplay) return;
    setStartPoint((prev) => prev + 1);
    scrollToTop();
  };

  const moveForwardEnd = () => {
    setStartPoint(countOfElementDisplay);
    scrollToTop();
  };

  const moveBackward = () => {
    scrollToTop();
    if (startPoint === 1) return;
    setStartPoint((prev) => prev - 1);
  };

  const moveBackwardEnd = () => {
    scrollToTop();
    setStartPoint(1);
  };

  const moveToValue = (value: number) => {
    scrollToTop();
    setStartPoint(value)
  };

  useEffect(() => {
    setListData(getListData(startPoint, countOfElementDisplay));

    updateTableRowData(
      getTableRowData(data, startPoint, countOfElementDisplay)
    );
  }, [startPoint]);

  return (
    <div className="flex space-x-1">
      <button
        className="border-1 px-0.5 disabled:opacity-[0.5]"
        onClick={moveBackwardEnd}
        disabled={startPoint === 1}
      >
        <BackWardIcon />
      </button>
      <button
        className="border-1 px-0.5 disabled:opacity-[0.5]"
        onClick={moveBackward}
        disabled={startPoint === 1}
      >
        <Back />
      </button>
      <div className="flex space-x-1">
        {isDesktopScreen ? (
          listData.map((el, i) => (
            <button
              key={i}
              onClick={moveToValue.bind(null, el)}
              className={`h-[26px] w-[26px] text-center rounded-[50%] ${
                startPoint === el ? "bg-dgPink text-white" : ""
              }`}
            >
              {el.toString()}
            </button>
          ))
        ) : (
          <span className="text-center">{`${startPoint} of ${countOfElementDisplay} pages`}</span>
        )}
      </div>
      <button
        className="border-1 px-0.5 disabled:opacity-[0.5]"
        onClick={moveForward}
        disabled={startPoint === countOfElementDisplay}
      >
        <Forward />
      </button>
      <button
        className="border-1 px-0.5 disabled:opacity-[0.5]"
        onClick={moveForwardEnd}
        disabled={startPoint === countOfElementDisplay}
      >
        <ForwardIcon />
      </button>
    </div>
  );
};
export default TablePagination;
