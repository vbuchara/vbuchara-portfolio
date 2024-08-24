import { SingleValue } from "react-select";
import { 
    BaseControl,
    PanelBody, 
    PanelRow, 
    type SelectControlOptions, 
    TextControl
} from "@wordpress/components";

import { 
    AlignContentOption,
    AlignContentOptions,
    AlignContentValue, 
    AlignItemsOption, 
    AlignItemsOptions, 
    AlignItemsValue, 
    GridAutoFlowOption, 
    GridAutoFlowOptions, 
    GridAutoFlowValue, 
    JustifyContentOption, 
    JustifyContentOptions, 
    JustifyContentValue, 
    JustifyItemsOption, 
    JustifyItemsOptions, 
    JustifyItemsValue 
} from "@constants/block-styles";

import { EditorSelect } from "./editor-select";

export interface GridStyles {
    gridTemplateColumns: string,
    gridTemplateRows: string,
    gridAutoFlow: GridAutoFlowValue,
    gridAutoColumns: string,
    gridAutoRows: string,
    rowGap: string,
    columnGap: string,
    justifyContent: JustifyContentValue,
    alignContent: AlignContentValue,
    justifyItems: JustifyItemsValue,
    alignItems: AlignItemsValue,
}

export type EditorGridSettingsProps<
    G extends GridStyles = GridStyles
> = {
    grid: G,
    setGrid: (grid: Partial<G>) => void,
    title?: string,
    initialOpen?: boolean,
    disableGridProperties?: Record<keyof G, boolean>

};

export function EditorGridSettings<
    G extends GridStyles = GridStyles
