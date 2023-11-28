import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";
import StructuredData from "@/utils/StructuredData";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid, { lang: params.lang })
    .catch(() => notFound());

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
      images: page.data.meta_image.url,
    },
  };
}

export default async function Page({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("page", params.uid, { lang: params.lang })
    .catch(() => notFound());
  const navigation = await client.getSingle("navigation", {
    lang: params.lang,
  });
  const settings = await client.getSingle("settings", { lang: params.lang });
  const footer = await client.getSingle("footer", { lang: params.lang });
  const locales = await getLocales(page, client);
  const structuredData = {
    "@context": "http://schema.org",
    "@type": page.type,
    headline: page.data.meta_title,
    description: page.data.meta_description,
    image: page.data.meta_image.url,
  };
  return (
    <>
      <StructuredData data={structuredData} />
      <Layout locales={locales} navigation={navigation} settings={settings} footer={footer} page={page}>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}
