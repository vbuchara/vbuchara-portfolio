import { MouseEvent, useMemo, useRef, useState } from "react";
import { 
    components, 
} from "react-select";
import {
    closestCenter, 
    DndContext, 
    type DragStartEvent, 
    type DragEndEvent, 
    KeyboardSensor, 
    PointerSensor, 
    useSensor, 
    useSensors, 
    DragOverlay
} from "@dnd-kit/core";
import { 
    arrayMove,
    rectSwappingStrategy,
    SortableContext, 
    sortableKeyboardCoordinates, 
    useSortable
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { 
    GroupBase, 
    MultiValueGenericProps, 
    MultiValueProps, 
} from "react-select/dist/declarations/src";
import type { 
    Props
} from "react-select/dist/declarations/src/Select";

import { 
    EditorSelect,
    EditorSelectProps 
} from "./editor-select";

export type EditorSortableSelectOption = {
    id: string | number;
    label: string;
    [key: string]: any;
}

export function EditorSortableSelectMultiValue<
    Option extends EditorSortableSelectOption = EditorSortableSelectOption,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: MultiValueProps<Option, boolean, Group>){
    const {
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id: props.data.id});
      
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging? 0.5 : 1,
    } as const satisfies React.CSSProperties;

    function handleOnMouseDownMultiValue(event: MouseEvent){
        event.preventDefault();
        event.stopPropagation();
    }
    
    return (
    <components.MultiValue<Option, boolean, Group>
        {...props}
        innerProps={{
            ...props.innerProps,
            style: style,
            onMouseDown: handleOnMouseDownMultiValue,
            ref: setNodeRef
        }}
    />
    );
}

export function EditorSortableSelectMultiValueLabel(props: MultiValueGenericProps){
    const {
        attributes,
        listeners
    } = useSortable({id: props.data.id});

    return (
    <components.MultiValueLabel
        {...props}
        innerProps={{
            ...props.innerProps,
            ...attributes,
            ...listeners
        }}
    />
    );
}

export type EditorSortableSelectProps<
    Option extends EditorSortableSelectOption = EditorSortableSelectOption,
    IsMulti extends boolean = boolean, 
    Group extends GroupBase<Option> = GroupBase<Option>
> = Omit<EditorSelectProps<Option, IsMulti, Group>, "options" | "value" | "isMulti"> & {
    options?: readonly Option[],
    value?: readonly Option[],
    setValue: (value: readonly Option[]) => void
};

export function EditorSortableSelect<
    Option extends EditorSortableSelectOption = EditorSortableSelectOption, 
    Group extends GroupBase<Option> = GroupBase<Option>
>({
    setValue,
    ...props
}: EditorSortableSelectProps<Option, boolean, Group>){
    const {
        options,
        value
    } = props;

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const multiValuesProps = useRef(new Map<string | number, MultiValueProps<Option, boolean, Group>>());
    const [activeId, setActiveId] = useState<string | number | null>(null);
    const activeOption = useMemo(() => {
        return value?.find(option => option.id === activeId);
    }, [activeId]);
    const activeMultiValueProps = useMemo(() => {
        return activeId ? multiValuesProps.current.get(activeId) : undefined;
    }, [activeId]);

    function handleOnDragStart(event: DragStartEvent) {
        const { active } = event;
        
        setActiveId(active.id);
    }
    
    function handleOnDragEnd(event: DragEndEvent) {
        if(!value) return;

        const { active, over } = event;
        
        if (active.id !== over?.id) {
            const oldIndex = value.findIndex(({ id }) => id === active.id);
            const newIndex = value.findIndex(({ id }) => id === over?.id);

            if(oldIndex !== -1 && newIndex !== -1) {
                const newValue = arrayMove([...value], oldIndex, newIndex);;
                
                setValue(newValue);
            };
        }
        
        setActiveId(null);
    }
    
    return (
    <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleOnDragStart}
        onDragEnd={handleOnDragEnd}
    >
        <SortableContext
            items={[...(options || [])]}
            strategy={rectSwappingStrategy}
        >
            <EditorSelect<Option, boolean, Group>
                {...props}
                isMulti={true}
                components={{
                    ...props.components,
                    MultiValue: (props) => {
                        multiValuesProps.current.set(props.data.id, props);
                        return (
                            <EditorSortableSelectMultiValue
                                {...props}
                            />
                        );
                    },
                    MultiValueLabel: EditorSortableSelectMultiValueLabel
                }}
            />
        </SortableContext>
        <DragOverlay>
            {!activeOption || !activeMultiValueProps ? "" : (
            <components.MultiValue<Option, boolean, Group>
                {...activeMultiValueProps}
            />
            )}
        </DragOverlay>
    </DndContext>
    );
}