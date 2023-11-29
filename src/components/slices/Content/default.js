import { PrismicRichText } from "@/components/PrismicRichText";
import Grow from "@/components/animations/Grow";
import Reveal from "@/components/animations/Reveal";
import { ContentGap } from "@/utils/formatter";
import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

const DefaultContent = ({
  title,
  titleColor,
  description,
  descriptionColor,
  image,
  imageLink,
  halo,
  backgroundColor,
  ctaLink,
  ctaLabel,
  gap
}) => {
  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className={clsx("main-container flex flex-col md:flex-row", ContentGap(gap))}>
        <div className="md:w-1/2 lg:w-2/5 flex flex-col justify-center">
          <Reveal>
            <div className="RichText mb-5" style={{ color: `${titleColor}` }}>
              <PrismicRichText field={title} />
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="RichText mb-5" style={{ color: `${descriptionColor}` }}>
              <PrismicRichText field={description} />
            </div>
          </Reveal>
          <Reveal delay={1} css={"py-3 mb-5"}>
            {ctaLabel && ctaLink &&
              <div>
                <PrismicNextLink field={ctaLink} className="px-5 bg-accelerate-cyan text-black text-xl rounded-full font-bold py-3">
                  {ctaLabel}
                </PrismicNextLink>
              </div>
            }
          </Reveal>
        </div>
        <div className="md:w-1/2 lg:w-3/5 relative">
          {halo && <div
            className={`absolute top-1/2 left-1/2 z-0 shadow-haloxl md:shadow-halo2xl`}
          ></div>}
          <Grow css={"mx-auto"} delay={1}>
            {imageLink.url && prismic.isFilled.image(image) && (
              <PrismicNextLink field={imageLink}>
                <PrismicNextImage field={image} height={500} width={500} className="m-auto relative z-20" />
              </PrismicNextLink>
            )}
            {!imageLink.url && prismic.isFilled.image(image) && (
              <PrismicNextImage field={image} height={500} width={500} className="m-auto relative z-20" />
            )}
          </Grow>
        </div>
      </div>
    </section>
  )
}

export default DefaultContent;