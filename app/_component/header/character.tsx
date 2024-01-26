'use client';

import { useState } from 'react';
import { css } from '@/styled-system/css';

export default function Character() {
  const charas = [
    {
      path: '/logo/syscat.webp',
      desc: 'シス研公式キャラクター シスキャット',
    },
    {
      path: '/logo/hontai.webp',
      desc: 'シス研公式キャラクター シスペン',
    },
  ];
  const [charaIndex, setCharaIndex] = useState(0);

  return (
    <img
      src={charas[charaIndex].path}
      className={css({
        width: '200px',
        display: 'none',
        cursor: 'pointer',

        sm: { display: 'block' },
      })}
      alt={charas[charaIndex].desc}
      onMouseDown={() => setCharaIndex(1)}
      onMouseUp={() => setCharaIndex(0)}
      onMouseMove={() => setCharaIndex(0)}
    />
  );
}
