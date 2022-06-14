import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            "en": {
                translations: {
                    ' Avyakt BapDada online': ' Avyakt BapDada online',
                    ' featured videos ': ' featured videos ',
                    ' green team': ' green team',
                    ' Links directory': ' Links directory',
                    ' Madhuban Murli ': ' Madhuban Murli ',
                    ' Sr. Jayanti Kirpalani': ' Sr. Jayanti Kirpalani',
                    ' terms of use': ' terms of use',
                    '(Login Required)': '(Login Required)',
                    '15 November ': '15 November ',
                    '19-20 November ': '19-20 November ',
                    '4 November': '4 November',
                    'audio ebooks': 'audio ebooks',
                    'Avyakt BapDada ': 'Avyakt BapDada ',
                    'BKUN': 'BKUN',
                    'blessings': 'blessings',
                    'books': 'books',
                    'classes & talks': 'classes & talks',
                    'contact us': 'contact us',
                    'Dewali Festival ': 'Dewali Festival ',
                    'Duration: 1:03:45 ': 'Duration: 1:03:45 ',
                    'English': 'English',
                    'etc...  ': 'etc...  ',
                    'events': 'events',
                    'Events': 'Events',
                    'FAQ': 'FAQ',
                    'German': 'German',
                    'hih de huang jude urriave phd ': 'hih de huang jude urriave phd ',
                    'Latest classes ': 'Latest classes ',
                    'links directory': 'links directory',
                    'login for more >>': 'login for more >>',
                    'login': 'login',
                    'made for me made for me': 'made for me made for me',
                    'milan': 'milan',
                    'more': 'more',
                    'Murli Download': 'Murli Download',
                    'music': 'music',
                    'news': 'news',
                    'October 17, 2021 | 10:00am EST': 'October 17, 2021 | 10:00am EST',
                    'October 31, 201 ': 'October 31, 201 ',
                    'Online GlobalSilence Retreat': 'Online GlobalSilence Retreat',
                    'Our Yagya': 'Our Yagya',
                    'Peacebuilding women making a difference *(2)': 'Peacebuilding women making a difference *(2)',
                    'photos & images': 'photos & images',
                    'Privacy Policy': 'Privacy Policy',
                    'resources': 'resources',
                    'Siddhi Swaroop: Conclusion & Experiences  ': 'Siddhi Swaroop: Conclusion & Experiences  ',
                    'Signup For Seva': 'Signup For Seva',
                    'Silence Retreat': 'Silence Retreat',
                    'site map': 'site map',
                    'something special something special': 'something special something special',
                    'Spanish': 'Spanish',
                    'Speaker: Mohini Didi  ': 'Speaker: Mohini Didi  ',
                    'Todays murli  Todays murli': 'Todays murli  Todays murli',
                }
            },
            "es": {
                translations: {
                    ' Avyakt BapDada online': ' Avyakt BapDada en línea',
                    ' featured videos ': ' Vídeos destacados ',
                    ' green team': ' green team',
                    ' Links directory': 'Directorio de enlaces',
                    ' Madhuban Murli ': ' Murli de Madhuban',
                    ' Sr. Jayanti Kirpalani': 'Hna. Jayanti Kirpalani',
                    ' terms of use': 'términos de Uso',
                    '(Login Required)': '(Necesario iniciar sesión)',
                    '15 November ': '15 de noviembre',
                    '19-20 November ': '19-20 de noviembre ',
                    '4 November': '4 de noviembre',
                    'audio ebooks': 'libros electrónicos de audio',
                    'Avyakt BapDada ': 'Avyakt BapDada',
                    'BKUN': 'BKUN',
                    'blessings': 'bendiciones',
                    'books': 'books',
                    'classes & talks': 'clases y charlas',
                    'contact us': 'Contacta con nosotras',
                    'Dewali Festival ': 'Festival de Diwali ',
                    'Duration: 1:03:45 ': 'Duration: 1:03:45 ',
                    'etc...  ': 'etc...  ',
                    'events': 'eventos',
                    'Events': 'Events',
                    'FAQ': 'FAQ',
                    'hih de huang jude urriave phd ': 'hola de huang jude urriave doctorado ',
                    'Latest classes ': 'Últimas clases',
                    'links directory': 'directorio de enlaces',
                    'login for more >>': 'iniciar sesión para más >>',
                    'login': 'acceso',
                    'made for me made for me': 'hecho para mi hecho para mi',
                    'milan': 'milan',
                    'more': 'más',
                    'Murli Download': 'Descargar Murli',
                    'music': 'música',
                    'news': 'news',
                    'October 17, 2021 | 10:00am EST': 'October 17, 2021 | 10:00am EST',
                    'October 31, 201 ': '31 de octubre de 201',
                    'Online GlobalSilence Retreat': 'Retiro de Silencio Global en Línea',
                    'Our Yagya': 'Nuestra yagya',
                    'Peacebuilding women making a difference *(2)': 'Mujeres constructoras de paz marcando la diferencia *(2)',
                    'photos & images': 'fotos e imágenes',
                    'Privacy Policy': 'Política de privacidad',
                    'resources': 'recursos',
                    'Siddhi Swaroop: Conclusion & Experiences  ': 'Siddhi Swaroop: Conclusión y Experiencias',
                    'Signup For Seva': 'Regístrese en Seva',
                    'Silence Retreat': 'Retiro de silencio',
                    'site map': 'mapa del sitio',
                    'something special something special': 'algo especial algo especial',
                    'Speaker: Mohini Didi  ': 'Oradora: Mohini Didi',
                    'Todays murli  Todays murli': 'Murli de hoy Murli de hoy',

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

export default i18n;