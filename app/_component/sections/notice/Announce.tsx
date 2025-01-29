import ImageSection from '../Image';
import NoticeCard from './Card';
import { getNotices } from '@/components/loadFiles';
import { css } from '@/styled-system/css';

interface Props {
  img: string;
}

export default function Notice({ img }: Props) {
  const notices = getNotices();
  // ビルド時点での期限が過ぎたお知らせは表示しないï
  const displayNotices = notices.filter(
    (n) => n.deadline.getTime() > Date.now(),
  );

  if (displayNotices.length === 0) {
    return null;
  }

  return (
    <>
      <section
        className={css({
          padding: '50px 0',
          textAlign: 'center',
        })}
      >
        <h2
          className={css({
            paddingBottom: '30px',
            fontSize: '2rem',
          })}
        >
          お知らせ
        </h2>

        <div
          className={css({
            marginInline: 'auto',
            maxWidth: '800px',
          })}
        >
          {displayNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </section>

      <ImageSection img={img} />
    </>
  );
}
