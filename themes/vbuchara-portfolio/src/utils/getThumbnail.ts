import defaultAvatarLandscapeSrc from "@images/default-user-landscape.png";

import { 
    ImageSizes, 
    WP_Post 
} from "wordpress-types";

export type GetThumbnailOptions = {
    size?: keyof ImageSizes;
    defaultImg?: string
};

export function getThumbnail(
    post: WP_Post,
    options: GetThumbnailOptions = {}
){
    const allOptions = {
        defaultImg: defaultAvatarLandscapeSrc,
        ...options
    } satisfies GetThumbnailOptions;
    const {
        defaultImg,
        size
    } = allOptions;

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
    
        if(!size){
            if(!featuredMedia?.source_url){
                throw new NoFeaturedImageError();
            }

            return featuredMedia.source_url;
        }

        const imageInfo = featuredMedia.media_details.sizes[size];
            
        if(!imageInfo){
            if(!featuredMedia.source_url){
                throw new NoFeaturedImageError();
            }

            return featuredMedia.source_url;
        }
    
        return imageInfo.source_url;
    } catch(error){
        return defaultImg;
    }

}

export class NoFeaturedImageError extends Error {}