
export function hasElementTotallyScrolled(
    element: HTMLElement, 
    direction: "vertical" |  "horizontal" = "vertical"
): boolean {
    if(direction === "vertical"){
        return Math.ceil(element.clientHeight + element.scrollTop) >= element.scrollHeight;
    }

    if(direction === "horizontal"){
        return Math.ceil(element.clientWidth + element.scrollLeft) >= element.scrollWidth;
    }

    return false;
}