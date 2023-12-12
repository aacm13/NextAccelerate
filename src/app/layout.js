import "./globals.css";

import { Inter, Libre_Baskerville } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";
import Head from "next/head";

import { repositoryName } from "@/prismicio";
import Script from "next/script";

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
        <Script
          strategy="afterInteractive" id="gtag-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-EGBVMK6V5Q"
        ></Script>
        <Script strategy="afterInteractive" id="gtag" >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            
            gtag("config", "G-EGBVMK6V5Q");
            `}
        </Script>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
