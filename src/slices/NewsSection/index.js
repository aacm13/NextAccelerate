import DefaultNewsSection from "@/components/slices/NewsSection/default";
/**
 * @typedef {import("@prismicio/client").Content.NewsSectionSlice} NewsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsSectionSlice>} NewsSectionProps
 * @param {NewsSectionProps}
 */
const NewsSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DefaultNewsSection
        title={slice.primary.title}
        titleColor={slice.primary.titleColor}
        description={slice.primary.description}
        descriptionColor={slice.primary.descriptionColor}
        textAlignment={slice.primary.textAlignment}
        backgroundColor={slice.primary.backgroundColor}
        gap={slice.primary.gap}
        news={slice.items}
      />
    </section>
  );
};

export default NewsSection;
