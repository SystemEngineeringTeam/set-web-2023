import EventCard from './Card';
import { css } from '@/styled-system/css';
import { EventPage } from '@/types';

interface Props {
  events: EventPage[];
}

export default function EventList(props: Props) {
  const { events } = props;

  return (
    <section
      className={css({
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      })}
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
