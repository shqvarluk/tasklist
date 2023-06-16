import { EnumIcons } from 'shared/constants/Icons';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface INavbarItems {
    path: string,
    text: string,
    isAuthOnly?: boolean,
}
export const NavbarItems: Array<INavbarItems> = [
    {
        path: RoutePath.main,
        text: '',
    },
    {
        path: RoutePath.tasks,
        text: 'Доставки',
    },
    {
        path: RoutePath.users,
        text: 'Пользователи',
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
    },
];
