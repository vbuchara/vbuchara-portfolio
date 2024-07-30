import { 
    type Block,
    store as blockStore 
} from "@wordpress/blocks";
import { useSelect } from "@wordpress/data";
import { ValueOf } from "type-fest";


export function useBlockDefaultAttributes<
    T extends Record<string, any> = Record<string, any>
>(blockName: string, deps?: unknown[]){

    function mapBlockDefaultAttributes(entry: [keyof T, any]){
        const [key, value] = entry;

        if(typeof value === "object" && "default" in value){
            return [key, value.default];
        }

        return false;
    }

    const defaultAttributes = useSelect((select) => {
        const block = select(blockStore).getBlockType(blockName) as Block<T> | undefined;
        const newBlockAttributesEntries = Object.entries(block?.attributes || {})
            .map(mapBlockDefaultAttributes)
            .filter(Boolean) as [keyof T, ValueOf<T>][];

        if(newBlockAttributesEntries.length === 0) return undefined;

        return Object.fromEntries(newBlockAttributesEntries) as T;
    }, deps || []);

    return defaultAttributes;
}