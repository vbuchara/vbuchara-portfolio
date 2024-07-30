
declare module "@wordpress/components" {
    import { 
        SelectControlProps,
    } from "@wordpress/components/build-types/select-control/types";

    export type SelectControlOptions = Exclude<SelectControlProps["options"], undefined>[number];

    export * from "@wordpress/components/build-types/index";
}