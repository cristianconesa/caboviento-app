import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from './en.json';
import es from './es.json';

i18n.fallbacks = true;
i18n.translations = { en, es };
i18n.locale = Localization.locale || 'es';

export default i18n;