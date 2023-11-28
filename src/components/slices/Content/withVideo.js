import { PrismicRichText } from "@/components/PrismicRichText";
import Reveal from "@/components/animations/Reveal";
import { PrismicNextLink } from "@prismicio/next";
import YouTubeLazyLoad from "./components/YoutubeLazyLoad";

const ContentWithVideo = ({
  title,
  titleColor,
  description,
  descriptionColor,
  backgroundColor,
  ctaLink,
  ctaLabel,
  youtubeVideoId,
  youtubeVideoTitle,
}) => {
  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="py-28 main-container flex flex-col md:flex-row">
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
          <Reveal delay={1} css={"py-3"}>
            {ctaLabel && ctaLink &&
              <div>
                <PrismicNextLink field={ctaLink} className="px-5 bg-accelerate-cyan text-black text-xl rounded-full font-bold py-3">
                  {ctaLabel}
                </PrismicNextLink>
              </div>
            }
          </Reveal>
        </div>
        <div className="md:w-1/2 relative">
          {youtubeVideoId && <YouTubeLazyLoad
            youtubeID={youtubeVideoId}
            title={youtubeVideoTitle}
          />}
        </div>
      </div>
    </section>
  )
}

export default ContentWithVideo;