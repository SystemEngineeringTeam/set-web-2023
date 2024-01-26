import { getMdFile } from '@/components/loadFiles';
import Md2Html from '@/components/md2html';
import { css } from '@/styled-system/css';
import { mdStyle } from '@/styled-system/patterns';

export default function Memo() {
  const content = getMdFile('app/dev/MEMO.md');

  return (
    <section>
      <h1
        className={css({
          fontSize: '1.4rem',
        })}
      >
        Memo
      </h1>
      <Md2Html
        className={mdStyle({
          style: 'default',
        })}
        content={content}
      />
    </section>
  );
}
