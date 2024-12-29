import { getEvents } from '@/components/loadFiles';
import Md2Html from '@/components/md2html';
import { css } from '@/styled-system/css';
import { mdStyle } from '@/styled-system/patterns';
import '@/styles/bootstrap/bootstrap.scss';

export const generateStaticParams = () => {
  const events = getEvents();

  return events.map((e) => ({
    id: e.id.toString(),
  }));
};

type Props = {
  params: {
    id: string;
  };
};

export default function Products(props: Props) {
  const {
    params: { id },
  } = props;

  const events = getEvents();
  const event = events.find((event) => event.id.toString() === id);

  if (event === undefined) throw new Error('Event not found');

  return (
    <main
      className={css({
        padding: '80px 20px',
      })}
    >
      <div
        className={css({
          marginInline: 'auto',
          width: '100%',
          maxWidth: '800px',
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
          {event?.meta.title}
        </h1>

        <section>
          <Md2Html
            className={mdStyle({
              style: 'default',
            })}
            content={event?.content}
          />
        </section>
      </div>
    </main>
  );
}
