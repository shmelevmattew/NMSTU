import { classNames } from 'shared/aliases';
import { Card } from 'shared/ui/Card/ui/Card';
import Image from 'shared/assets/bgPlaceholder.png';
import cls from './Post.module.scss';

interface PostProps {
    className?:string
}
export const Post = (props:PostProps) => {
    const { className } = props;
    return (
        <Card>
            <div className={cls.ContentSection}>
                <img src={Image} alt="testImage" />
            </div>
            <div className={cls.CommentSection}>
                11
            </div>
        </Card>
    );
};
