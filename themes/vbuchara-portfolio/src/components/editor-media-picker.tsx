import apiFetch from "@wordpress/api-fetch";
import {
    MediaUploadCheck, 
    MediaUpload 
} from "@wordpress/block-editor";
import { Button, Flex } from "@wordpress/components";
import type { 
    ImageInfo, 
    ImageSizes, 
    MediaDetails, 
    WpFeaturedmedia 
} from "wordpress-types";

export interface EditorMediaPickerAttributes {
    imageId?: number,
    imageUrl?: string,
    imageAlt?: string,
}

export interface EditorMediaPickerProps {
    attributes: EditorMediaPickerAttributes,
    setAttributes: (attributes: Partial<EditorMediaPickerAttributes>) => void,
    sizePriority?: (keyof ImageSizes)[],
    defaultToClear?: boolean,
    defaultImage?: string,
    defaultImageAlt?: string
}

export function EditorMediaPicker({
    attributes,
    setAttributes,
    defaultToClear: defaultToNone,
    defaultImage,
    defaultImageAlt,
    sizePriority,
}: EditorMediaPickerProps){
    function getImageSizeFromMediaDetails(mediaDetails: MediaDetails): ImageInfo | undefined{
        return sizePriority?.reduce<ImageInfo | undefined>((imageSize, imageSizeName) => {
            if(imageSize) return imageSize;
            const mediaImageSizes = mediaDetails.sizes;
            
            if(imageSizeName in mediaImageSizes && mediaImageSizes[imageSizeName]){
                return mediaImageSizes[imageSizeName];
            }

            return imageSize;
        }, undefined);
    }

    async function onSelectMedia(media: MediaUpload.MediaSelected) {
        try {
            const { source_url, media_details } = await apiFetch<WpFeaturedmedia>({ 
                path: `/wp/v2/media/${media.id}` 
            });
            const imageSize = getImageSizeFromMediaDetails(media_details);

            setAttributes({
                imageId: media.id,
                imageUrl: imageSize ? imageSize.source_url : source_url,
                imageAlt: media.alt
            });
        } catch(error){
            console.log(error);
        }
    }

    function onClickSetToDefault(){
        if(defaultToNone){
            setAttributes({
                imageId: undefined,
                imageUrl: undefined,
                imageAlt: undefined
            });
            return;
        }

        if(!defaultImage) return;

        setAttributes({
            imageId: undefined,
            imageUrl: defaultImage,
            imageAlt: defaultImageAlt || "Image of a guy sitting on a chair, in front of a computer coding"
        });
    }
    
    return (
    <Flex justify='flex-start'>
        <MediaUploadCheck>
            <MediaUpload
                onSelect={onSelectMedia}
                value={attributes.imageId}
                render={({ open }) => (
                <>
                    <Button variant='primary' onClick={open}>
                        Choose Image
                    </Button>
                    {(!defaultImage && !defaultToNone) ? null : (
                    <Button variant='secondary' onClick={onClickSetToDefault}>
                        Set to Default
                    </Button>
                    )}
                </>
                )}
            />
        </MediaUploadCheck>
    </Flex>
    );
};