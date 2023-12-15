"use client";

import { useRouter } from "next/navigation";

export default function RedirectToPosts() {
  const router = useRouter();
  router.push("/posts/1");

  return (
    <main>
      <p>/posts/1 へ移動します</p>
    </main>
  );
}
