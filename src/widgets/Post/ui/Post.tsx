import { classNames } from 'shared/aliases';
import { Card } from 'shared/ui/Card/ui/Card';
import Image from 'shared/assets/bgPlaceholder.png';
import { Comment } from 'widgets/Comment/ui/Comment';
import { Scrollable } from 'shared/ui/Scrollable/ui/Scrollable';
import cls from './Post.module.scss';

interface PostProps {
    className?:string
}
export const Post = (props:PostProps) => {
    const { className } = props;
    return (
        <Card className={classNames(cls.PostContent, {}, [className])}>
            <div className={cls.ContentSection} />
            <Scrollable className={cls.CommentSection} axisX>
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />
                <Comment
                    user="Тестовый пользователь"
                    content="Классно сделал , автор! Удачи тебе во всех начинаниях"
                />

            </Scrollable>
        </Card>
    );
};
