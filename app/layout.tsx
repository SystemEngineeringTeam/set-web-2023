import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Footer from "./_component/footer";
import Header from "./_component/header/header";
import { getPages } from "./_component/loadFiles";

const inter = Inter({ subsets: ["latin"] });

const description =
  "システム工学研究会ってどういうサークル？" +
  "システム工学研究会(通称シス研)は愛知工業大学公認の情報系サークルです。" +
  "このサークルの部室にはプログラミングや電子工作、インフラなどといった様々な情報の分野についての勉強ができる環境が整っています。" +
  "シス研では勉強会やサークル内ハッカソンを開催したり、大学祭では工科展に出展したりしています。" +
  "最近では外部のハッカソンに参加する人もいたり、自分の作りたいものを制作するなどして自由に活動しています。" +
  "またサークルのWebページやサーバーの管理も行っています。";

export const metadata: Metadata = {
  title: {
    template: "%s | シス研",
    default: "システム工学研究会",
  },
  description,
  applicationName: "シス研",
  category: "website",
  keywords: ["システム工学研究会", "シス研", "愛知工業大学", "愛工大"],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pages = getPages();

  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header pages={pages} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
