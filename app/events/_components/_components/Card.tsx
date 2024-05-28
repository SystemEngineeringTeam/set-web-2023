'use client';

import { useRouter } from 'next/navigation';
import Md2Html from '@/components/md2html';
import { formatdate } from '@/components/util';
import { css } from '@/styled-system/css';
import { mdStyle } from '@/styled-system/patterns';
import { EventPage } from '@/types';

interface Props {
  event: EventPage;
}

export default function EventCard(props: Props) {
  const { event } = props;
  const router = useRouter();

  const now = Date.now();

  function jumpTo() {
    router.push(`/events/${event.id}`);
  }

  return (
    <div
      className={css({
        height: '300px',
        padding: '20px',
        textAlign: 'start',
        boxShadow: '4px 2px 10px -5px #777777',
        borderRadius: '5px',
        overflow: 'hidden',
        transition: 'scale 0.2s',
        cursor: 'pointer',

        '&:hover': {
          scale: 1.02,
        },
      })}
      onClick={jumpTo}
      // 期限が過ぎたお知らせは非表示
      style={{ display: now < event.deadline.getTime() ? 'block' : 'none' }}
    >
      <p>
        {formatdate(event.meta.created_at)} - {formatdate(event.deadline)}
      </p>

      <h3
        className={css({
          paddingBottom: '10px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          overflow: 'hidden',
          textWrap: 'nowrap',
          textOverflow: 'ellipsis',
        })}
      >
        {event.meta.title}
      </h3>

      <div
        className={css({
          height: '195px',
          overflow: 'hidden',
          overflowWrap: 'break-word',
        })}
      >
        <Md2Html
          className={mdStyle({
            style: 'no-style',
          })}
          content={event.content}
        />
      </div>
    </div>
  );
}
