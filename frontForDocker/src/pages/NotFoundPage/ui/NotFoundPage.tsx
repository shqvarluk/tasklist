import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NotFound.module.scss';

export default () => {
    const { t } = useTranslation();
    return (
        <div className={classes.notFoundPage}>
            {t('Ничего не найдено')}
        </div>
    );
};
