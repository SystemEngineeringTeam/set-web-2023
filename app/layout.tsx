import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import 'swiper/css/bundle';
import Analytics from './_component/Analytics';
import Footer from './_component/footer';
import Header from './_component/header/header';
import { getPages } from '@/components/loadFiles';
import { DESCRIPTION, HOST_NAME, KEY_WORDS, SITE_NAME } from '@/const';
import { css } from '@/styled-system/css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(HOST_NAME),
  title: {
    template: '%s | シス研',
    default: SITE_NAME,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  category: 'website',
  keywords: KEY_WORDS,
  openGraph: {
    title: 'システム工学研究会',
    description: DESCRIPTION,
    url: HOST_NAME,
    siteName: SITE_NAME,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DESCRIPTION,
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pages = getPages();

  return (
    <html lang="ja">
      <body
        className={css({
          fontFamily: inter.style.fontFamily,

          '&> main': {
            minHeight: '100vh',
          },
        })}
      >
        <Header pages={pages} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
