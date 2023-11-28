import { PrismicRichText } from "@/components/PrismicRichText";
import Reveal from "@/components/animations/Reveal";
import { TextAligner } from "@/utils/formatter";
import { asImageSrc } from "@prismicio/helpers";
import { PrismicNextLink } from "@prismicio/next";

const DefaultHeading = ({
  eyebrowText,
  eyebrowTextColor = "#000",
  title,
  titleColor = "#000",
  description,
  descriptionColor = "#000",
  textAlignment,
  backgroundColor = "#fff",
  backgroundImage,
  overlay,
  halo,
  ctaLink,
  ctaLabel,
}) => {
  const imgSrc = asImageSrc(backgroundImage);
  const content = (
    <Reveal css={"mx-auto py-14"}>
      <div className={`${TextAligner(textAlignment)} py-32 main-container`}>
        {halo && <div
          className="absolute top-2/4 left-1/2 z-0 shadow-haloxl md:shadow-halo2xl"
        ></div>}
        <div className="RichText" style={{ color: `${eyebrowTextColor}` }}>
          <PrismicRichText field={eyebrowText} />
        </div>
        <div className="RichText" style={{ color: `${titleColor}` }}>
          <PrismicRichText field={title} />
        </div>
        <div className="RichText mb-5" style={{ color: `${descriptionColor}` }}>
          <PrismicRichText field={description} />
        </div>
        {ctaLink && ctaLabel && <PrismicNextLink field={ctaLink} className="px-5 bg-accelerate-cyan text-black text-xl rounded-full font-bold py-3">
          {ctaLabel}
        </PrismicNextLink>}
      </div>
    </Reveal>
  );
  return (
    <>
      {imgSrc && (
        <div style={{ backgroundImage: `url("${imgSrc}")` }}>{content}</div>
      )}
      {!imgSrc && (
        <div style={{ backgroundColor: `${backgroundColor}` }}>{content}</div>
      )}
    </>
  );
};

export default DefaultHeading;
