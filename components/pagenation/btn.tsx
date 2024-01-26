import { css } from '@/styled-system/css';

type Props = {
  pageNum: number;
  pagePath: string;
  isCurrent?: boolean;
  isStart?: boolean;
  isHide?: boolean;
  isEnd?: boolean;
};

export default function Button({
  pageNum,
  pagePath,
  isCurrent,
  isHide,
}: Props) {
  return (
    <a
      href={pagePath}
      className={css({
        marginInline: '5px',
        width: '30px',
        height: '30px',
        display: 'inline-block',
        border: 'solid 1px',
        borderColor: 'primary.100',
        borderRadius: '999px',
        textAlign: 'center',
        lineHeight: '28px',
        cursor: 'pointer',
        backgroundColor: isCurrent ? 'primary.400' : 'transparent',
        visibility: isHide ? 'hidden' : 'visible',
      })}
    >
      {pageNum}
    </a>
  );
}
