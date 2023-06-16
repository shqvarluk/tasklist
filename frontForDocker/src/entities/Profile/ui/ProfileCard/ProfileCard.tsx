import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {classNames} from 'shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';
import {Text} from 'shared/ui/Text/Text';
import {IProfile} from '../../model/types/profile';
import {SquareLoader} from 'shared/ui/SquareLoader';
import {ReadonlyForm} from './ReadonlyForm/ReadonlyForm';
import {EditForm} from './EditForm/EditForm';
import {Input} from "shared/ui/Input/Input";
import {WithControlWrapper} from "shared/ui/WithControlWrapper/WithControlWrapper";

interface IProfileCardProps {
    mix?: string,
    data?: IProfile,
    isLoading: boolean,
    error?: boolean
    isReadonly: boolean,
    updateField: (value: string, name?: string) => void,
}

export const ProfileCard: FC<IProfileCardProps> = ({
                                                       data,
                                                       mix,
                                                       error = false,
                                                       isReadonly,
                                                       updateField,
                                                       isLoading = false,

                                                   }) => {
    const {t} = useTranslation('profile');

    return (
        <div className='credentials'>
            <Text text='ФИО'/>

            <Input
                isReadonly={isReadonly}
                value={data?.name}
                mix={classes.credential}
                name='name'
                onChange={updateField}
            />

            <Text text='Телефон'/>

            <Input
                isReadonly={isReadonly}
                value='123'
                mix={classes.credential}
            />

            <Text text='Адрес'/>

            <Input
                isReadonly={isReadonly}
                value='123'
                mix={classes.credential}
            />

            <Text text='Роль'/>

            <Input
                isReadonly={isReadonly}
                value='123'
                mix={classes.credential}
            />

            <Text text='ФИО'/>

            <Input
                isReadonly={isReadonly}
                value='123'
                mix={classes.credential}
            />
        </div>
    )
    //
    // const mods = {
    //     [classes.loading]: isLoading,
    //     [classes.error]: error,
    // };
    //
    // const renderProfileData = () => {
    //     if (isReadonly) return <ReadonlyForm data={data} />;
    //
    //     return <EditForm
    //         data={data}
    //         updateField={updateField}
    //     />;
    // };
    //
    // const renderContent = () => {
    //     if (isLoading) return <SquareLoader />;
    //     if (error) {
    //         return (
    //             <Text
    //                 theme='error'
    //                 title={t('Произошла ошибка при загрузке данных профиля')}
    //                 text={t('Попробуйте обновить страницу')}
    //                 align='center'
    //             />
    //         );
    //     }
    //     return renderProfileData();
    // };
    //
    // return (
    //     <div className={classNames(classes.profileCard, mods, [mix])}>
    //         {renderContent()}
    //     </div>
    // );
};
