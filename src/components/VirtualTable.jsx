import { useState, useRef } from "react";
import useVirtualScroll from "../hooks/useVirtualScroll";
import { ROW_HEIGHT } from "../constants/config";

export default function VirtualTable({ data }) {

  const containerRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);

  const containerHeight = 500;

  const { visibleData, offsetY, totalHeight } =
    useVirtualScroll(data, scrollTop, containerHeight);

  const handleScroll = () => {
    setScrollTop(containerRef.current.scrollTop);
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="border overflow-auto"
      style={{ height: containerHeight }}
    >

      <div style={{ height: totalHeight, position: "relative" }}>

        <div style={{ transform: `translateY(${offsetY}px)` }}>

          {visibleData.map((employee, index) => (
            <div
              key={index}
              className="flex justify-between border-b p-2"
              style={{ height: ROW_HEIGHT }}
            >
              <span>{employee[0]}</span>
              <span>{employee[1]}</span>
              <span>{employee[2]}</span>
              <span>{employee[3]}</span>
              <span>{employee[4]}</span>
              <span>{employee[5]}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}