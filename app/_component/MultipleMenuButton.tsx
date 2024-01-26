'use client';

import { useState } from 'react';
import MenuButton from './MenuButton';
import { ArrowUpIcon } from '@/components/icons';
import { css } from '@/styled-system/css';
import { Page } from '@/types';

type Props = {
  pages: Page[];
};

export default function MultiMenuButton({ pages }: Props) {
  const [opened, setOpened] = useState(false);
  // const router = useRouter();

  return (
    <div
      className={css({
        position: 'relative',
      })}
    >
      <button
        className={css({
          padding: '2px 5px 0',
          fontSize: 'sm',
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          transition: 'color 0.3s',

          _hover: { color: 'primary.300' },
        })}
        onClick={() => setOpened((prev) => !prev)}
      >
        <ArrowUpIcon
          className={css({
            fontSize: '1.5rem',
            transition: 'transform 0.3s',
          })}
          style={{
            transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
        Other
      </button>

      <div
        className={css({
          height: '30px',
          backgroundColor: 'primary.500',
          position: 'absolute',
          bottom: '-100%',
          top: 'calc(100% + 5px)',
          left: 0,
          overflow: 'hidden',
          transition: 'height 0.3s',
          borderRadius: '0 0 5px 5px',
        })}
        style={{
          height: opened ? `${pages.length * 30 + 5}px` : 0,
        }}
      >
        {pages.map((page) => (
          <div
            key={page.id}
            className={css({
              lineHeight: '30px',
              paddingInline: '10px',
            })}
            onClick={() => setOpened(false)}
          >
            <MenuButton place="other" text={page.meta.title} path={page.path} />
          </div>
        ))}
      </div>
    </div>
  );
}
