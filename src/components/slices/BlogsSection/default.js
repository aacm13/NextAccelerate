'use client'
import { TextAligner } from "@/utils/formatter";
import { PrismicRichText } from "@/components/PrismicRichText";
import { createClient } from "@/prismicio";
import { useEffect, useState } from 'react';
import BlogCard from "./components/BlogCard";
import Reveal from "@/components/animations/Reveal";

const DefaultBlogsSection = ({ title, titleColor, textAlignment, language, backgroundColor }) => {

  const client = createClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      let lang;
      switch (language) {
        case 'English':
          lang = "en-us";
          break;
        case 'Spanish':
          lang = "es-es";
          break;
        default:

      }
      try {
        const blogs = await client.getAllByType("blog", { lang: lang });
        setData(blogs);
      } catch (e) {
        console.error('error: ', e);
      }
    }
    getBlogs();
  }, [])
  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="main-container py-24">
        <Reveal width="100%">
          <div className={`RichText mb-10 ${TextAligner(textAlignment)}`} style={{ color: `${titleColor}` }}>
            <PrismicRichText field={title} />
          </div>
        </Reveal>
        {data &&
          <div className="grid grid-col-1 md:grid-col-2 xl:grid-cols-3 gap-4">
            {data.length > 0 && data.map((blog, index) => {
              return (
                <Reveal key={index}>
                  <BlogCard
                    title={blog.data.title}
                    img={blog.data.image}
                    link={blog.url}
                    date={blog.data.datePublished}
                    cat={blog.data.category}
                  />
                </Reveal>
              )
            })}
          </div>
        }
      </div>
    </section>
  )
}

export default DefaultBlogsSection;