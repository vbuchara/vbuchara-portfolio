
declare module "@wordpress/blocks" {
    import {
        Block,
        BlockAttribute
    } from "@wordpress/blocks/index";
    import {
        ReduxStoreConfig,
        DataRegistry,
        StoreInstance,
    } from "@wordpress/data/build-types/types";
    import { Merge } from "type-fest";

    export type BlockAttributes<T extends Record<string, any> = Record<string, any>> = {
        readonly [K in keyof T]: BlockAttribute<T[K] extends Array<infer U> ? U : T[K]>;
    }

    // STORE

    export type FixedBlocksStoreSelectors = AppendStateToSelectors<{}>;

    export type BlocksStoreSelectors = AppendStateToSelectors<typeof import("@wordpress/blocks/store/selectors")>;

    export type BlocksStoreActions = typeof import("@wordpress/blocks/store/actions");

    export interface BlocksStoreConfig extends ReduxStoreConfig<any, BlocksStoreActions, BlocksStoreSelectors>{
        reducer: any;
        dispatch: BlocksStoreActions;
        selectors: Merge<BlocksStoreSelectors, FixedBlocksStoreSelectors>;
        controls: any;
    }

    export interface BlocksStoreDescriptor {
        name: "core/blocks";
        instantiate: ( registry: DataRegistry ) => StoreInstance<BlocksStoreConfig>;
    }

    type AppendStateToSelectors<
        T extends Record<PropertyKey, (...args: any) => any>
    > = {
        [K in keyof T]: T[K] extends (...args: infer Args) => infer Return
            ? (state: any, ...args: Args) => Return
            : T[K];
    }

    export * from "@wordpress/blocks/index";
}