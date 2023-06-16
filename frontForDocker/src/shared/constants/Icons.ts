import React from 'react';

import MainPage from '../assets/icons/mainPageIcon.svg';
import AboutPage from '../assets/icons/aboutPageIcon.svg';
import ProfilePage from '../assets/icons/profilePageIcon.svg';

export enum EnumIcons {
    ABOUT_PAGE = 'AboutPage',
    MAIN_PAGE = 'MainPage',
    PROFILE_PAGE = 'ProfilePage'
}

export const Icons: Record<EnumIcons, React.VFC<React.SVGProps<SVGSVGElement>>> = {
    [EnumIcons.ABOUT_PAGE]: AboutPage,
    [EnumIcons.MAIN_PAGE]: MainPage,
    [EnumIcons.PROFILE_PAGE]: ProfilePage,
};
