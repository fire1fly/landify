import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames(cls.Loader, className)}>
    <div className={cls.Loader__loader}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
