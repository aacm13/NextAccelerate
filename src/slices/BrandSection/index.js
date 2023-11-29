import DefaultBrandSection from "@/components/slices/BrandSection/default";
/**
 * @typedef {import("@prismicio/client").Content.BrandSectionSlice} BrandSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BrandSectionSlice>} BrandSectionProps
 * @param {BrandSectionProps}
 */
const BrandSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DefaultBrandSection
        title={slice.primary.title}
        titleColor={slice.primary.titleColor}
        textAligment={slice.primary.textAlignment}
        backgroundColor={slice.primary.backgroundColor}
        logos={slice.items}
        gap={slice.primary.gap}
      />
    </section>
  );
};

export default BrandSection;
