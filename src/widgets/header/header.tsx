'use client';

import {Button, Card, Container, Typography, Line} from '@zhenyzh/common-ui/components';
import {UserRoundIcon, ShoppingCartIcon} from '@zhenyzh/common-ui/icons'

import s from './header.module.css'

export function Header() {
    return (
        <Container className={s.container}>
            <Card className={s.card}>
                <Typography variant='h1'>Next pizza</Typography>
                <Typography variant='h2' className={s.description}>Вкусно и точка</Typography>
            </Card>
            <Card className={s.cartContent}>
                <Button variant='secondary'> <UserRoundIcon/>Войти</Button>
                <Button>
                    <Typography variant='label' className={s.countColor}>500p</Typography>
                    <Line/>
                    <ShoppingCartIcon width={24} height={24}/>
                    <Typography variant='label' className={s.countColor}>3</Typography>
                </Button>
            </Card>
        </Container>
    );
}