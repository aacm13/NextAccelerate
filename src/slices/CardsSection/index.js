import DefaultCardSection from "@/components/slices/CardSection/default";
/**
 * @typedef {import("@prismicio/client").Content.CardsSectionSlice} CardsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardsSectionSlice>} CardsSectionProps
 * @param {CardsSectionProps}
 */
const CardsSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DefaultCardSection
        title={slice.primary.title}
        textAlignment={slice.primary.textAlignment}
        titleColor={slice.primary.titleColor}
        backgroundColor={slice.primary.backgroundColor}
        cards={slice.items}
        sliceVariation={slice.variation}
      />
    </section>
  );
};

export default CardsSection;
