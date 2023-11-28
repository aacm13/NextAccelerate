import QuestionAnswerItem from "./components/QuestionAnswerItem";
import { PrismicRichText } from "@/components/PrismicRichText";
import Reveal from "@/components/animations/Reveal";
import { TextAligner } from "@/utils/formatter";

const DefaultQuestionsAnswers = ({ title, titleColor, textAlignment, backgroundColor, items }) => {
  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="main-container py-10">
        <Reveal>
          <div className={`RichText ${TextAligner(textAlignment)}`} style={{ color: `${titleColor}` }}>
            <PrismicRichText field={title} />
          </div>
        </Reveal>
        <Reveal css="mx-auto" width="100%">
          {items.map((item, index) => (
            <QuestionAnswerItem
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default DefaultQuestionsAnswers;