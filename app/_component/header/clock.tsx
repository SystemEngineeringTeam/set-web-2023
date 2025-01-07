'use client';

import { useEffect, useState } from 'react';
import { toDigits } from '@/components/util';
import { css } from '@/styled-system/css';

export default function Clock() {
  const [time, setTime] = useState<null | Date>(null);

  useEffect(() => {
    setTime(new Date());
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <span className={css({ '@media (max-width: 800px)': { display: 'none' } })}>
      {time && (
        <>
          <span
            className={css({
              width: '17px',
              display: 'inline-block',
            })}
          >
            {time.getMonth() + 1}
          </span>
          <span>月</span>
          <span
            className={css({
              width: '20px',
              display: 'inline-block',
            })}
          >
            {time.getDate()}
          </span>
          <span>日</span>
          <span
            className={css({
              display: 'inline-block',
              width: '5px',
            })}
          />
          <span
            className={css({
              width: '20px',
              display: 'inline-block',
            })}
          >
            {toDigits(time.getHours(), 2)}
          </span>
          <span>:</span>
          <span
            className={css({
              width: '20px',
              display: 'inline-block',
            })}
          >
            {toDigits(time.getMinutes(), 2)}
          </span>
        </>
      )}
    </span>
  );
}
