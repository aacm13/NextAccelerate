import DefaultQuestionsAnswers from "@/components/slices/FrequentlyAskedQuestions/default";

/**
 * @typedef {import("@prismicio/client").Content.FrequentlyAskedQuestionsSlice} FrequentlyAskedQuestionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FrequentlyAskedQuestionsSlice>} FrequentlyAskedQuestionsProps
 * @param {FrequentlyAskedQuestionsProps}
 */
const FrequentlyAskedQuestions = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DefaultQuestionsAnswers
        title={slice.primary.title}
        titleColor={slice.primary.titleColor}
        textAlignment={slice.primary.textAlignment}
        backgroundColor={slice.primary.backgroundColor}
        items={slice.items}
      />
    </section>
  );
};

export default FrequentlyAskedQuestions;
