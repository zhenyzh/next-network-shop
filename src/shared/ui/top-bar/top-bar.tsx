import clsx from 'clsx';
import s from './top-bar.module.css';
import {Container} from '@zhenyzh/common-ui/components';

export type TopBarProps = {
  classNames?: string;
  children?: React.ReactNode;
};

export const TopBar = ({classNames, children}: TopBarProps) => {
  const className = clsx(s.wrapper, classNames);
  return (
    <div className={className}>
      <Container className={clsx(s.container)}>{children}</Container>
    </div>
  );
};
