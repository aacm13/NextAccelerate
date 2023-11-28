import { SliceZone } from "@prismicio/react";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { asText, asImageSrc } from "@prismicio/helpers";
import Head from 'next/head'

import { Layout } from "@/components/Layout";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params: { lang } }) {
  const client = createClient();
  const page = await client.getByUID("page", "home", { lang });

  return {
    title: `${page.data.title} | AccelerateSV`,
    description: page.data.meta_description,
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/',
        '/es-es': '/es-es',
      },
    },
    keywords: page.data.keywords?.split(','),
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
      images: asImageSrc(page.data.meta_image),
    },
  };
}

export default async function Page({ params: { lang } }) {
  const client = createClient();

  const page = await client.getByUID("page", "home", { lang });
  const navigation = await client.getSingle("navigation", { lang });
  const settings = await client.getSingle("settings", { lang });
  const footer = await client.getSingle("footer", { lang });
  const locales = await getLocales(page, client);
  const structuredData = {
    "@context": "http://schema.org",
    "@type": page.type,
    headline: page.data.meta_title,
    description: page.data.meta_description,
    image: page.data.meta_image.url,
  };

  return (
    <Layout locales={locales} navigation={navigation} settings={settings} footer={footer} page={page}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}
