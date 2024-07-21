
export type ArrayDependencyValidTypes = Record<string, any> | string | number;

export function getArrayDependency<
    ItemType extends string | number,
>(arrayDependency: ItemType[]): string;

export function getArrayDependency<
    ItemType extends Record<string, any>,
>(arrayDependency: ItemType[], keys: (keyof ItemType)[]): string;

export function getArrayDependency(
    arrayDependency: any[], 
    keys?: any
): string{
    if(!arrayDependency) return "";

    return arrayDependency.reduce((result, value) => {
        if(!isValidDependency(value)) return result;

        if(typeof value === "string" || typeof value === "number"){
            return result + value;
        }

        if(typeof value === "object" && isArrayOfKeys(keys, value)){
            return result + keys.reduce((result, key) => {
                return result + value[key];
            }, "");
        }

        return result;
    }, "");
}

function isValidDependency(value: any): value is ArrayDependencyValidTypes{
    const typesAllowed: string[] = [
        "number", "string", "object"
    ] satisfies Typeof[];

    return typesAllowed.includes(typeof value);
}

function isArrayOfKeys<
    ObjectType extends Record<string, any>
>(
    arrayKey: any, 
    object: ObjectType
): arrayKey is (keyof ObjectType)[] {
    return Array.isArray(arrayKey) && arrayKey.every(key => key in object);
}