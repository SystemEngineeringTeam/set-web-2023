'use client';

import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { firebaseApp } from '@/const/firebase';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isSupported()) return;

    const analytics = getAnalytics(firebaseApp);
    logEvent(analytics, 'page_view', {
      page_location: pathname,
    });
  }, [pathname]);

  return <></>;
}
