type BlockConfiguration<T extends Record<string, any> = {}> = Omit<
    import("@wordpress/blocks").BlockConfiguration<T>,
    "editorScript" | "attributes"
>;

declare interface BlockJson<T extends Record<string, any> = {}> extends BlockConfiguration<T> {
    name: string;
}

declare interface BlockJsonDefault<T extends Record<string, any> = {}> {
    default: BlockJson<T>
}