import {Card, CheckBox, Container, Typography} from '@zhenyzh/common-ui/components';
import s from './filter-cart.module.scss';

export function FilterCart() {
  return (
    <Container>
      <Card className={s.gapCard}>
        <Typography variant='h2'>Фильтр</Typography>
        <CheckBox labelClassName={s.label} label='Первый' />
      </Card>
    </Container>
  );
}
