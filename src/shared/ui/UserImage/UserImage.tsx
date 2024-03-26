import React, { FC } from 'react';
import { classNames } from 'shared/aliases';
import cls from './UserImage.module.scss';

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  imageUrl: string;
  altText: string;
  classNameWrapper?: string;
}

export const UserImage: FC<ImageProps> = (props) => {
    const {
        imageUrl,
        altText,
        classNameWrapper,
    } = props;
    return (
        <div className={classNames(cls.Wrapper, {}, [classNameWrapper])}>
            <img
                src={imageUrl}
                alt={altText}
                className={classNames(cls.Image, {}, [])}
            />
        </div>
    );
};
