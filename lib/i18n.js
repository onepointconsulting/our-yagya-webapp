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
                    '(Login Required)': '(Login Required)',
                    '15 November ': '15 November ',
                    '19-20 November ': '19-20 November ',
                    '4 November': '4 November',
                    'audio ebooks': 'audio ebooks',
                    'Avyakt BapDada ': 'Avyakt BapDada ',
                    'Avyakt BapDada online': 'Avyakt BapDada online',
                    'BKUN': 'BKUN',
                    'blessings': 'blessings',
                    'books': 'books',
                    'classes & talks': 'classes & talks',
                    'contact us': 'contact us',
                    'Dewali Festival ': 'Dewali Festival ',
                    'Duration': 'Duration',
                    'Sustenance': 'Sustenance',
                    'English': 'English',
                    'etc...  ': 'etc...  ',
                    'Events': 'Events',
                    'Search by keywords': 'Search by keywords',
                    'FAQ': 'FAQ',
                    'featured video': 'featured video',
                    'German': 'German',
                    'green team': 'green team',
                    'hih de huang jude urriave phd ': 'hih de huang jude urriave phd ',
                    'Latest classes ': 'Latest classes ',
                    'links directory': 'links directory',
                    'Links directory': 'Links directory',
                    'login for more >>': 'login for more >>',
                    'login': 'login',
                    'made for me made for me': 'made for me made for me',
                    'Madhuban Murli ': 'Madhuban Murli ',
                    'milan': 'milan',
                    'more': 'more',
                    'Murli Download': 'Murli Download',
                    'music': 'music',
                    'News': 'News',
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
                    'Speaker': 'Speaker',
                    'Sr. Jayanti Kirpalani': 'Sr. Jayanti Kirpalani',
                    'terms of use': 'terms of use',
                    'Todays murli  Todays murli': 'Todays murli  Todays murli',
                }
            },
            "es": {
                translations: {
                    '(Login Required)': '(Necesario iniciar sesión)',
                    '(Login Required)': '(Necesario iniciar sesión)',
                    '15 November ': '15 de noviembre',
                    '19-20 November ': '19-20 de noviembre ',
                    '4 November': '4 de noviembre',
                    'audio ebooks': 'libros electrónicos de audio',
                    'Avyakt BapDada ': 'Avyakt BapDada',
                    'Avyakt BapDada online': 'Avyakt BapDada en línea',
                    'BKUN': 'BKUN',
                    'blessings': 'bendiciones',
                    'books': 'books',
                    'classes & talks': 'clases y charlas',
                    'contact us': 'Contacta con nosotras',
                    'Dewali Festival ': 'Festival de Diwali ',
                    'Duration': 'Duración',
                    'Sustenance': 'Sustento',
                    'etc...  ': 'etc...  ',
                    'Events': 'Eventos',
                    'Search by keywords': 'Buscar por palabras clave',
                    'FAQ': 'FAQ',
                    'featured videos ': 'Vídeos destacados ',
                    'green team': 'green team',
                    'hih de huang jude urriave phd ': 'hola de huang jude urriave doctorado ',
                    'Latest classes ': 'Últimas clases',
                    'Links directory': 'Directorio de enlaces',
                    'login for more >>': 'iniciar sesión para más >>',
                    'login': 'acceso',
                    'made for me made for me': 'hecho para mi hecho para mi',
                    'Madhuban Murli ': 'Murli de Madhuban',
                    'more': 'más',
                    'Murli Download': 'Descargar Murli',
                    'music': 'música',
                    'News': 'Noticias',
                    'Online GlobalSilence Retreat': 'Retiro de Silencio Global en Línea',
                    'Our Yagya': 'Nuestra yagya',
                    'Privacy Policy': 'Política de privacidad',
                    'resources': 'recursos',
                    'Siddhi Swaroop: Conclusion & Experiences  ': 'Siddhi Swaroop: Conclusión y Experiencias',
                    'Signup For Seva': 'Regístrese en Seva',
                    'Silence Retreat': 'Retiro de silencio',
                    'site map': 'mapa del sitio',
                    'something special something special': 'algo especial algo especial',
                    'Speaker': 'Oradora',
                    'Sr. Jayanti Kirpalani': 'Hna. Jayanti Kirpalani',
                    'terms of use': 'términos de Uso',
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