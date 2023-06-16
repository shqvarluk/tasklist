import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
    Navigate, useLocation,
} from 'react-router-dom';

import { userAuthDataSelector } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth: FC = ({ children }) => {
    const isAuth = useSelector(userAuthDataSelector);
    const location = useLocation();

    if (!isAuth) return (<Navigate
        to={RoutePath.main}
        state={{ from: location }}
        replace/>);

    return <>{children}</>;
};
