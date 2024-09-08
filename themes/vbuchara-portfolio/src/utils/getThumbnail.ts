import defaultImage from "@assets/images/post-default-image.png";

import { 
    ImageSizes, 
    WP_Post 
} from "wordpress-types";

export interface GetThumbnailOptions {
    size?: keyof ImageSizes;
    defaultImg?: string,
    defaultAltText?: string
};

export interface GetThumbnailReturn {
    url: string;
    alt: string;
}

export function getThumbnail(
    post: WP_Post,
    options: GetThumbnailOptions = {}
): GetThumbnailReturn{
    const optionsWithDefault = {
        defaultImg: defaultImage,
        defaultAltText: "Thumbnail Image",
        ...options
    } satisfies GetThumbnailOptions;

    const {
        _embedded
    } = post;

    try {
        if(!_embedded) 
            throw new NoFeaturedImageError();
        if(_embedded['wp:featuredmedia'].length === 0) 
            throw new NoFeaturedImageError();
    
        const featuredMedia = _embedded['wp:featuredmedia'][0];

        if(!featuredMedia) 
            throw new NoFeaturedImageError();
    
        if(!optionsWithDefault.size){
            if(!featuredMedia?.source_url){
                throw new NoFeaturedImageError();
            }

            return {
                url: featuredMedia.source_url,
                alt: featuredMedia.alt_text || optionsWithDefault.defaultAltText
            };
        }

        const imageInfo = featuredMedia.media_details.sizes[optionsWithDefault.size];
            
        if(!imageInfo){
            if(!featuredMedia.source_url){
                throw new NoFeaturedImageError();
            }

            return {
                url: featuredMedia.source_url,
                alt: featuredMedia.alt_text || optionsWithDefault.defaultAltText
            };
        }
    
        return {
            url: imageInfo.source_url,
            alt: optionsWithDefault.defaultAltText
        };
    } catch(error){
        return {
            url: optionsWithDefault.defaultImg,
            alt: optionsWithDefault.defaultAltText
        };
    }

}

export class NoFeaturedImageError extends Error {}