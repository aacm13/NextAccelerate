import ProfileTeamSection from "@/components/slices/TeamSection/Profile";
import DefaultTeamSection from "@/components/slices/TeamSection/default";
/**
 * @typedef {import("@prismicio/client").Content.TeamSectionSlice} TeamSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSectionSlice>} TeamSectionProps
 * @param {TeamSectionProps}
 */
const variation = {
  default: 'default',
  profile: 'profile',
}
const TeamSection = ({ slice }) => {
  switch (slice.variation) {
    case variation.default:
      return (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <DefaultTeamSection
            title={slice.primary.title}
            backgroundColor={slice.primary.backgroundColor}
            items={slice.items}
          />
        </section>
      );
    case variation.profile:
      return (
        <ProfileTeamSection
          name={slice.primary.name}
          nameColor={slice.primary.nameColor}
          position={slice.primary.position}
          image={slice.primary.image}
          bodyText={slice.primary.bodyText}
          backgroundColor={slice.primary.backgroundColor}
        />
      )
    default:
  }
};

export default TeamSection;
