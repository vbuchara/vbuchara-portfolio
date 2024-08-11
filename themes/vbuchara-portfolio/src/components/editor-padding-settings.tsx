import { PanelBody, PanelRow, TextControl } from "@wordpress/components";

export interface PaddingStyles {
    paddingBlock?: string,
    paddingInline?: string,
    paddingInlineStart?: string,
    paddingInlineEnd?: string,
    paddingBlockStart?: string,
    paddingBlockEnd?: string,
}

export interface EditorPaddingSettingsProps {
    padding: PaddingStyles,
    setPadding: (padding: Partial<PaddingStyles>) => void,
    title?: string,
    initialOpen?: boolean,
}

export function EditorPaddingSettings(props: EditorPaddingSettingsProps){
    const {
        padding,
        setPadding,
        title,
        initialOpen
    } = props;

    return (
    <PanelBody
        title={title}
        initialOpen={initialOpen}
    >
        <PanelRow>
            <TextControl
                label="Block (Top and Bottom)"
                value={padding.paddingBlock || ""}
                onChange={(value) => setPadding({ paddingBlock: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Inline (Left and Right)"
                value={padding.paddingInline || ""}
                onChange={(value) => setPadding({ paddingInline: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Block Start (Top)"
                value={padding.paddingBlockStart || ""}
                onChange={(value) => setPadding({ paddingBlockStart: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Block End (Bottom)"
                value={padding.paddingBlockEnd || ""}
                onChange={(value) => setPadding({ paddingBlockEnd: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Inline Start (Left)"
                value={padding.paddingInlineStart || ""}
                onChange={(value) => setPadding({ paddingInlineStart: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Inline End (Right)"
                value={padding.paddingInlineEnd || ""}
                onChange={(value) => setPadding({ paddingInlineEnd: value })}
            />
        </PanelRow>
    </PanelBody>
    );
}

export function getPaddingSettingsVariables(padding: PaddingStyles){
    return {
        "--padding-block": padding.paddingBlock,
        "--padding-inline": padding.paddingInline,
        "--padding-block-start": padding.paddingBlockStart,
        "--padding-block-end": padding.paddingBlockEnd,
        "--padding-inline-start": padding.paddingInlineStart,
        "--padding-inline-end": padding.paddingInlineEnd,
    } satisfies React.CSSProperties;
}