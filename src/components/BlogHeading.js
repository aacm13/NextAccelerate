import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import Grow from "./animations/Grow";
import Reveal from "./animations/Reveal";
const BlogHeading = ({ title, shortDescription, image, category, datePublished, author }) => {
  return (
    <section className="main-container">
      <Reveal width="100%">
        <div className="flex flex-row justify-center mb-5">
          {category && (
            <div className="p-3 bg-black text-white font-bold rounded-full w-32 text-center hover:bg-accelerate-blue">
              {category}
            </div>
          )}
          {datePublished && (
            <div className="p-3 font-bold rounded-full w-32 text-center">
              {datePublished}
            </div>
          )}
        </div>
      </Reveal>
      <Grow delay={1} width="100$">
        <div className="RichText font-bold mb-5">
          <h1 className="text-center">{title}</h1>
        </div>
        <div className="RichText mb-10">
          <p className="text-center">{shortDescription}</p>
        </div>
      </Grow>
      <Reveal width="100%">
        <div>
          {prismic.isFilled.image(image) && (
            <PrismicNextImage field={image} className="rounded-3xl w-full" />
          )}
        </div>
      </Reveal>
    </section>
  )
}

export default BlogHeading;