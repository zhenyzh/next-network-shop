'use client';

import {Button, Card, CheckBox, Typography} from '@zhenyzh/common-ui/components';
import {CreateIcon} from '@zhenyzh/common-ui/icons';
import s from './filter-card.module.scss';

export function FilterCard() {
  return (
    <>
      <Card className={s.gapCard}>
        <Typography variant='h2'>Фильтрация</Typography>
        <CheckBox labelClassName={s.label} label='Можно собирать' />
        <CheckBox labelClassName={s.label} label='Новинки' />
        <Typography variant='h2'>Ингредиенты:</Typography>
        <CheckBox labelClassName={s.label} label='Сырный соус' />
        <CheckBox labelClassName={s.label} label='Моцарелла' />
        <CheckBox labelClassName={s.label} label='Чеснок' />
        <CheckBox labelClassName={s.label} label='Соленые огурчики' />
        <CheckBox labelClassName={s.label} label='Томаты' />
        <Button variant='outline' className={s.paddingButton}>
          <CreateIcon width={20} height={20} />
          Показать все
        </Button>
      </Card>
    </>
  );
}
