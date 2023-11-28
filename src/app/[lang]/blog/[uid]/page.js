import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";

import { BlogLayout } from "@/components/BlogLayout";
import { components } from "@/slices";
import StructuredData from "@/utils/StructuredData";

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog", params.uid, { lang: params.lang })
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
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
      images: page.data.meta_image.url,
      author: page.data.meta_author,
    },
  };
}
export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog", params.uid, { lang: params.lang })
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
    author: [
      {
        "@type": "Person",
        name: page.data.author,
      },
    ],
    image: page.data.meta_image.url,
    datePublished: page.last_publication_date,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <BlogLayout locales={locales} navigation={navigation} settings={settings} footer={footer} page={page}>
        <SliceZone slices={page.data.slices} components={components} />
      </BlogLayout>
    </>
  );
}


export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog", { lang: "*" });

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}
