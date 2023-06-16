import React, {
    Suspense, useEffect,
} from 'react';
import {
    useDispatch, useSelector,
} from 'react-redux';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import {
    isUserDataReadySelector,
    userActions,
} from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';

export const App = () => {
    const isUserReady = useSelector(isUserDataReadySelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [])}>
                <Navbar/>
                <div className='app__content'>
                    {isUserReady && <AppRouter/>}
                </div>
            </div>
        </Suspense>
    );
};
