import { PrismicRichText } from "@/components/PrismicRichText";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const ProfileTeamSection = ({ name, nameColor, position, image, bodyText, backgroundColor }) => {
  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="main-container p-10">
        <div className={`RichText mb-5 text-center`} style={{ color: `${nameColor}` }}>
          <PrismicRichText field={name} />
        </div>
        <h3 className="text-center font-semibold text-2xl">
          {position}
        </h3>
        <div className="flex flex-col mt-10 md:flex-row">
          <div className={`RichText mb-5 md:w-3/4`} >
            <PrismicRichText field={bodyText} />
          </div>
          {prismic.isFilled.image(image) && (
            <div className="px-10">
              <PrismicNextImage field={image} width={600} className="rounded-full border-4" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProfileTeamSection;