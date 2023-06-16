import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'shared/ui/Link';
import classes from './NavbarItem.module.scss';
import { useSelector } from 'react-redux';
import { userAuthDataSelector } from 'entities/User';
import {INavbarItems} from "widgets/Navbar/model/model";

export const NavbarItem = memo<INavbarItems>(({
    path,
    text,
    isAuthOnly,
}) => {
    const AuthData = useSelector(userAuthDataSelector);
    const { t } = useTranslation();

    if (isAuthOnly && !AuthData) return null;

    return (
        <Link to={path}>
                <span className={classes.link}>{t(text)}</span>
        </Link>
    );
});
