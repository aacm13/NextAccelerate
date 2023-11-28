import DefaultHomeComponent from "@/components/slices/HomeComponent/HomeComponent";

/**
 * @typedef {import("@prismicio/client").Content.HomeComponentSlice} HomeComponentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeComponentSlice>} HomeComponentProps
 * @param {HomeComponentProps}
 */
const HomeComponent = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DefaultHomeComponent
        eyebrowText={slice.primary.eyebrowText}
        eyebrowTextColor={slice.primary.eyebrowTextColor}
        title={slice.primary.title}
        titleColor={slice.primary.titleColor}
        description={slice.primary.description}
        descriptionColor={slice.primary.descriptionColor}
        ctaLabel={slice.primary.ctaLabel}
        ctaLink={slice.primary.ctaLink}
        videoUrl={slice.primary.videoUrl}
        backgroundColor={slice.primary.backgroundColor}
      />
    </section>
  );
};

export default HomeComponent;
