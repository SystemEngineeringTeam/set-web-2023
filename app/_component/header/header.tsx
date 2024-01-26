'use client';

import { useDisclosure } from '@mantine/hooks';
import Modal from '../header/modal';
import HeaderBase from './base';
import HeaderSm from './sm';
import { Page } from '@/types';

type Props = {
  pages: Page[];
};

export default function Header({ pages }: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <HeaderSm open={open} />
      <HeaderBase pages={pages} />
      <Modal opened={opened} close={close} pages={pages} />
    </>
  );
}
