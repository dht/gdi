import { Label } from '@fluentui/react';
import React, { useState } from 'react';
import { Container, Image, File, Empty } from './ImageUpload.style';

export type ImageUploadProps = {
    value: string;
    onChange: (imageUrl: string) => void;
};

export function ImageUpload(props: ImageUploadProps) {
    const { value: imageUrl } = props;

    function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
        if (!ev.target || !ev.target.files) {
            console.log('no files');
            return;
        }
        const file = ev.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            let formData = new FormData();
            formData.append('file', file);

            fetch('http://localhost:3001/upload', {
                method: 'POST',
                body: formData,
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log('res ->', res);
                    props.onChange(res.url);
                })
                .catch((err) => {
                    console.log('err ->', err);
                });
        };

        reader.readAsDataURL(file);
    }

    function renderEmpty() {
        return (
            <Empty>
                <i className='material-icons'>cloud_upload</i>
            </Empty>
        );
    }

    function renderInner() {
        if (imageUrl) {
            const imageStyle = {
                backgroundImage: `url(${imageUrl})`,
            };

            return <Image style={imageStyle} />;
        } else {
            return renderEmpty();
        }
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
        </Container>
    );
}

export default ImageUpload;
