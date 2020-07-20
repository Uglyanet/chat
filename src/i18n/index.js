import i18n                 from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector     from 'i18next-browser-languagedetector';

import {
    RESOURCES
} from './data.js';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng : 'en',
        resources   : RESOURCES,
        detection   : {
            order : [ 'path' ]
        },
        debug             : false,
        keySeparator      : false,
        returnEmptyString : false,
        interpolation     : {
            escapeValue : false
        }
    });

export default i18n;
