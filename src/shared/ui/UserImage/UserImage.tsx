import React, { FC } from 'react';
import { classNames } from 'shared/aliases';
import cls from './UserImage.module.scss';

export enum CategoryVariants {
    BIG__IMAGE = 'BigImage',
    SMALL__IMAGE = 'SmallImage',
}

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  imageUrl: string;
  altText?: string;
  category?: CategoryVariants;
}

export const UserImage: FC<ImageProps> = (props) => {
    const {
        imageUrl,
        altText,
        category,
    } = props;
    const getImageAlt = (imagePath: string) => {
        const pathArray = imagePath.split('/');
        const filename = pathArray[pathArray.length - 1];
        const altText = filename.split('.')[0];
        return altText;
    };
    return (
        <div className={classNames(cls.Wrapper, {}, [cls[category]])}>
            <img
                src={imageUrl}
                alt={altText || getImageAlt(imageUrl)}
                className={classNames(cls.Image, {}, [])}
            />
        </div>
    );
};
