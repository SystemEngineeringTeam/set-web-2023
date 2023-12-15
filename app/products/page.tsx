"use client";

import { useRouter } from "next/navigation";

export default function RedirectToPosts() {
  const router = useRouter();
  router.push("/products/1");

  return (
    <main>
      <p>/products/1 へ移動します</p>
    </main>
  );
}
