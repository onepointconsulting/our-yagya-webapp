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
                    'resources': 'resources',
                    'Our Yagya': 'Our Yagya',
                    'English': 'English',
                    'Spanish': 'Spanish',
                    'German': 'German',
                    'login': 'login',
                    'made for me made for me': 'made for me made for me',
                    'something special something special': 'something special something special',
                    'Todays murli  Todays murli': 'Todays murli  Todays murli',
                    'events': 'events',
                    'classes & talks': 'classes & talks',
                    'news': 'news',
                    'links directory': 'links directory',
                    'more': 'more',
                    'Peacebuilding women making a difference *(2)': 'Peacebuilding women making a difference *(2)',
                    'October 17, 2021 | 10:00am EST': 'October 17, 2021 | 10:00am EST',
                    ' Sr. Jayanti Kirpalani': ' Sr. Jayanti Kirpalani',
                    'hih de huang jude urriave phd ': 'hih de huang jude urriave phd ',
                    'Events': 'Events',
                    'Online GlobalSilence Retreat': 'Online GlobalSilence Retreat',
                    'Silence Retreat': 'Silence Retreat',
                    '19-20 November ': '19-20 November ',
                    'Avyakt BapDada ': 'Avyakt BapDada ',
                    'milan': 'milan',
                    '15 November ': '15 November ',
                    'Dewali Festival ': 'Dewali Festival ',
                    '4 November': '4 November',
                    'Latest classes ': 'Latest classes ',
                    'blessings': 'blessings',
                    'photos & images': 'photos & images',
                    'audio ebooks': 'audio ebooks',
                    'books': 'books',
                    'music': 'music',
                    'login for more >>': 'login for more >>',
                    ' Links directory': ' Links directory',
                    'Murli Download': 'Murli Download',
                    '(Login Required)': '(Login Required)',
                    ' Madhuban Murli ': ' Madhuban Murli ',
                    ' Avyakt BapDada online': ' Avyakt BapDada online',
                    'BKUN': 'BKUN',
                    ' green team': ' green team',
                    'etc...  ': 'etc...  ',
                    ' featured videos ': ' featured videos ',
                    'Siddhi Swaroop: Conclusion & Experiences  ': 'Siddhi Swaroop: Conclusion & Experiences  ',
                    'Speaker: Mohini Didi  ': 'Speaker: Mohini Didi  ',
                    'October 31, 201 ': 'October 31, 201 ',
                    'Duration: 1:03:45 ': 'Duration: 1:03:45 ',
                    'Our Yagya': 'Our Yagya',
                    'Signup For Seva': 'Signup For Seva',
                    'FAQ': 'FAQ',
                    'contact us': 'contact us',
                    ' terms of use': ' terms of use',
                    'site map': 'site map',
                    'Privacy Policy': 'Privacy Policy',
            

                }
            },
            "es": {
                translations: {
                    'resources': 'recursos',
                    'Our Yagya': 'Nuestra Yagya',
                 
                    'login': 'acceso',
                    'made for me made for me': 'hecho para mi hecho para mi',
                    'something special something special': 'algo especial algo especial',
                    'Todays murli  Todays murli': 'Murli de hoy Murli de hoy',
                    'events': 'eventos',
                    'classes & talks': 'clases y charlas',
                    'news': 'news',
                    'links directory': 'directorio de enlaces',
                    'more': 'más',
                    'Peacebuilding women making a difference *(2)': 'Mujeres constructoras de paz marcando la diferencia *(2)',
                    'October 17, 2021 | 10:00am EST': 'October 17, 2021 | 10:00am EST',
                    ' Sr. Jayanti Kirpalani': 'Hna. Jayanti Kirpalani',
                    'hih de huang jude urriave phd ': 'hola de huang jude urriave doctorado ',
                    'Events': 'Events',
                    'Online GlobalSilence Retreat': 'Retiro de Silencio Global en Línea',
                    'Silence Retreat': 'Retiro de silencio',
                    '19-20 November ': '19-20 de noviembre ',
                    'Avyakt BapDada ': 'Avyakt BapDada',
                    'milan': 'milan',
                    '15 November ': '15 de noviembre',
                    'Dewali Festival ': 'Festival de Diwali ',
                    '4 November': '4 de noviembre',
                    'Latest classes ': 'Últimas clases',
                    'blessings': 'bendiciones',
                    'photos & images': 'fotos e imágenes',
                    'audio ebooks': 'libros electrónicos de audio',
                    'books': 'books',
                    'music': 'música',
                    'login for more >>': 'iniciar sesión para más >>',
                    ' Links directory': 'Directorio de enlaces',
                    'Murli Download': 'Descargar Murli',
                    '(Login Required)': '(Necesario iniciar sesión)',
                    ' Madhuban Murli ': ' Murli de Madhuban',
                    ' Avyakt BapDada online': ' Avyakt BapDada en línea',
                    'BKUN': 'BKUN',
                    ' green team': ' green team',
                    'etc...  ': 'etc...  ',
                    ' featured videos ': ' Vídeos destacados ',
                    'Siddhi Swaroop: Conclusion & Experiences  ': 'Siddhi Swaroop: Conclusión y Experiencias',
                    'Speaker: Mohini Didi  ': 'Oradora: Mohini Didi',
                    'October 31, 201 ': '31 de octubre de 201',
                    'Duration: 1:03:45 ': 'Duration: 1:03:45 ',
                    'Our Yagya': 'Nuestra yagya',
                    'Signup For Seva': 'Regístrese en Seva',
                    'FAQ': 'FAQ',
                    'contact us': 'Contacta con nosotras',
                    ' terms of use': 'términos de Uso',
                    'site map': 'mapa del sitio',
                    'Privacy Policy': 'Política de privacidad',

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