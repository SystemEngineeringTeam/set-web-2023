export function getTextFromMd(md: string) {
  const text = md
    .replace(/#+ .*\n/g, "")
    .replace(/[ |:\\*-]/g, "")
    .replace(/<.+>/g, "")
    .replace(/\*/g, "")
    .replace(/`/g, "")
    .replace(/\\/g, "")
    .replace(/\[.*\]\(.*\)/g, "");
  return text;
}

export function formatdate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}年${month}月${day}日`;
}
