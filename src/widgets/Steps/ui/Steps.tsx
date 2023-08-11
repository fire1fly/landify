import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColor } from 'shared/ui/Text/Text';
import cls from './Steps.module.scss';
import { steps } from '../model/items';
import { StepCard } from './StepCard';

interface StepsProps {
  className?: string;
}

export const Steps = React.forwardRef<HTMLSelectElement, StepsProps>(({ className }, ref) => {
  const { t } = useTranslation();
  return (
    <section ref={ref} className={classNames(cls.Steps, className)}>
      <div className="container">
        <Text tag="h2" className={cls.Steps_title}>{t('steps.title')}</Text>
        <Text tag="p" color={TextColor.TRANSLUCENT} className={cls.Steps_subtitle}>{t('steps.subtitle')}</Text>

        <div className={cls.Steps_grid}>
          {
            steps.map((step, i) => (
              <StepCard
                key={step.title}
                number={++i}
                {...step}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
});
