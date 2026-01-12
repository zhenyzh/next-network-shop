import Image from 'next/image';
import clsx from 'clsx';
import {Button, Card, Typography} from '@zhenyzh/common-ui/components';
import {CreateIcon} from '@zhenyzh/common-ui/icons';
import s from './product-card.module.scss';
import productImage from './download.jpg';

export function ProductCard() {
  return (
    <Card className={s.container}>
      <Image
        src={productImage.src}
        alt={productImage.src}
        className={s.image}
        width={250}
        height={250}
      />
      <Typography variant='h2' className={clsx(s.title, s.ellipsis)}>
        Диабло
      </Typography>
      <Typography variant='label' className={s.ellipsis}>
        Recfdjfkdjkldsjflksdjfoksdjfojsdopdsfjiosdfjisdopfjisdopfsdfjoifjiosdpjfifjoisdp
      </Typography>
      <Card className={s.cardAction}>
        <Typography variant='h2'>От 499Р</Typography>
        <Button variant='secondary'>
          <CreateIcon width={20} height={20} /> Добавить
        </Button>
      </Card>
    </Card>
  );
}
