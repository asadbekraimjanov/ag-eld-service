import { createI18n } from 'vue-i18n'

import en from '@/I18n/languages/en.json'
import uz from '@/I18n/languages/uz.json'
import ru from '@/I18n/languages/ru.json'

const savedLocale = localStorage.getItem('locale')

const i18n = createI18n({
    legacy: false,
    locale: ['uz', 'ru', 'en'].includes(savedLocale) ? savedLocale : 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        uz,
        ru
    },
})

export default i18n
