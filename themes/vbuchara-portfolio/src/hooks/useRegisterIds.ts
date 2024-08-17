import { useEffect, useRef } from "react";
import { store as editorStore } from "@wordpress/editor";
import { useDispatch, useSelect } from "@wordpress/data";
import { v4 as uuid } from "uuid";

import portfolioBlocksStore, { type ClientId } from "@stores/portfolio-blocks";
import { getArrayDependency } from "@src/utils/getArrayDependency";

export interface RegisterableItem {
    id: string;
}

export interface UserRegisterIdsProps<ItemType extends RegisterableItem = RegisterableItem> {
    items: ItemType[];
    setItems: (items: ItemType[]) => void;
    clientId: ClientId;
}

export function useRegisterIds<
    ItemsType extends RegisterableItem
>(props: UserRegisterIdsProps<ItemsType>){
    const hasRegisteredIds = useRef(false);

    const {
        items,
        setItems,
        clientId
    } = props;

    const itemsDependency = getArrayDependency<RegisterableItem>(items, ["id"]);

    const templateId = useSelect((select) => {
        return select(editorStore).getCurrentPostId();
    }, [itemsDependency, clientId]);

    const { 
        getRegisteredBlock, 
        isRegisteredId 
    } = useSelect((select) => select(portfolioBlocksStore), [itemsDependency, clientId]);
    const { 
        registerBlock,
        removeRegisteredBlockById
    } = useDispatch(portfolioBlocksStore);

    useEffect(() => {
        const registeredBlock = getRegisteredBlock(clientId);
        const blockRegisteredIds = registeredBlock?.registeredIds || new Set();
        
        const validatedMenuItems = items.map((item) => {
            if(!isRegisteredId(item.id, String(templateId)) && item.id){
                blockRegisteredIds.add(item.id);
                return item;
            }

            const newId = uuid();
            blockRegisteredIds.add(newId);

            return {
                ...item,
                id: newId,
            }
        });
        
        const validatedMenuItemsDependency = getArrayDependency<RegisterableItem>(
            validatedMenuItems, 
            ["id"]
        );
        
        if(itemsDependency !== validatedMenuItemsDependency){
            setItems(validatedMenuItems);
        }

        registerBlock({
            ...registeredBlock,
            clientId: clientId,
            registeredIds: blockRegisteredIds,
            pageTemplateId: String(templateId)
        });

        return () => {
            removeRegisteredBlockById(clientId);
        };
    }, [itemsDependency, templateId]);
}