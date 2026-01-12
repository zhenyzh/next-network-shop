'use client';

import {Card, Container, Typography} from '@zhenyzh/common-ui/components';
import {Categories} from '@/shared/ui/categories/categories';
import {TopBar} from '@/shared/ui/topBar/topBar';
import {FilterCard} from '@/features';
import {ProductCard} from '@/entities';

export default function Home() {
  return (
    <>
      <Container>
        <Card>
          <Typography variant='h1'>Все пиццы</Typography>
        </Card>
      </Container>
      <TopBar>
        <Card>
          <Categories
            data={['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']}
          />
        </Card>
      </TopBar>
      <Container style={{display: 'flex', gap: '100px'}}>
        <FilterCard />
        <ProductCard />
      </Container>
    </>
  );
}
