import DefaultHeading from "@/components/slices/HeadingSection/default";
/**
 * @typedef {import("@prismicio/client").Content.HeaderSectionSlice} HeaderSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSectionSlice>} HeaderSectionProps
 * @param {HeaderSectionProps}
 */
const variations = ["default"];
const HeaderSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DefaultHeading
        eyebrowText={slice.primary.eyebrowText}
        eyebrowTextColor={slice.primary.eyebrowTextColor}
        title={slice.primary.title}
        titleColor={slice.primary.titleColor}
        description={slice.primary.description}
        descriptionColor={slice.primary.descriptionColor}
        textAlignment={slice.primary.textAlignment}
        backgroundColor={slice.primary.backgroundColor}
        backgroundImage={slice.primary.backgroundImage}
        overlay={slice.primary.overlay}
        halo={slice.primary.halo}
        ctaLink={slice.primary.ctaLink}
        ctaLabel={slice.primary.ctaLabel}
      />
    </section>
  );
};

export default HeaderSection;
