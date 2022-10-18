import { Label } from '@fluentui/react';
import React, { useState } from 'react';
import { useSetState } from 'react-use';
import CircularProgress from '../CircularProgress/CircularProgress';
import {
    Container,
    ImageWrapper,
    File,
    Empty,
    Loader,
    ImageData,
} from './ImageUpload.style';
import bytes from 'bytes';
import { IUploadResult } from '../../types';
import { rawImageUrlToUrls } from 'shared-base';

type Json = Record<string, any>;

export type ImageUploadProps = {
    value: string;
    valueRaw: string;
    onChange: (imageUrl: string, extraChange?: Json) => void;
    onUpload: (file: File, extraData?: Json) => Promise<IUploadResult>;
    destinationFolder: string;
};

type ImageData = {
    width?: number;
    height?: number;
    size?: number;
};

export function ImageUpload(props: ImageUploadProps) {
    const { value: imageUrl, valueRaw: imageUrlRaw, destinationFolder } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [imageData, patchImageData] = useSetState<ImageData>({});

    function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
        if (!ev.target || !ev.target.files) {
            console.log('no files');
            return;
        }
        const file = ev.target.files[0];

        const reader = new FileReader();

        patchImageData({ size: file.size });

        reader.onload = (ev: any) => {
            var image = new Image();
            image.src = ev.target.result;
            image.onload = function () {
                patchImageData({
                    width: image.width,
                    height: image.height,
                });

                const ratio = image.width / image.height;

                setIsLoading(true);

                props.onUpload(file).then((res: IUploadResult) => {
                    const { url, name } = res.data;
                    const fileName = name.split('.')[0];

                    const { imageUrl, imageThumbUrl } = rawImageUrlToUrls(
                        url,
                        destinationFolder,
                        fileName
                    );

                    props.onChange(imageUrl, {
                        imageUrlRaw: url,
                        imageUrl,
                        imageThumbUrl,
                        ratio,
                    });

                    setIsLoading(false);
                });
            };
        };

        reader.readAsDataURL(file);
    }

    function renderEmpty() {
        return (
            <Empty>
                <i className='material-icons'>cloud_upload</i>
                {renderLoader()}
            </Empty>
        );
    }

    function renderInner() {
        if (imageUrl) {
            const imageStyle = {
                backgroundImage: `url(${imageUrlRaw || imageUrl})`,
            };

            return (
                <ImageWrapper style={imageStyle}>{renderLoader()}</ImageWrapper>
            );
        } else {
            return renderEmpty();
        }
    }

    function renderLoader() {
        if (!isLoading) {
            return null;
        }

        return (
            <Loader>
                <CircularProgress />
            </Loader>
        );
    }

    return (
        <Container
            className='ImageUpload-container'
            data-testid='ImageUpload-container'
        >
            <Label htmlFor='avatar'>{renderInner()}</Label>

            <File
                type='file'
                id='avatar'
                name='avatar'
                accept='image/png, image/jpeg'
                onChange={onChange}
            />
            <ImageData>
                {imageData.width ? imageData.width + ' x ' : ''}
                {imageData.height ? imageData.height + 'px  |  ' : ''}
                {imageData.size && bytes(imageData.size)}
            </ImageData>
        </Container>
    );
}

export default ImageUpload;
