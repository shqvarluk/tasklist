import React, {
    memo, useCallback, useMemo, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'features/authByUsername';
import {
    useDispatch, useSelector,
} from 'react-redux';
import {
    userActions, userAuthDataSelector,
} from 'entities/User';
import {Avatar} from "shared/ui/Avatar/Avatar";
import {NavbarItems} from "widgets/Navbar/model/model";
import {NavbarItem} from "widgets/Navbar/ui/NavbarItem/NavbarItem";
import logo from '../../../shared/assets/icons/logo_mini.jpg';

interface INavbarProps {
    mix?: string,
}

export const Navbar = memo(({
    mix,
}: INavbarProps) => {
    const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const authData = useSelector(userAuthDataSelector);

    const onModalOpen = useCallback(() => setIsOpenModal(true), []);
    const onCloseModal = useCallback(() => setIsOpenModal(false), []);

    const buttonTitle = useMemo(() => (
        authData ? t('Выйти') : t('Войти')
    ), [authData, t]);

    const onLoginButtonClick = useMemo(() => {
        if (authData) return () => dispatch(userActions.logout());
        return onModalOpen;
    }, [authData, dispatch, onModalOpen]);

    return (
        <div className={classNames(classes.navbar, {}, [mix])}>
            <div className={classes.avatar}>
                <Avatar
                    src={logo}
                    size={120}
                />
            </div>

            <div className={classes.links}>
                {NavbarItems.map((link, index) => (
                    <NavbarItem
                        {...link}
                        key={`link-${index}`}
                    />
                ))}
            </div>
            {/*<div className={classes.links}>*/}
            {/*    <Button*/}
            {/*        size='m'*/}
            {/*        onClick={onLoginButtonClick}*/}
            {/*    >*/}
            {/*        {buttonTitle}*/}
            {/*    </Button>*/}
            {/*</div>*/}
            {/*{isModalOpen && <LoginModal*/}
            {/*    isOpen={isModalOpen}*/}
            {/*    onClose={onCloseModal}*/}
            {/*/>}*/}
        </div>
    );
});

