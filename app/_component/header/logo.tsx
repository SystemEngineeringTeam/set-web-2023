import Image from 'next/image';

export default function Logo() {
  return (
    <a href="/">
      <Image src="/logo/set.webp" width={40} height={40} alt="sysken logo" />
    </a>
  );
}
