import Select, { 
    type CSSObjectWithLabel, 
    type StylesConfig, 
    type GroupBase, 
    type Props 
} from "react-select";
import CreatableSelect, { type CreatableProps } from "react-select/creatable";
import AsyncCreatableSelect, { type AsyncCreatableProps } from "react-select/async-creatable";

export type EditorSelectProps<
    Option = unknown, 
    IsMulti extends boolean = boolean, 
    Group extends GroupBase<Option> = GroupBase<Option>
> = 
    | EditorDefaultSelectProps<Option, IsMulti, Group> 
    | EditorCreatableSelectProps<Option, IsMulti, Group>
    | EditorAsyncCreatableSelectProps<Option, IsMulti, Group>; 

export function EditorSelect<
    Option = unknown, 
    IsMulti extends boolean = boolean, 
    Group extends GroupBase<Option> = GroupBase<Option>
>({ styles: propsStyle, type, ...props }: EditorSelectProps<Option, IsMulti, Group>){
    const {
        container: _,
        input: __,
        ...styles
    } = propsStyle || {} as StylesConfig<Option, IsMulti, Group>;

    const selectStyles = {
        container: (base, props) => {
            const newBase = {
                ...base,
                flex: 1,
            } satisfies CSSObjectWithLabel;

            return {
                ...newBase,
                ...propsStyle?.container?.(newBase, props)
            };
        },
        input: (base, props) => {
            const newBase = {
                ...base,
                "input:focus": {
                    boxShadow: "none"
                }
            } satisfies CSSObjectWithLabel;
            
            return {
                ...newBase,
                ...propsStyle?.input?.(newBase, props)
            };
        },
        ...styles
    } as const satisfies StylesConfig<Option, IsMulti, Group>;

    if(type === "async-creatable") return (
    <AsyncCreatableSelect
        isSearchable={true}
        styles={selectStyles}
        {...props}
    />
    );

    if(type === "creatable") return (
    <CreatableSelect
        isSearchable={true}
        styles={selectStyles}
        {...props}
    />
    );

    return(
    <Select
        isSearchable={true}
        styles={selectStyles}
        {...props}
    />
    );
}

interface EditorSelectPropBase {
    type?: "select" | "creatable" | "async-creatable";
}

export interface EditorDefaultSelectProps<
    Option = unknown, 
    IsMulti extends boolean = boolean, 
    Group extends GroupBase<Option> = GroupBase<Option>
> extends EditorSelectPropBase, Props<Option, IsMulti, Group>{
    type?: "select";
}

export interface EditorCreatableSelectProps<
    Option = unknown, 
    IsMulti extends boolean = boolean, 
    Group extends GroupBase<Option> = GroupBase<Option>
> extends EditorSelectPropBase, CreatableProps<Option, IsMulti, Group>{
    type: "creatable"
}

export interface EditorAsyncCreatableSelectProps<
    Option = unknown, 
    IsMulti extends boolean = boolean, 
    Group extends GroupBase<Option> = GroupBase<Option>
> extends EditorSelectPropBase, AsyncCreatableProps<Option, IsMulti, Group> {
    type: "async-creatable";
}