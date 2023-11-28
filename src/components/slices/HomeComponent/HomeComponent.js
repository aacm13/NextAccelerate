'use client'
import { PrismicRichText } from "@/components/PrismicRichText";
import Reveal from "@/components/animations/Reveal";
import { PrismicNextLink } from "@prismicio/next";
import { useEffect } from 'react';

const DefaultHomeComponent = ({
  eyebrowText,
  eyebrowTextColor,
  title,
  titleColor,
  description,
  descriptionColor,
  ctaLabel,
  ctaLink,
  videoUrl,
  backgroundColor,
}) => {
  useEffect(() => {
    const vid = document.getElementById("videoAnim");
    setTimeout(() => {
      vid.play();
    }, 3500);
  });
  const dot = "block w-3 h-3 rounded-full mr-3";
  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="main-container mb-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[35%]">
            <Reveal delay={3}>
              <div className="RichText" style={{ color: `${eyebrowTextColor}` }}>
                <PrismicRichText field={eyebrowText} />
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="RichText mb-5" style={{ color: `${titleColor}` }}>
                <PrismicRichText field={title} />
              </div>
            </Reveal>
            <div id="welcome_subtext">
              <Reveal delay={3}>
                <div className="flex flex-row mt-5">
                  <span className={`${dot} bg-white`}></span>
                  <span className={`${dot} bg-[#C593C2]`}></span>
                  <span className={`${dot} bg-[#C593C2]`}></span>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div className="RichText mb-5" style={{ color: `${descriptionColor}` }}>
                  <PrismicRichText field={description} />
                </div>
              </Reveal>
              <Reveal delay={3} css={"py-3"}>
                {ctaLabel && ctaLink &&
                  <div>
                    <PrismicNextLink field={ctaLink} className="px-5 bg-accelerate-cyan text-black text-xl rounded-full font-bold py-3">
                      {ctaLabel}
                    </PrismicNextLink>
                  </div>
                }
              </Reveal>
            </div>
          </div>
          <div
            id="ballContainer"
            className="mt-10 md:mt-0 w-full md:w-[65%] overflow-hidden relative"
          >
            <Reveal width="100%" delay={3}>
              <video id="videoAnim" src={videoUrl} className="w-full" muted playsInline>
              </video>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultHomeComponent;