'use client';

import {Button, Card, Container, Typography, Line} from '@zhenyzh/common-ui/components';
import {UserRoundIcon, ShoppingCartIcon} from '@zhenyzh/common-ui/icons';

import s from './header.module.css';

export function Header() {
  return (
    <Container className={s.container}>
      <Card>
        <Typography variant='h1'>Next pizza</Typography>
        <Typography variant='h2' className={s.description}>
          Вкусно и точка
        </Typography>
      </Card>
      <Card className={s.cartContent}>
        <Button>
          <UserRoundIcon />
          Войти
        </Button>
        <Button variant='secondary'>
          <Typography className={s.countColor}>500p</Typography>
          <Line />
          <ShoppingCartIcon />
          <Typography className={s.countColor}>3</Typography>
        </Button>
      </Card>
    </Container>
  );
}
