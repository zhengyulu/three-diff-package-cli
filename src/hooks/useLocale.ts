import { useCallback } from 'react';
import { TFunction, useTranslation } from 'react-i18next';

function useLocale(): (TFunction<'translation', undefined> | ((lang: string) => void))[] {
  const { t, i18n } = useTranslation();
  const changeLocale = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, [i18n]);

  return [t, changeLocale];
}

export default useLocale;
