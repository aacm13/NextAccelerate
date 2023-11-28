import { TextAligner } from "@/utils/formatter";
import { PrismicRichText } from "@/components/PrismicRichText";
import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Reveal from "@/components/animations/Reveal";

const DefaultNewsSection = ({ title, titleColor, description, descriptionColor, textAlignment, backgroundColor, news }) => {

  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="main-container py-24">
        <Reveal>
          <div className={`RichText mb-5 ${TextAligner(textAlignment)}`} style={{ color: `${titleColor}` }}>
            <PrismicRichText field={title} />
          </div>
          <div className={`RichText mb-5 ${TextAligner(textAlignment)}`} style={{ color: `${descriptionColor}` }}>
            <PrismicRichText field={description} />
          </div>
        </Reveal>
        <Reveal width="100%" delay={0.5}>
          <div className="mt-10 flex flex-row md:flex-wrap justify-between mx-auto">
            {news.map((item, index) => {
              return (
                <div className="mt-5 sm:w-[350px] border-2" key={index}>
                  <div>
                    <PrismicNextLink field={item.link}>
                      {prismic.isFilled.image(item.image) && (
                        <PrismicNextImage field={item.image} height={200} width={350} className="mx-auto" />
                      )}
                    </PrismicNextLink>
                  </div>
                  <div className="p-5 sm:h-[300px]">
                    <PrismicNextLink field={item.link} className="hover:text-accelerate-blue">
                      <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    </PrismicNextLink>
                    <PrismicRichText field={item.description} />
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default DefaultNewsSection;