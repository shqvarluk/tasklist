import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false,
    }
}

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: __IS_DEV__ ?? false,
        returnNull: false,

        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;
