import { Carousel } from './Swiper';
import { css } from '@/styled-system/css';
import { center } from '@/styled-system/patterns';
import { Image } from '@/types';

type Props = {
  message: string;
  images: Image[];
};

export default function TopSection({ message, images }: Props) {
  return (
    <section
      className={css({
        height: '100vh',
        paddingTop: '40px',
        position: 'relative',
      })}
    >
      <div
        className={center({
          margin: 'auto',
          height: 'fit-content',
          width: 'fit-content',
          inset: 0,
          position: 'absolute',
          zIndex: 2,
        })}
      >
        <h1
          className={css({
            color: 'prima',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '3px 3px white',
          })}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>

      <Carousel images={images} />
    </section>
  );
}
