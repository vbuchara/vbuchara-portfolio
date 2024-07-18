import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { 
    EditorMenuItem, 
    type EditorMenuItemProps
} from "./editor-menu-item";

export type EditorSortableMenuItemDragHandlerProps = Pick<
    ReturnType<typeof useSortable>,
    "attributes" | "listeners"
>;

export interface EditorSortableMenuItemProps extends EditorMenuItemProps{
    renderDragHandler: (props: EditorSortableMenuItemDragHandlerProps) => React.ReactElement
}

export function EditorSortableMenuItem({
    renderDragHandler: DragHandler,
    ...props
}: EditorSortableMenuItemProps){
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id: props.menuItem.id});
      
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging? 0.5 : 1,
    } as const satisfies React.CSSProperties;

    return (
    <EditorMenuItem
        className="editor-sortable-menu__item"
        {...props}
        ref={setNodeRef}
        style={style}
        renderDragHandler={() => (
        <DragHandler 
            attributes={attributes} 
            listeners={listeners} 
        />
        )}
    />
    );
}