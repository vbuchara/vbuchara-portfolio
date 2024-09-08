declare module "@wordpress/core-data" {
    import { 
        DataRegistry,
        ReduxStoreConfig,
        StoreInstance,
    } from "@wordpress/data/build-types/types";
    import * as BaseEntityRecordsModule from "@wordpress/core-data/build-types/entity-types/base-entity-records";
    import { Context } from "@wordpress/core-data/build-types/entity-types/helpers";
    import { Merge } from "type-fest";

    /**
     * HTTP Query parameters sent with the API request to fetch the entity records.
     */
    export type GetRecordsHttpQuery = {
        context?: "view" | "edit";
        _embed?: boolean;
        per_page?: number;
        author?: number;
        status?: "publish" | "private";
        orderby?: string;
        order?: "asc" | "desc";
        meta_key?: string;
        meta_query_key?: string;
        meta_query_value?: string | number | boolean;
        meta_query_compare?: string;
        meta_query_type?: string;
        include?: number[];
        page?: number;
        [key: `meta_query_key_${number}`]: string;
        [key: `meta_query_value_${number}`]: string;
        [key: `meta_query_compare_${number}`]: string;
        [key: `meta_query_type_${number}`]: string;
        [key: `orderby_${string}`]: "asc" | "desc";
    };

    export interface SiteSettings {
        title: string,
        description: string,
        url: string,
        email: string,
        timezone: string,
        date_format: string,
        time_format: string,
        start_of_week: number,
        language: string,
        use_smilies: boolean,
        default_category: number,
        default_post_format: string,
        posts_per_page: number,
        show_on_front: string,
        page_on_front: number,
        page_for_posts: number,
        default_ping_status: string,
        default_comment_status: string,
        site_logo: string | null,
        site_icon: number
    }
    
    // ENTITY

    export namespace BaseEntityRecords {
        export interface Type<C extends Context> extends BaseEntityRecordsModule.BaseEntityRecords.Type<C> {
            archive_link?: string;
        }
    }

    // STORE

    export type FixedCoreDataStoreSelectors = AppendStateToSelectors<{
        isRequestingEmbedPreview: () => boolean
        hasFetchedAutosaves: () => boolean,
        getPostType: (entityType: string) => BaseEntityRecords.Type<"view"> | undefined,
        getSite: () => SiteSettings
    }>;

    export type CoreDataStoreSelectors = Omit<
        typeof import("@wordpress/core-data/build-types/selectors"),
        "isRequestingEmbedPreview" | "hasFetchedAutosaves"
    >;

    export type CoreDataStoreActions = typeof import("@wordpress/core-data/build-types/actions");

    export interface CoreDataStoreConfig extends ReduxStoreConfig<any, CoreDataStoreActions, CoreDataStoreSelectors>{
        reducer: any;
        dispatch: CoreDataStoreActions;
        selectors: Merge<CoreDataStoreSelectors, FixedCoreDataStoreSelectors>;
        controls: any;
    }

    export interface CoreDataStoreDescriptor {
        name: "core";
        instantiate: ( registry: DataRegistry ) => StoreInstance<CoreDataStoreConfig>;
    }

    type AppendStateToSelectors<
        T extends Record<PropertyKey, (...args: any) => any>
    > = {
        [K in keyof T]: T[K] extends (...args: infer Args) => infer Return
            ? (state: any, ...args: Args) => Return
            : T[K];
    }


    // EXPORTS
    
    export * from "@wordpress/core-data/build-types/index";
    export const store: CoreDataStoreDescriptor;
}