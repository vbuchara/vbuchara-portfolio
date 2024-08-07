import { 
    type RefCallback,
    type RefObject,
    type AnchorHTMLAttributes, 
    forwardRef
} from "react";

function EditorAnchorComponent(
    props: AnchorHTMLAttributes<HTMLAnchorElement>,
    ref?: RefObject<HTMLAnchorElement> | RefCallback<HTMLAnchorElement> | null
){
    return (
    <a 
        ref={ref}
        onClick={(event) => event.preventDefault()} 
        {...props} 
    />
    );
}

export const EditorAnchor = forwardRef(EditorAnchorComponent);