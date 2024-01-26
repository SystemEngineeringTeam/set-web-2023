import MenuButton from './MenuButton';
import Character from './header/character';
import { getPages } from '@/components/loadFiles';
import { css } from '@/styled-system/css';

export default function Footer() {
  const pages = getPages();

  return (
    <footer
      className={css({
        backgroundColor: 'primary.200',
        width: '100vw',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 29px',

        sm: {
          gridTemplateColumns: '1fr 1px 1fr',
        },
      })}
    >
      <div
        className={css({
          padding: '30px 100px',
        })}
      >
        {pages.map((page) => (
          <MenuButton
            place="footer"
            text={page.meta.title}
            path={page.path}
            key={page.id}
          />
        ))}

        <div className={css({ margin: '10px 0' })} />

        <MenuButton place="footer" text="Developper" path={'/dev'} />
      </div>

      <div
        className={css({
          height: '100%',
          maxHeight: '300px',
          backgroundColor: 'primary.400',
          marginBlock: 'auto',
          display: 'none',

          sm: { display: 'block' },
        })}
      />

      <div
        className={css({
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',

          sm: { display: 'flex' },
        })}
      >
        <Character />
      </div>

      <p
        className={css({
          marginInline: '20px',
          lineHeight: '28px',
          textAlign: 'center',
          borderTop: '1px solid white',
          color: 'white',
          sm: {
            gridColumn: 'span 3',
          },
        })}
      >
        SET @ 2023 Copyright.
      </p>
    </footer>
  );
}
