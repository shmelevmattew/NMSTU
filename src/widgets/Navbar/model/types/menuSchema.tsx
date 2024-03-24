import { CategoryVariants } from 'shared/ui/Button/ui/Button';

export interface MenuItem {
    link:string,
    title:string,
    category:CategoryVariants,
}
export interface MenuSchema {
    list: MenuItem[];
    selected: MenuItem;
}
