import React, {
    FC, useCallback, 
} from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageError.module.scss';
import { ThemeButton } from 'shared/ui/Button/ui/Button';

interface IPageErrorProps {
    mix?: string,
}

export const PageError: FC<IPageErrorProps> = ({
    mix,
}) => {

    const { t } = useTranslation();

    const reloadPage = useCallback(() => location.reload(), []);

    return (
        <div className={classNames(classes.pageError, {}, [mix])}>
            <p>
                {t('Произошла непредвиденная ошибка')}
            </p>
            <Button
                onClick={reloadPage}
                theme={ThemeButton.PRIMARY}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
