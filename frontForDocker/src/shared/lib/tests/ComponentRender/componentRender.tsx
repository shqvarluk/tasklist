import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '../../../config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import {
    IStateSchema, StoreProvider, 
} from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface IComponentRenderProps {
    route?: string,
    initialState?: DeepPartial<IStateSchema>;
}

export const componentRender = (component: ReactNode, options: IComponentRenderProps = {}) => {
    const {
        route = '/',
        initialState,
    } = options;

    return (
        render(
            <MemoryRouter initialEntries={[route]}>
                <StoreProvider initialState={initialState as IStateSchema}>
                    <I18nextProvider i18n={i18nForTests}>
                        {component}
                    </I18nextProvider>
                </StoreProvider>
            </MemoryRouter>,
        )
    );
};
