export function EditorAnchor(props: React.AnchorHTMLAttributes<HTMLAnchorElement>){
    return (
    <a 
        onClick={(event) => event.preventDefault()} 
        {...props} 
    />
    );
}