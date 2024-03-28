import { classNames } from 'shared/lib/classNames/classNames';
import { Divider } from 'shared/ui/Divider/ui/Divider';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Comment.module.scss';

interface CommentProps {
    className?:string,
    user?:string,
    content?:string,
}
export const Comment = (props:CommentProps) => {
    const { className, user, content } = props;
    return (
        <>
            <div className={classNames(cls.Comment, {}, [className])}>
                <div className={cls.IconPlaceholder} />
                <div className={cls.TextSection}>
                    <span className={cls.UserName}>{user}</span>
                    <span className={cls.Content}>{content}</span>
                </div>
                <Button theme={ButtonTheme.NO_BG} className={cls.Reply} icon="pi pi-reply" iconEnd>ответить</Button>

            </div>
            <Divider />
        </>
    );
};
