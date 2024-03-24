import { classNames } from 'shared/aliases';
import { Card } from 'shared/ui/Card/ui/Card';
import Image from 'shared/assets/bgPlaceholder.png';
import { Comment } from 'shared/ui/Comment/ui/Comment';
import cls from './Post.module.scss';

interface PostProps {
    className?:string
}
export const Post = (props:PostProps) => {
    const { className } = props;
    return (
        <Card>
            <div className={cls.PostContent}>
                <div className={cls.ContentSection}>
                    <img src={Image} alt="testImage" />
                </div>
                <div className={cls.CommentSection}>
                    <Comment
                        user="Тестовый пользователь"
                        content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                    />
                </div>
            </div>
        </Card>
    );
};
