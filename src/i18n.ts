import i18n from "i18next";
import { initReactI18next } from "react-i18next";

function loadLocaleResources() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const resources: any = {};
  locales && locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      resources[locale] = {
        translation: locales(key)
      }
    }
  });
  return resources;
}

i18n
  .use(initReactI18next)
  .init({
    resources: loadLocaleResources(),
    fallbackLng: 'zh-CN',
    detection: {
      caches: ['localStorage'],
    }
  });

export default i18n;
