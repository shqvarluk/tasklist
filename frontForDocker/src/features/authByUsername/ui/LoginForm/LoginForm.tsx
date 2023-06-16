import React, {
    memo, useCallback, 
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import classes from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import {
    loginActions, loginReducer, 
} from '../../model/slice/loginSlice';
import {
    errorSelector,
    isLoadingSelector,
    passwordSelector,
    usernameSelector,
} from '../../model/selectors/authSelectors';
import { loginByUsername } from '../../model/services/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import {
    ReducerLoader, TReducersList, 
} from 'shared/lib/components/ReucerLoader/ReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface ILoginFormProps {
    onSuccess: () => void,
    mix?: string,
}

const initialReducers: TReducersList = {
    loginForm: loginReducer,
};

export default memo(({
    onSuccess,
    mix,
}: ILoginFormProps) => {
    const username = useSelector(usernameSelector);
    const password = useSelector(passwordSelector);
    const isLoading = useSelector(isLoadingSelector);
    const error = useSelector(errorSelector);

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername(username));
    }, [dispatch]);

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password));
    }, [dispatch]);

    const onLogin = useCallback(async () => {
        const result = await dispatch(loginByUsername({
            username,
            password,
        }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }

    }, [dispatch, username, password, onSuccess]);

    return (
        <ReducerLoader reducers={initialReducers}>
            <div className={classNames(classes.loginForm, {}, [mix])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text
                    text={t('Ошибка! Не верный логин, или пароль')}
                    theme='error'
                />}
                <Input
                    autofocus
                    type='text'
                    placeholder={t('Введите имя ползователя')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type='password'
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ThemeButton.PRIMARY}
                    mix={classes.loginButton}
                    onClick={onLogin}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </ReducerLoader>
    );
});
