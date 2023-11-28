import styles from './BlogCard.module.css';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import Link from 'next/link';

const BlogCard = ({ title, img, link, date, cat }) => {
  return (
    <Link href={link} className={`${styles.blog}`}>
      <article className="flex flex-col">
        <div className="overflow-hidden rounded-3xl">
          {prismic.isFilled.image(img) && (
            <PrismicNextImage field={img} className="w-full h-[250px] object-cover rounded-3xl" />
          )}
        </div>
        <div className="flex flex-row flex-wrap my-3">
          <div className="p-3 bg-accelerate-blue text-white font-bold rounded-full w-32 text-center">{cat}</div>
          <div className="p-3 font-bold rounded-full w-32 text-center">{date}</div>
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </article>
    </Link>
  )
}

export default BlogCard;