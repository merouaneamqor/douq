import en from './en.json';
import fr from './fr.json';

export default defineI18nConfig(() => ({
  legacy: true,
  fallbackLocale: 'fr',
  messages: {
    en,
    fr,
  },
}));
