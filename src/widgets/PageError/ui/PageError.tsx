import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, className)}>
      <div className={cls.PageError__title}>Error</div>
      <Button
        onClick={reloadPage}
        className={cls.PageError__button}
      >
        Reload the page
      </Button>
    </div>
  );
};
