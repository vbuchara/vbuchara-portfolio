declare module "wordpress-types" {
    export interface WP_Post {
        id: number;
        date: Date;
        date_gmt: Date;
        guid: Guid;
        modified: Date;
        modified_gmt: Date;
        slug: string;
        status: string;
        type: string;
        link: string;
        title: Guid;
        content: Content;
        excerpt: Content;
        author: number;
        featured_media: number;
        comment_status: string;
        ping_status: string;
        sticky: boolean;
        template: string;
        format: string;
        meta: Meta;
        categories: number[];
        tags: unknown[];
        acf: {};
        authorName?: string;
        _links: Links;
        _embedded?: PostEmbedded;
        isPlaceholder?: boolean;
    }

    export interface WP_PostWithEmbedded extends WP_Post {
        _embedded: PostEmbedded;
    }

    export interface Links {
        self: LinkObject[];
        collection: LinkObject[];
        about: LinkObject[];
        author: Author[];
        replies: Author[];
        "version-history": VersionHistory[];
        "predecessor-version": PredecessorVersion[];
        "wp:attachment": LinkObject[];
        "wp:term": WpTerm[];
        curies: Cury[];
    }

    export interface LinkObject {
        href: string;
    }

    export interface Author {
        embeddable: boolean;
        href: string;
    }

    export interface Cury {
        name: string;
        href: string;
        templated: boolean;
    }

    export interface PredecessorVersion {
        id: number;
        href: string;
    }

    export interface VersionHistory {
        count: number;
        href: string;
    }

    export interface WpTerm {
        taxonomy: string;
        embeddable: boolean;
        href: string;
    }

    export interface Content {
        rendered: string;
        protected: boolean;
        raw?: string;
    }

    export interface Guid {
        rendered: string;
        raw?: string;
    }

    export interface Meta {
        _acf_changed: boolean;
        footnotes: string;
    }

    export interface PostEmbedded {
        "wp:featuredmedia": WpFeaturedmedia[];
        author: [Author];
        "wp:term": [Category[], WpTerm[]];
    }
    
    export interface WpFeaturedmedia {
        id:             number;
        date:           Date;
        slug:           string;
        type:           string;
        link:           string;
        title:          Caption;
        author:         number;
        featured_media: number;
        acf:            any[];
        caption:        Caption;
        alt_text:       string;
        media_type:     string;
        mime_type:      string;
        media_details:  MediaDetails;
        source_url:     string;
        _links:         Links;
    }

    export interface Caption {
        rendered: string;
    }
    
    export interface MediaDetails {
        width:      number;
        height:     number;
        file:       string;
        filesize:   number;
        sizes:      ImageSizes;
        image_meta: ImageMeta;
    }
    
    export interface ImageMeta {
        aperture:          string;
        credit:            string;
        camera:            string;
        caption:           string;
        created_timestamp: string;
        copyright:         string;
        focal_length:      string;
        iso:               string;
        shutter_speed:     string;
        title:             string;
        orientation:       string;
        keywords:          string[];
    }
    
    export interface ImageSizes {
        thumbnail:             ImageInfo;
        medium:                ImageInfo;
        medium_large:          ImageInfo;
        large:                 ImageInfo;
        full:                  ImageInfo;
        "skill-icon":          ImageInfo;
        "project-image":       ImageInfo;
    }
    
    export interface ImageInfo {
        file:       string;
        width:      number;
        height:     number;
        mime_type:  string;
        source_url: string;
        filesize?:  number;
    }

    export interface Author {
        id:          number;
        name:        string;
        url:         string;
        description: string;
        link:        string;
        slug:        string;
        avatar_urls: { [key: string]: string };
        acf:         any[];
        _links:      AuthorLinks;
    }
    
    export interface AuthorLinks {
        self:       Collection[];
        collection: Collection[];
    }
    
    export interface Collection {
        href: string;
    }
    
    export interface Category {
        id:       number;
        link:     string;
        name:     string;
        slug:     string;
        taxonomy: "category";
        acf:      any[];
        _links:   WpTermLinks;
    }
    
    export interface WpTermLinks {
        self:           Collection[];
        collection:     Collection[];
        about:          Collection[];
        "wp:post_type": Collection[];
        curies:         Cury[];
    }
    
    export interface Cury {
        name:      string;
        href:      string;
        templated: boolean;
    }
}