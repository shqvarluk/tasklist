import React from 'react';
import { useTranslation } from 'react-i18next';

export default () => {

    const { t } = useTranslation('main');

    return (
        <div>
            <h1>
                {t('ЭТО ГЛАВНАЯ СТРАНИЦА')}
            </h1>
        </div>
    );
};
