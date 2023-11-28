import { PrismicRichText } from "@/components/PrismicRichText";
import Reveal from "@/components/animations/Reveal";
import { TextAligner } from "@/utils/formatter";

const FullTextContent = ({ title, titleColor, textAlignment, bodyText, bodyTextColor, backgroundColor }) => {
  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="main-container py-24">
        <Reveal width="100%">
          <div className={`RichText mb-5 ${TextAligner(textAlignment)}`} style={{ color: `${titleColor}` }}>
            <PrismicRichText field={title} />
          </div>
        </Reveal>
        <Reveal>
          <div className={`RichText`} style={{ color: `${bodyTextColor}` }}>
            <PrismicRichText field={bodyText} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FullTextContent;