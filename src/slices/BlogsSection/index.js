import DefaultBlogsSection from "@/components/slices/BlogsSection/default";

/**
 * @typedef {import("@prismicio/client").Content.BlogsSectionSlice} BlogsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogsSectionSlice>} BlogsSectionProps
 * @param {BlogsSectionProps}
 */
const BlogsSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DefaultBlogsSection
        title={slice.primary.title}
        titleColor={slice.primary.titleColor}
        textAlignment={slice.primary.textAlignment}
        language={slice.primary.language}
        backgroundColor={slice.primary.backgroundColor}
        gap={slice.primary.gap}
      />
    </section>
  );
};

export default BlogsSection;
