import "./globals.css";

import { Inter, Libre_Baskerville } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";
import Head from "next/head";

import { repositoryName } from "@/prismicio";
export const revalidate = 15

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.className)}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="overflow-x-hidden antialiased">
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
