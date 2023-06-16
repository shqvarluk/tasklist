import React, {
    FC, useCallback, useEffect, useMemo, 
} from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    ReducerLoader, TReducersList, 
} from 'shared/lib/components/ReucerLoader/ReducerLoader';
import {
    fetchProfileData,
    profileFormSelector,
    isProfileLoadingSelector,
    isReadonlyProfileSelector,
    profileActions,
    ProfileCard,
    profileErrorSelector,
    profileErrorsSelector,
    profileReducer,
} from 'entities/Profile';
import classes from './ProfilePage.module.scss';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Text } from 'shared/ui/Text/Text';
import { ValidateProfileData } from 'entities/Profile/model/types/profile';

interface IProfilePageProps {
    mix?: string,
}

const reducers: TReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<IProfilePageProps> = ({
    mix,
}) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const profileFormData = useSelector(profileFormSelector);
    const isProfileLoading = useSelector(isProfileLoadingSelector);
    const isProfileReadonly = useSelector(isReadonlyProfileSelector);
    const profileError = useSelector(profileErrorSelector);
    const validateErrors = useSelector(profileErrorsSelector);

    const updateProfile = profileActions.updateProfile;

    const updateField = useCallback((value: string, fieldName = '') => {
        dispatch(updateProfile({ [fieldName]: value }));
    }, [updateProfile, dispatch]);

    // TODO: Докинуть переводы
    const validateErrorsTranslates = useMemo<Record<ValidateProfileData, string>>(() => ({
        [ValidateProfileData.INCORRECT_USER_DATA]: t('Не корректно заполнены данные пользователя'),
        [ValidateProfileData.INCORRECT_AGE]: t('Не корректно указан возраст'),
        [ValidateProfileData.INCORRECT_COUNTRY]: t('Не указана страна'),
        [ValidateProfileData.SERVER_ERROR]: t('Произошла ошибка на стороне сервера'),
        [ValidateProfileData.NO_DATA]: t('Данные не заполнены'),
    }), []);

    // useEffect(() =>  {
    //     if (__PROJECT__ === 'storybook') return;
    //     dispatch(fetchProfileData());
    // }, [dispatch]);

    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(classes.profilePage, {}, [mix])}>

                <ProfilePageHeader />

                {!!validateErrors?.length && validateErrors.map((error) => (
                    <Text
                        theme='error'
                        text={validateErrorsTranslates[error]}
                        key={error}
                    />
                ))}
                <ProfileCard
                    data={profileFormData}
                    isLoading={isProfileLoading}
                    error={profileError}
                    isReadonly={isProfileReadonly}
                    updateField={updateField}
                />
            </div>
        </ReducerLoader>
    );
};

export default ProfilePage;
