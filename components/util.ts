export function getTextFromMd(md: string) {
  const text = md
    .replace(/#+ .*\n/g, '')
    .replace(/[ |:\\*-]/g, '')
    .replace(/<.+>/g, '')
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .replace(/\\/g, '')
    .replace(/\[.*\]\(.*\)/g, '');
  return text;
}

export function formatdate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}年${month}月${day}日`;
}

export function toDigits(num: number, n: number): string {
  return `${num}`.padStart(n, '0');
}

export function toOpen(url: string) {
  window.open(url, '_blank');
}

export function getPagenationNums(
  current: number,
  max: number,
  n: number,
): number[] {
  const nums: number[] = [];
  let rangeMin = current - n;
  let rangeMax = current + n;

  if (max - current < n) rangeMin -= n - max + current;
  if (rangeMin < 1) rangeMin = 1;

  if (n - current + 1 > 0) rangeMax += n - current + 1;
  if (rangeMax > max) rangeMax = max;

  for (let i = rangeMin; i <= rangeMax; i++) nums.push(i);

  return nums;
}
