import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelect } from "@wordpress/data";
import { 
    closestCenter,
    DndContext, 
    type DragEndEvent, 
    DragOverlay, 
    type DragStartEvent, 
    KeyboardSensor, 
    PointerSensor, 
    useSensor, 
    useSensors 
} from "@dnd-kit/core";
import { 
    arrayMove,
    rectSwappingStrategy,
    SortableContext,
    sortableKeyboardCoordinates 
} from "@dnd-kit/sortable";
import { v4 as uuid } from "uuid";

import { ReactComponent as Plus } from "@assets/svgs/plus.svg";
import { ReactComponent as DragHandle } from "@assets/svgs/drag-handle.svg";
import portfolioBlocksStore from "@stores/portfolio-blocks";

import { EditorMenuItem, type EditorMenuItemType } from "./editor-menu-item";
import { EditorSortableMenuItem, EditorSortableMenuItemDragHandlerProps } from "./editor-sortable-menu-item";

export interface EditorSortableMenuControllerAttributes {
    menuItems: EditorMenuItemType[]
}

export type EditorSortableMenuControllerProps<T extends EditorSortableMenuControllerAttributes> = {
    attributes: EditorSortableMenuControllerAttributes,
    setAttributes: (attributes: Partial<EditorSortableMenuControllerAttributes>) => void,
    clientId: string
};

export function EditorSortableMenuController<
    T extends EditorSortableMenuControllerAttributes
>(props: EditorSortableMenuControllerProps<T>){
    const { attributes: { menuItems } } = props;

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const [activeId, setActiveId] = useState<string | null>(null);
    const activeMenuItem = useMemo(() => {
        return menuItems.find(({ id }) => id === activeId);
    }, [activeId]);

    const menuItemsDependency = menuItems.reduce((result, {id, title, url}) => result + id + title + url, "");

    const {
        registeredBlock
    } = useSelect((select) => {
        return {
            registeredBlock: select(portfolioBlocksStore).getRegisteredBlock(props.clientId)
        };
    }, [menuItemsDependency, props.clientId]);
    const {
        registerBlock
    } = useDispatch(portfolioBlocksStore);

    
    const setIndividualMenuItem = useCallback((item: EditorMenuItemType) => {
        props.setAttributes({
            menuItems: menuItems.map(menuItem => {
                if(menuItem.id === item.id){
                    return item;
                }

                return menuItem;
            })
        });
    }, [menuItemsDependency]);
    const removeIndividualMenuItem = useCallback((item: EditorMenuItemType) => {
        props.setAttributes({
            menuItems: menuItems.filter(menuItem => menuItem.id !== item.id)
        });

        if(registeredBlock){
            registeredBlock.registeredIds.delete(item.id);
            registerBlock(registeredBlock);
        }
    }, [menuItemsDependency]);

    function handleOnDragStart(event: DragStartEvent) {
        const { active } = event;
        
        setActiveId(active.id as string);
    }
    
    function handleOnDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        
        if (active.id !== over?.id) {
            const oldIndex = menuItems.findIndex(({ id }) => id === active.id);
            const newIndex = menuItems.findIndex(({ id }) => id === over?.id);

            if(oldIndex !== -1 && newIndex !== -1) {
                const newMenuItems = arrayMove(menuItems, oldIndex, newIndex);;
    
                props.setAttributes({
                    menuItems: newMenuItems
                });
            };
        }
        
        setActiveId(null);
    }

    function handleOnClickAddItem(){
        const newItemId = uuid();

        props.setAttributes({
            ...props.attributes,
            menuItems: [
                ...menuItems,
                {
                    id: newItemId,
                    title: `New Item ${menuItems.length + 1}`,
                    url: ""
                }
            ]
        });
        
        if(registeredBlock){
            registeredBlock.registeredIds.add(newItemId);
            registerBlock(registeredBlock);
        }
    }

    const DragHandler = useMemo(() => {
        return (props: Partial<EditorSortableMenuItemDragHandlerProps>) => {
            const {
                attributes,
                listeners
            } = props;

            return (
            <button
                className="editor-sortable-menu__item-drag-handler"
                {...attributes}
                {...listeners}
            >
                <DragHandle
                    className="editor-sortable-menu__item-drag-handler-icon"
                />
            </button>
            );
        }
    }, []);

    return (
    <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleOnDragStart}
        onDragEnd={handleOnDragEnd}
    >
        <SortableContext
            items={menuItems}
            strategy={rectSwappingStrategy}
        >
            <div className="editor-sortable-menu">
                {menuItems.map((item) => (
                <EditorSortableMenuItem
                    key={item.id}
                    className="editor-sortable-menu__item"
                    menuItem={item}
                    setMenuItem={setIndividualMenuItem}
                    removeMenuItem={removeIndividualMenuItem}
                    renderDragHandler={DragHandler}
                />
                ))}
                <button
                    type="button"
                    className="editor-sortable-menu__add-button"
                    onClick={handleOnClickAddItem}
                >
                    Add Item
                    <Plus className="editor-sortable-menu__add-button-icon"/>
                </button>
            </div>
        </SortableContext>
        <DragOverlay>
            {!activeMenuItem ? "" : (
            <EditorMenuItem 
                className="editor-sortable-menu__item"
                menuItem={activeMenuItem}
                setMenuItem={setIndividualMenuItem}
                removeMenuItem={removeIndividualMenuItem}
                renderDragHandler={DragHandler}
            />
            )}
        </DragOverlay>
    </DndContext>
    );
}