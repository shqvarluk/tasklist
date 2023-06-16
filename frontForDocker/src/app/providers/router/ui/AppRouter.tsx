import React, {
    Suspense,
    useCallback,
} from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import {
    routeConfig,
    TAppRoute,
} from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback(({
        path,
        element,
        authOnly,
        ...routeProps
    }: TAppRoute) => {
        const routeElement = (
            <Suspense fallback={<PageLoader />}>
                <div className='app__page-wrapper'>
                    {element}
                </div>
            </Suspense>
        );

        return (
            <Route
                {...routeProps}
                key={path}
                path={path}
                element={(
                    authOnly
                        ? <RequireAuth>{routeElement}</RequireAuth>
                        : element
                )}
            />
        );
    }, []);
    return (
        <Routes>
            {routeConfig.map(renderWithWrapper)}
        </Routes>
    );
};
