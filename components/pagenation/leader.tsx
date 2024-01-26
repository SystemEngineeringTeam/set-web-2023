import { css } from '@/styled-system/css';

type Props = {
  isHide: boolean;
};

export default function Leader({ isHide }: Props) {
  return (
    <span
      className={css({
        width: '30px',
        display: 'inline-flex',
        justifyContent: 'space-around',
        verticalAlign: 'middle',
        visibility: isHide ? 'hidden' : 'visible',
      })}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={css({
            width: '4px',
            height: '4px',
            backgroundColor: 'primary.100',
          })}
        />
      ))}
    </span>
  );
}
