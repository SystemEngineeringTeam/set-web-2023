"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectToPosts() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/products/1");
  }, [router]);

  return (
    <main>
      <p>/products/1 へ移動します</p>
    </main>
  );
}
