import EventList from './_components/_components/List';
import { getEvents } from '@/components/loadFiles';
import { css } from '@/styled-system/css';

export default function EventsPage() {
  const events = getEvents();

  return (
    <main
      className={css({
        padding: '80px 20px',
        maxWidth: '1000px',
        marginInline: 'auto',
      })}
    >
      <h1
        className={css({
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '1rem',
          borderBottom: '1px solid black',
        })}
      >
        募集中のイベント
      </h1>
      <EventList events={events} />
    </main>
  );
}
