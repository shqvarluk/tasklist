import React from 'react';
import { useTranslation } from 'react-i18next';

export default () => {

    const { t } = useTranslation('about');

    return (
        <div>
            <h1>
                {t('ЭТО СТРАНИЦА ОБО МНЕ')}
            </h1>
        </div>
    );
};
