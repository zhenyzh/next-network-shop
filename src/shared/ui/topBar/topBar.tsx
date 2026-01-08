import clsx from 'clsx';
import s from './topBar.module.css';
import {Container} from '@zhenyzh/common-ui/components';
import type {ComponentProps} from 'react';

export type TopBarProps = {
  children?: React.ReactNode;
} & ComponentProps<'div'>;

export const TopBar = ({className, children}: TopBarProps) => {
  return (
    <div className={clsx(s.wrapper, className)}>
      <Container className={clsx(s.container)}>{children}</Container>
    </div>
  );
};
