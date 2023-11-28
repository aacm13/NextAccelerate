import DefaultContent from "@/components/slices/Content/default";
import ContentFull from "@/components/slices/Content/full";
import FullTextContent from "@/components/slices/Content/fullText";
import ContentWithVideo from "@/components/slices/Content/withVideo";
/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param {ContentProps}
 */
const variation = {
  default: 'default',
  contentFull: 'contentFull',
  fullText: 'fullText',
  videoOnTheRight: 'videoOnTheRight',
}
const Content = ({ slice }) => {
  switch (slice.variation) {
    case variation.default:
      return (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <DefaultContent
            title={slice.primary.title}
            titleColor={slice.primary.titleColor}
            description={slice.primary.description}
            descriptionColor={slice.primary.descriptionColor}
            image={slice.primary.image}
            imageLink={slice.primary.imageLink}
            halo={slice.primary.halo}
            backgroundColor={slice.primary.backgroundColor}
            ctaLink={slice.primary.ctaLink}
            ctaLabel={slice.primary.ctaLabel}
          />
        </section>
      );
    case variation.contentFull:
      return (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <ContentFull
            title={slice.primary.title}
            titleColor={slice.primary.titleColor}
            description={slice.primary.description}
            descriptionColor={slice.primary.descriptionColor}
            image={slice.primary.image}
            backgroundColor={slice.primary.backgroundColor}
            ctaLink={slice.primary.ctaLink}
            ctaLabel={slice.primary.ctaLabel}
            imageLeft={slice.primary.imageLeft}
          />
        </section>
      );
    case variation.fullText:
      return (
        <FullTextContent
          title={slice.primary.title}
          titleColor={slice.primary.titleColor}
          textAlignment={slice.primary.textAlignment}
          bodyText={slice.primary.bodyText}
          bodyTextColor={slice.primary.bodyTextColor}
          backgroundColor={slice.primary.backgroundColor}
        />
      )
    case variation.videoOnTheRight:
      return (
        <ContentWithVideo
          title={slice.primary.title}
          titleColor={slice.primary.titleColor}
          description={slice.primary.description}
          descriptionColor={slice.primary.descriptionColor}
          backgroundColor={slice.primary.backgroundColor}
          ctaLink={slice.primary.ctaLink}
          ctaLabel={slice.primary.ctaLabel}
          youtubeVideoId={slice.primary.youtubeVideoId}
          youtubeVideoTitle={slice.primary.youtubeVideoTitle}
        />
      )
    default:
      return <span />
  }
};

export default Content;
