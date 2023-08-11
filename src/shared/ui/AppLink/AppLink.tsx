import {
  AnchorHTMLAttributes,
  FC, HTMLAttributes, LinkHTMLAttributes, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  DEFAULT = 'default',
}

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  theme?: AppLinkTheme;
  to?: string;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    children,
    className,
    to = '#',
    theme = AppLinkTheme.DEFAULT,
    ...otherProps
  } = props;

  return (
    <a
      href={to}
      className={classNames(cls.AppLink, cls[theme], className)}
      {...otherProps}
    >
      {children}
    </a>
  );
});
