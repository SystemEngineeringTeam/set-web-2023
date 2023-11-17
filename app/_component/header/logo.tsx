"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      src="/logo/set.webp"
      width={40}
      height={40}
      alt="sysken logo"
      onClick={() => router.push("/")}
    />
  );
}
