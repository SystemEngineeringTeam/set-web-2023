'use client';

import { logEvent } from 'firebase/analytics';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { analytics } from '../firebase';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!analytics) return;
    logEvent(analytics, 'page_view', {
      page_location: pathname,
    });
  }, [pathname]);

  return <></>;
}
