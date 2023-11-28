import Head from "next/head";
import Script from "next/script";

export default function StructuredData({ data }) {
  return (
    <Script
      id="structured-data"
      strategy="beforeInteractive"
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
