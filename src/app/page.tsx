'use client';

import {Card, Container, Typography} from '@zhenyzh/common-ui/components';
import {Categories} from '@/shared/ui/categories/categories';
import {TopBar} from '@/shared/ui/topBar/topBar';

export default function Home() {
  return (
    <>
      <Container>
        <Card>
          <Typography variant='h2'>Все пиццы</Typography>
        </Card>
      </Container>
      <TopBar>
        <Card>
          <Categories
            data={['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']}
          />
        </Card>
      </TopBar>
    </>
  );
}
