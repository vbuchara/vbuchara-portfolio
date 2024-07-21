// CSS
declare module '*.css' {}
declare module '*.scss' {}
declare module '*.sass' {}
declare module '*.less' {}
declare module '*.styl' {}
declare module '*.stylus' {}
declare module '*.pcss' {}
declare module '*.sss' {}

// SVG and Image Formats
declare module '*.svg' {
    const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    const url: string;

    export { ReactComponent };
    export default url;
}

declare module '*.png' {
    const url: string;

    export default url;
}