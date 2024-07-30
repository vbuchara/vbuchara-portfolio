import { useBlockProps } from "@wordpress/block-editor";

import { 
    type HTMLAttributes,
    type DetailedHTMLProps 
} from "react";

export type EditorWrapperProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function EditorWrapper({ children, style, ...props }: EditorWrapperProps){

    const blockProps = useBlockProps();
    
    return (
    <div
        {...blockProps}
        {...props}
        className={`${blockProps.className} ${props.className ? props.className : ""}`}
        style={{
            ...blockProps.style,
            padding: 0,
            ...style, 
        }}
    >
        {children}
    </div>
    );
}