import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const enTranslations = {
    'Our Yagya': 'Our Yagya 1',
}
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        "en": {
            translations: enTranslations
        },
        "en-GB": {
            translations: enTranslations
        },
        "es": {
            translations: {
                'Our Yagya': 'Our Yagya 1'
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false
    }
});