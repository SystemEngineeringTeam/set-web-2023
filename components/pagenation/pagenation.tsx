import { getPagenationNums } from '../util';
import Button from './btn';
import Leader from './leader';
import { css } from '@/styled-system/css';

type Props = {
  pageNum: number;
  PageMax: number;
  // eslint-disable-next-line no-unused-vars
  getPath: (page: number) => string;
};

export default function Pagenation({ pageNum, PageMax, getPath }: Props) {
  const pageNums = getPagenationNums(pageNum, PageMax, 2);
  const pageNumsLast = pageNums[pageNums.length - 1];

  return (
    <div
      className={css({
        margin: '40px auto 0 auto',
        width: 'fit-content',
        userSelect: 'none',
      })}
    >
      <Button
        pageNum={1}
        pagePath={getPath(1)}
        isHide={pageNums[0] === 1}
        isStart
      />

      <Leader isHide={pageNums[0] === 1} />

      {pageNums.map((n) => (
        <Button
          key={n}
          pageNum={n}
          pagePath={getPath(n)}
          isCurrent={n === pageNum}
        />
      ))}

      <Leader isHide={pageNumsLast === PageMax} />

      <Button
        pageNum={PageMax}
        pagePath={getPath(PageMax)}
        isHide={pageNumsLast === PageMax}
        isStart
      />
    </div>
  );
}
