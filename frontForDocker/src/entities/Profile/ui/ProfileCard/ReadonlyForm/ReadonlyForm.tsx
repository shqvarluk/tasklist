import React, {
    FC, memo, 
} from 'react';
import { useTranslation } from 'react-i18next';

import { IProfile } from '../../../model/types/profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { OPTIONAL_READONLY_PROFILE_FIELDS } from 'entities/Profile/model/constants/constants';
import classes from './ReadonlyForm.modules.scss';

interface IReadonlyForm {
    data?: IProfile
}

export const ReadonlyForm: FC<IReadonlyForm> = memo(({
    data,
}) => {
    const { t } = useTranslation('profile');

    return (
        <div className={classes.card}>
            <div className={classes.avatar}>
                <Avatar src={data?.avatar || ''}/>
            </div>
            <div className={classes.profileData}>
                <div className={classes.mainProfileData}>
                    <Text title={data?.name}/>
                    <Text title={data?.surname}/>
                </div>
                <div className={classes.optionalFields}>
                    {
                        Object
                            .entries(OPTIONAL_READONLY_PROFILE_FIELDS)
                            .map(([field, label]) => (
                                <div
                                    className={classes.optionalField}
                                    key={label}
                                >
                                    <span className={classes.optionalFieldLabel}>
                                        {t(label)}
                                    </span>
                                    <span className={classes.fieldValue}>
                                        {data?.[field as keyof IProfile] || t('Не указано')}
                                    </span>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
});
