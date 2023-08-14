import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextColor } from 'shared/ui/Text/Text';
import IconArrow from 'shared/assets/icons/icon-arrow-right-green.svg';
import mainScreenBg from 'shared/assets/images/mainscreen-bg.png';
import cls from './MainScreen.module.scss';
import { tags } from '../model/tags';

interface MainScreenProps {
  className?: string;
  onClickScroll?: () => void;
}

export const MainScreen: FC<MainScreenProps> = ({ className, onClickScroll }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.MainScreen, 'container', className)}>
      <div className={cls.MainScreen_row}>
        <div className={cls.MainScreen_info}>
          <Text
            tag="span"
            color={TextColor.ORANGE}
            className={classNames(cls.MainScreen_suptitle, '_text-upper')}
          >
            {t('pageSuptitle')}
          </Text>
          <Text tag="h1" className={classNames(cls.MainScreen_title)}>{t('pageTitle')}</Text>
          <Text
            tag="p"
            color={TextColor.TRANSLUCENT}
            className={classNames(cls.MainScreen_subtitle)}
          >
            {t('pageSubtitle')}
          </Text>
          <Button
            className={cls.MainScreen_btn_get}
            align="between"
            gap={24}
            endIcon={IconArrow}
            onClick={onClickScroll}
          >
            {t('getStarted')}
          </Button>
          {
            tags.length && (
              <div className={cls.MainScreen_tags}>
                <div className={classNames(cls.MainScreen_tags_label, '_text-upper')}>{t('poweredBy')}</div>
                <div className={cls.MainScreen_tags_row}>
                  {
                    tags.map(({ key, image }) => (
                      <div className={cls.MainScreen_tags_item}>
                        <img
                          key={key}
                          src={image}
                          alt={key}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>
        <div className={cls.MainScreen_pic}>
          <img src={mainScreenBg} alt="background" />
        </div>
      </div>
    </div>
  );
};
