import About from './_components/About';
import ChangeLog from './_components/ChangeLog';
import Memo from './_components/Memo';
import { css } from '@/styled-system/css';

export default function DevelopperLayout() {
  return (
    <main
      className={css({
        marginTop: '40px',
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',

        sm: {
          padding: '40px',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'auto 1fr',
        },

        '& section': {
          width: '100%',
          padding: '20px',
          border: '1px solid',
          borderRadius: '10px',
        },
      })}
    >
      <About />
      <ChangeLog />
      <Memo />
    </main>
  );
}
