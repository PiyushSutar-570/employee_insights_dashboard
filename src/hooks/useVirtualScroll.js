import { ROW_HEIGHT, BUFFER } from "../constants/config";

export default function useVirtualScroll(data, scrollTop, containerHeight) {

  const totalRows = data.length;

  const visibleRows = Math.ceil(containerHeight / ROW_HEIGHT);

  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / ROW_HEIGHT) - BUFFER
  );

  const endIndex = Math.min(
    totalRows,
    startIndex + visibleRows + BUFFER * 2
  );

  const visibleData = data.slice(startIndex, endIndex);

  const offsetY = startIndex * ROW_HEIGHT;

  const totalHeight = totalRows * ROW_HEIGHT;

  return { visibleData, offsetY, totalHeight };
}