import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { ILanguage, languages } from '../model/languages';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const initLang = languages.find((lang) => lang.value === i18n.language);
  const [language, setLanguage] = useState<ILanguage>(initLang || languages[0]);

  const handleLangSwitch = (lang: ILanguage) => {
    i18n.changeLanguage(lang.value);
    setLanguage(lang);
  };

  return (
    <div className={classNames(cls.LangSwitcher)}>
      {
        languages.map((lang) => (
          <div
            key={lang.value}
            onClick={() => handleLangSwitch(lang)}
            className={classNames(
              cls.LangSwitcher_lang,
              '_text-upper',
              { [cls.active]: lang.value === language.value },
            )}
          >
            {lang.label}
          </div>
        ))
      }
    </div>
  );
};
