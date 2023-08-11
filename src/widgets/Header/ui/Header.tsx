import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Logo from 'shared/assets/images/logo.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { LangSwitcher } from 'entities/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useResponsive } from 'shared/lib/hooks/useResponsive';
import IconInfo from 'shared/assets/icons/icon-info-circle.svg';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
  onClickScroll?: () => void;
}

export const Header: FC<HeaderProps> = ({ className, onClickScroll }) => {
  const { t } = useTranslation();
  const { md, lg } = useResponsive();
  return (
    <header className={classNames(cls.Header, className)}>
      <div className={classNames(cls.Header_inner, 'container')}>
        <div className={cls.Header_logo}>
          <Logo className={cls.Header_logo_pic} />
        </div>

        {
          lg && (
            <div className={cls.Header_plate} onClick={onClickScroll}>
              <div className={cls.Header_plate_inner}>
                <IconInfo className={cls.Header_plate_icon} />
                <div className={classNames(cls.Header_plate_text, '_text-upper')}>{t('howItWork')}</div>
              </div>
            </div>
          )
        }

        <div className={cls.Header_bar}>
          <LangSwitcher />
          {
            md && (
              <a href="#">
                <Button className={cls.Header_btn} align="center" onClick={onClickScroll}>
                  {t('connectWallet')}
                </Button>
              </a>
            )
          }
        </div>
      </div>
    </header>
  );
};
