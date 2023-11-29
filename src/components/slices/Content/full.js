import { PrismicRichText } from "@/components/PrismicRichText";
import Reveal from "@/components/animations/Reveal";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

const ContentFull = ({
  title,
  titleColor,
  description,
  descriptionColor,
  image,
  backgroundColor,
  ctaLink,
  ctaLabel,
  imageLeft,
  gap
}) => {
  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div
        className={
          clsx(
            "main-container sm:h-[1000px] xl:h-[1000px] xl:h-[700px] flex flex-col",
            imageLeft ? "sm:flex-row-reverse" : "sm:flex-row"
          )}
      >
        <div className="sm:w-1/2 my-auto pt-5 md:p-5">

          <div className="pb-10">
            <Reveal css={"pb-5"}>
              <div className="RichText" style={{ color: `${titleColor}` }}>
                <PrismicRichText field={title} />
              </div>
              <div className="RichText mb-5" style={{ color: `${descriptionColor}` }}>
                <PrismicRichText field={description} />
              </div>
              {ctaLabel && ctaLink &&
                <div>
                  <PrismicNextLink field={ctaLink} className="px-5 bg-accelerate-magenta text-black text-xl rounded-full font-bold py-3">
                    {ctaLabel}
                  </PrismicNextLink>
                </div>
              }
            </Reveal>
          </div>

        </div>
        <div
          className="h-[300px] sm:h-full sm:w-1/2 bg-bottom bg-cover"
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
      </div>
    </section>
  );
};

export default ContentFull;
