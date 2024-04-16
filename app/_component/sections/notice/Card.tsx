'use client';

import Md2Html from '@/components/md2html';
import { formatdate } from '@/components/util';
import { css } from '@/styled-system/css';
import { mdStyle } from '@/styled-system/patterns';
import { NoticePage } from '@/types';

type Props = {
  notice: NoticePage;
};

export default function NoticeCard(props: Props) {
  const { notice } = props;

  const now = Date.now();

  return (
    <div
      key={notice.id}
      className={css({
        padding: '40px',
        textAlign: 'start',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',

        '&:nth-child(1)': {
          borderTop: '1px solid rgba(0, 0, 0, 0.2)',
        },
      })}
      // 期限が過ぎたお知らせは非表示
      style={{ display: now < notice.deadline.getTime() ? 'block' : 'none' }}
    >
      <p>
        <span>{formatdate(notice.meta.created_at)}</span>
        <span
          className={css({
            marginLeft: '10px',
          })}
        >
          [{notice.category}]
        </span>
      </p>

      <h3
        className={css({
          fontSize: '1.5rem',
          fontWeight: 'bold',
        })}
      >
        {notice.meta.title}
      </h3>

      <Md2Html
        className={mdStyle({
          style: 'a-only',
        })}
        content={notice.content}
      />
    </div>
  );
}
