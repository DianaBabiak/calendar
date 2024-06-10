import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';
import {store} from "@/state/store.ts";

const resources = {
    en: {
        translation: enTranslation,
    },
    ru: {
        translation: ruTranslation,
    },
};

const updateLanguage = (lang: 'en' | 'ru') => {
    i18n.changeLanguage(lang);
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: store.getState().app.language,
        fallbackLng: store.getState().app.language,
        interpolation: {
            escapeValue: false,
        },
    });

store.subscribe(() => {
    const state = store.getState();
    const newLang = state.app.language;
    updateLanguage(newLang)
});

export default i18n;
