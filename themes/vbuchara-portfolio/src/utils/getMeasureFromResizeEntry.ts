import type { UseMeasureRect } from "react-use/lib/useMeasure";

export function getMeasureFromResizeEntry(entry: ResizeObserverEntry): UseMeasureRect{
    return {
        x: entry.contentRect.x,
        y: entry.contentRect.y,
        width: entry.contentRect.width,
        height: entry.contentRect.height,
        bottom: entry.contentRect.bottom,
        top: entry.contentRect.top,
        left: entry.contentRect.left,
        right: entry.contentRect.right,
    };
}