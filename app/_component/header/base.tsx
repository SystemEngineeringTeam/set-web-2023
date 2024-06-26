'use client';

import MenuButton from '../MenuButton';
import MultiMenuButton from '../MultipleMenuButton';
import Battery from './battery';
import Clock from './clock';
import Logo from './logo';
import { css } from '@/styled-system/css';
import { Page } from '@/types';

type Props = {
  pages: Page[];
};

export default function HeaderBase({ pages }: Props) {
  const singlePages = pages.filter((page) => !page.other && page.path !== '/');
  const multiPages = pages.filter((page) => page.other);

  return (
    <header
      className={css({
        height: '40px',
        padding: '0 10px',
        backgroundColor: 'primary.500',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'none',
        alignItems: 'center',
        gap: '10px',

        sm: {
          display: 'flex',
        },
      })}
    >
      <Logo />
      {singlePages.map((page) => (
        <MenuButton
          place="header"
          text={page.meta.title}
          path={page.path}
          key={page.id}
        />
      ))}

      <MultiMenuButton pages={multiPages} />

      <span
        className={css({
          marginInline: 'auto',
        })}
      />

      <Battery />
      <Clock />
    </header>
  );
}
