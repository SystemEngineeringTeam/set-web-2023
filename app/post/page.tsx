"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectToPosts() {
  const router = useRouter();

  useEffect(() => {
    router.push("/posts");
  }, [router]);

  return (
    <main>
      <p>/posts へ移動します</p>
    </main>
  );
}
