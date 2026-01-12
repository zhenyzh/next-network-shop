import {Card, CheckBox, Container, Typography} from '@zhenyzh/common-ui/components';

export function FilterCart() {
  return (
    <Container>
      <Card>
        <Typography variant='h2'>Фильтр</Typography>
        <CheckBox label='первый' checked />
      </Card>
    </Container>
  );
}
