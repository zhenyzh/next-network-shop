import type {ComponentProps} from 'react';
import clsx from 'clsx';
import {Button} from '@zhenyzh/common-ui/components';

import s from './categories.module.css';

export type CategoriesProps<T> = {
  data: T[];
} & ComponentProps<'div'>;

const activeIndex = 0;

export const Categories = <T,>({data, className}: CategoriesProps<T>) => {
  return (
    <div className={clsx(s.container, className)}>
      {data.map((item, index) => (
        <a key={index} className={clsx(s.container)}>
          <Button
            variant='secondary'
            className={clsx(s.containerData, activeIndex === index && s.active)}
          >
            {String(item)}
          </Button>
        </a>
      ))}
    </div>
  );
};