>(props: EditorGridSettingsProps<G>){
    const { grid, setGrid, disableGridProperties } = props;

    function getGridStylePropertySelected<T extends SelectControlOptions>(
        options: T[],
        property: keyof G
    ){
        return options.find((option) => {
            return option.value === grid[property]
        });
    }

    function getHandleOnChangeSelectGridStyle<T extends SelectControlOptions>(
        property: keyof G
    ){
        return (option: SingleValue<T>) => {
            if(!option) return;
 
            setGrid({ [property]: option.value } as Partial<G>);
        };
    }

    function getHandleOnChangeTextGridStyle(
        property: keyof G
    ){
        return (value: string) => {
            setGrid({ [property]: value } as Partial<G>);
        };
    }

    return (
    <PanelBody
        title={props.title ? props.title : "Grid"}
        initialOpen={props.initialOpen ? props.initialOpen : false}
    >
        {disableGridProperties?.gridTemplateColumns ? "" : (
        <PanelRow>
            <TextControl
                label="Grid Template Columns"
                className="portfolio-editor__control"
                value={grid.gridTemplateColumns}
                onChange={getHandleOnChangeTextGridStyle("gridTemplateColumns")}
            />
        </PanelRow>
        )}
        {disableGridProperties?.gridTemplateRows? "" : (
        <PanelRow>
            <TextControl
                label="Grid Template Rows"
                className="portfolio-editor__control"
                value={grid.gridTemplateRows}
                onChange={getHandleOnChangeTextGridStyle("gridTemplateRows")}
            />
        </PanelRow>
        )}
        {disableGridProperties?.gridAutoFlow ? "" : (
        <PanelRow>
            <BaseControl
                label="Grid Auto Flow"
                className="portfolio-editor__control"
            >
                <EditorSelect
                    value={getGridStylePropertySelected(GridAutoFlowOptions, "gridAutoFlow")}
                    options={GridAutoFlowOptions}
                    onChange={getHandleOnChangeSelectGridStyle<GridAutoFlowOption>("gridAutoFlow")}
                />
            </BaseControl>
        </PanelRow>
        )}
        {disableGridProperties?.gridAutoColumns? "" : (
        <PanelRow>
            <TextControl
                label="Grid Auto Columns"
                className="portfolio-editor__control"
                value={grid.gridAutoColumns}
                onChange={getHandleOnChangeTextGridStyle("gridAutoColumns")}
            />
        </PanelRow>
        )}
        {disableGridProperties?.gridAutoRows ? "" : (
        <PanelRow>
            <TextControl
                label="Grid Auto Rows"
                className="portfolio-editor__control"
                value={grid.gridAutoRows}
                onChange={getHandleOnChangeTextGridStyle("gridAutoRows")}
            />
        </PanelRow>
        )}
        {disableGridProperties?.columnGap ? "" : (
        <PanelRow>
            <TextControl
                label="Column Gap"
                className="portfolio-editor__control"
                value={grid.columnGap}
                onChange={getHandleOnChangeTextGridStyle("columnGap")}
            />
        </PanelRow>
        )}
        {disableGridProperties?.rowGap ? "" : (
        <PanelRow>
            <TextControl
                label="Row Gap"
                className="portfolio-editor__control"
                value={grid.rowGap}
                onChange={getHandleOnChangeTextGridStyle("rowGap")}
            />
        </PanelRow>
        )}
        {disableGridProperties?.justifyContent ? "" : (
        <PanelRow>
            <BaseControl
                label="Justify Content"
                className="portfolio-editor__control"
            >
                <EditorSelect
                    value={getGridStylePropertySelected(JustifyContentOptions, "justifyContent")}
                    options={JustifyContentOptions}
                    onChange={getHandleOnChangeSelectGridStyle<JustifyContentOption>("justifyContent")}
                />
            </BaseControl>
        </PanelRow>
        )}
        {disableGridProperties?.alignContent? "" : (
        <PanelRow>
            <BaseControl
                label="Align Content"
                className="portfolio-editor__control"
            >
                <EditorSelect
                    value={getGridStylePropertySelected(AlignContentOptions, "alignContent")}
                    options={AlignContentOptions}
                    onChange={getHandleOnChangeSelectGridStyle<AlignContentOption>("alignContent")}
                />
            </BaseControl>
        </PanelRow>
        )}
        {disableGridProperties?.justifyItems? "" : (
        <PanelRow>
            <BaseControl
                label="Justify Items"
                className="portfolio-editor__control"
            >
                <EditorSelect
                    value={getGridStylePropertySelected(JustifyItemsOptions, "justifyItems")}
                    options={JustifyItemsOptions}
                    onChange={getHandleOnChangeSelectGridStyle<JustifyItemsOption>("justifyItems")}
                />
            </BaseControl>
        </PanelRow>
        )}
        {disableGridProperties?.alignItems ? "" : (
        <PanelRow>
            <BaseControl
                label="Align Items"
                className="portfolio-editor__control"
            >
                <EditorSelect
                    value={getGridStylePropertySelected(AlignItemsOptions, "alignItems")}
                    options={AlignItemsOptions}
                    onChange={getHandleOnChangeSelectGridStyle<AlignItemsOption>("alignItems")}
                />
            </BaseControl>
        </PanelRow>
        )}
    </PanelBody>
    );
}

export function getGridSettingsVariables(grid: GridStyles){
    return {
        "--grid-template-columns": grid.gridTemplateColumns,
        "--grid-template-rows": grid.gridTemplateRows,
        "--grid-auto-flow": grid.gridAutoFlow,
        "--grid-auto-columns": grid.gridAutoColumns,
        "--grid-auto-rows": grid.gridAutoRows,
        "--row-gap": grid.rowGap,
        "--column-gap": grid.columnGap,
        "--justify-content": grid.justifyContent,
        "--justify-items": grid.justifyItems,
        "--align-content": grid.alignContent,
        "--align-items": grid.alignItems,
    } satisfies React.CSSProperties;;
}

export const defaultGridSettingsVariables = {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    gridAutoFlow: "row",
    gridAutoColumns: "1fr",
    gridAutoRows: "auto",
    rowGap: "0px",
    columnGap: "0px",
    justifyContent: "normal",
    alignContent: "normal",
    justifyItems: "normal",
    alignItems: "normal",
} as const satisfies GridStyles;