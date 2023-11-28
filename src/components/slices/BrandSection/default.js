import { TextAligner } from "@/utils/formatter";
import { PrismicRichText } from "@/components/PrismicRichText";
import LogoCarousel from "./components/LogoCarousel";
import Reveal from "@/components/animations/Reveal";

const DefaultBrandSection = ({ title, titleColor, textAlignment, backgroundColor, logos }) => {
  const first = logos.slice(0, logos.length / 2)
  const second = logos.slice(logos.length / 2, logos.length);
  const sliderLogo = [...first, ...first, ...first];
  const sliderReverse = [...second, ...second, ...second];
  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="main-container py-24 overflow-hidden">
        <Reveal width="100%">
          <div className={`RichText mb-5 ${TextAligner(textAlignment)}`} style={{ color: `${titleColor}` }}>
            <PrismicRichText field={title} />
          </div>
          <LogoCarousel brands={sliderLogo} css="slider-track-reverse" />
          <LogoCarousel brands={sliderReverse} css="slider-track" />
        </Reveal>

      </div>
    </section>
  )
}

export default DefaultBrandSection;