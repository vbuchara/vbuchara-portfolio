import type { SingleValue } from "react-select";
import { 
    BlockControls, 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    BaseControl,
    PanelBody,
    PanelRow,
    type SelectControlOptions,
    TextControl,
    ToolbarGroup 
} from "@wordpress/components";

import { 
    AlignContentOption,
    AlignContentOptions,
    AlignItemsOption,
    AlignItemsOptions,
    GridAutoFlowOption, 
    GridAutoFlowOptions,
    JustifyContentOption,
    JustifyContentOptions,
    JustifyItemsOption,
    JustifyItemsOptions, 
} from "@constants/block-styles";

import { EditorSelect } from "@components/editor-select";

import type { SectionEditComponentProps } from "../edit";
import type { SectionGridStyles, SectionPaddingStyles } from "../section";

export type SectionControlsProps = Pick<
    SectionEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface SectionInspectorControlsProps extends SectionControlsProps {};

export function SectionInspectorControls({
    attributes,
    setAttributes,
}: SectionInspectorControlsProps){
    function getGridStylePropertySelected<T extends SelectControlOptions>(
        options: T[],
        property: keyof SectionGridStyles
    ){
        return options.find((option) => {
            return option.value === attributes.styles.grid[property]
        });
    }

    function getHandleOnChangeSelectGridStyle<T extends SelectControlOptions>(
        property: keyof SectionGridStyles
    ){
        return (option: SingleValue<T>) => {
            if(!option) return;
 
            setAttributes({
                styles: {
                   ...attributes.styles,
                    grid: {
                       ...attributes.styles.grid,
                        [property]: option.value
                    }
                }
            });
        };
    }

    function getHandleOnChangeTextGridStyle(
        property: keyof SectionGridStyles
    ){
        return (value: string) => {
            setAttributes({
                styles: {
                   ...attributes.styles,
                    grid: {
                       ...attributes.styles.grid,
                        [property]: value
                    }
                }
            });
        };
    }

    function getHandleOnChangeTextPaddingStyle(
        property: keyof SectionPaddingStyles
    ){
        return (value: string) => {
            setAttributes({
                styles: {
                   ...attributes.styles,
                    padding: {
                        ...attributes.styles.padding,
                        [property]: value
                    }
                }
            });
        };
    }

    return (
    <InspectorControls
        group="styles"
    >
        <PanelBody
            title="Dimensions"
            initialOpen={true}
        >
            <PanelRow>
                <TextControl
                    label="Min Height"
                    value={attributes.styles.minHeight}
                    onChange={(value) => setAttributes({ 
                        ...attributes.styles,
                        styles: {
                            ...attributes.styles,
                            minHeight: value
                        }
                    })}
                />
            </PanelRow>
        </PanelBody>
        <PanelBody
            title="Padding"
            initialOpen={false}
        >
            <PanelRow>
                <TextControl
                    label="Block (Top and Bottom)"
                    value={attributes.styles.padding.paddingBlock || ""}
                    onChange={getHandleOnChangeTextPaddingStyle("paddingBlock")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Inline (Left and Right)"
                    value={attributes.styles.padding.paddingInline || ""}
                    onChange={getHandleOnChangeTextPaddingStyle("paddingInline")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Block Start (Top)"
                    value={attributes.styles.padding.paddingBlockStart || ""}
                    onChange={getHandleOnChangeTextPaddingStyle("paddingBlockStart")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Block End (Bottom)"
                    value={attributes.styles.padding.paddingBlockEnd || ""}
                    onChange={getHandleOnChangeTextPaddingStyle("paddingBlockEnd")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Inline Start (Left)"
                    value={attributes.styles.padding.paddingInlineStart || ""}
                    onChange={getHandleOnChangeTextPaddingStyle("paddingInlineStart")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Inline End (Right)"
                    value={attributes.styles.padding.paddingInlineEnd || ""}
                    onChange={getHandleOnChangeTextPaddingStyle("paddingInlineEnd")}
                />
            </PanelRow>
        </PanelBody>
        <PanelBody
            title="Grid"
            initialOpen={false}
        >
            <PanelRow>
                <TextControl
                    label="Grid Template Columns"
                    value={attributes.styles.grid.gridTemplateColumns}
                    onChange={getHandleOnChangeTextGridStyle("gridTemplateColumns")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Grid Template Rows"
                    value={attributes.styles.grid.gridTemplateRows}
                    onChange={getHandleOnChangeTextGridStyle("gridTemplateRows")}
                />
            </PanelRow>
            <PanelRow>
                <BaseControl
                    label="Grid Auto Flow"
                    className="site-section__editor-control"
                >
                    <EditorSelect
                        value={getGridStylePropertySelected(GridAutoFlowOptions, "gridAutoFlow")}
                        options={GridAutoFlowOptions}
                        onChange={getHandleOnChangeSelectGridStyle<GridAutoFlowOption>("gridAutoFlow")}
                    />
                </BaseControl>
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Grid Auto Columns"
                    value={attributes.styles.grid.gridAutoColumns}
                    onChange={getHandleOnChangeTextGridStyle("gridAutoColumns")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Grid Auto Rows"
                    value={attributes.styles.grid.gridAutoRows}
                    onChange={getHandleOnChangeTextGridStyle("gridAutoRows")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Column Gap"
                    value={attributes.styles.grid.columnGap}
                    onChange={getHandleOnChangeTextGridStyle("columnGap")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Row Gap"
                    value={attributes.styles.grid.rowGap}
                    onChange={getHandleOnChangeTextGridStyle("rowGap")}
                />
            </PanelRow>
            <PanelRow>
                <BaseControl
                    label="Justify Content"
                    className="site-section__editor-control"
                >
                    <EditorSelect
                        value={getGridStylePropertySelected(JustifyContentOptions, "justifyContent")}
                        options={JustifyContentOptions}
                        onChange={getHandleOnChangeSelectGridStyle<JustifyContentOption>("justifyContent")}
                    />
                </BaseControl>
            </PanelRow>
            <PanelRow>
                <BaseControl
                    label="Align Content"
                    className="site-section__editor-control"
                >
                    <EditorSelect
                        value={getGridStylePropertySelected(AlignContentOptions, "alignContent")}
                        options={AlignContentOptions}
                        onChange={getHandleOnChangeSelectGridStyle<AlignContentOption>("alignContent")}
                    />
                </BaseControl>
            </PanelRow>
            <PanelRow>
                <BaseControl
                    label="Justify Items"
                    className="site-section__editor-control"
                >
                    <EditorSelect
                        value={getGridStylePropertySelected(JustifyItemsOptions, "justifyItems")}
                        options={JustifyItemsOptions}
                        onChange={getHandleOnChangeSelectGridStyle<JustifyItemsOption>("justifyItems")}
                    />
                </BaseControl>
            </PanelRow>
            <PanelRow>
                <BaseControl
                    label="Align Items"
                    className="site-section__editor-control"
                >
                    <EditorSelect
                        value={getGridStylePropertySelected(AlignItemsOptions, "alignItems")}
                        options={AlignItemsOptions}
                        onChange={getHandleOnChangeSelectGridStyle<AlignItemsOption>("alignItems")}
                    />
                </BaseControl>
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}

export interface SectionBlockControlsProps extends SectionControlsProps {};

export function SectionBlockControls({
    attributes,
    setAttributes
}: SectionBlockControlsProps){
    return (
    <BlockControls>
        <ToolbarGroup>
            Configuration here
        </ToolbarGroup>
    </BlockControls>
    );
}