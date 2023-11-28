import { PrismicRichText } from "@/components/PrismicRichText";
import { TextAligner } from "@/utils/formatter";
import FlipCard from "./components/FlipCard";
import PaymentCard from "./components/PaymentCard";
import Grow from "@/components/animations/Grow";
import Reveal from "@/components/animations/Reveal";

const variation = {
  default: 'default',
  payment: 'payment'
}
const DefaultCardSection = ({ title, textAlignment, titleColor, backgroundColor, cards, sliceVariation }) => {
  switch (sliceVariation) {
    case variation.default:
      return (
        <section style={{ backgroundColor: `${backgroundColor}` }}>
          <div className="main-container py-24">
            <Reveal css="mx-auto">
              <div className={`RichText mb-5 ${TextAligner(textAlignment)}`} style={{ color: `${titleColor}` }}>
                <PrismicRichText field={title} />
              </div>
            </Reveal>
            <div className="flex flex-row justify-around mt-10 flex-wrap">
              {cards.map((card, index) => {
                return (
                  <Grow key={index} delay={0.5}>
                    <FlipCard
                      value={card.title}
                      img={card.image}
                      desc={card.description}
                    />
                  </Grow>
                )
              })}
            </div>
          </div>
        </section>
      )
      break;
    case variation.payment:
      return (
        <section style={{ backgroundColor: `${backgroundColor}` }}>
          <div className="main-container py-24">
            <Reveal css="mx-auto">
              <div className={`RichText mb-5 ${TextAligner(textAlignment)}`} style={{ color: `${titleColor}` }}>
                <PrismicRichText field={title} />
              </div>
            </Reveal>
            <div className="flex flex-row justify-around mt-10 flex-wrap">
              {cards.map((card, index) => {
                return (
                  <Grow key={index} delay={0.5}>
                    <PaymentCard
                      title={card.title}
                      img={card.image}
                      desc={card.description}
                      key={index}
                    />
                  </Grow>
                )
              })}
            </div>
          </div>
        </section>
      )
      break;
    default:
      return (
        <span />
      )
  }
}

export default DefaultCardSection;