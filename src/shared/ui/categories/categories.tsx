import type {ComponentProps} from 'react';
import clsx from 'clsx';
import {Button} from '@zhenyzh/common-ui/components';

import s from './categories.module.css';

export type CategoriesProps = {
  data: string[];
  classNames?: string;
} & ComponentProps<'div'>;

const activeIndex = 0;

export const Categories = ({data, classNames}: CategoriesProps) => {
  const className = clsx(s.container, classNames);
  return (
    <div className={className}>
      {data.map((item, index) => (
        <a key={index} className={clsx(s.container)}>
          <Button
            variant='secondary'
            className={clsx(s.containerData, activeIndex === index && s.active)}
          >
            {item}
          </Button>
        </a>
      ))}
    </div>
  );
};
