import { PrismicRichText } from "@/components/PrismicRichText";
import Grow from "@/components/animations/Grow";
import Reveal from "@/components/animations/Reveal";
import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const DefaultTeamSection = ({ title, backgroundColor, items }) => {
  const cardCss =
    "flex flex-col md:w-[350px] mb-10 md:mb-0 md:mr-20 bg-gradient-to-br from-accelerate-magenta  to-accelerate-magentaLight  px-10 py-20 rounded-xl hover:bg-gradient-to-tl";

  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className="py-32 main-container flex flex-col items-center">
        <Reveal css={"mx-auto"}>
          <div className="RichText">
            <PrismicRichText field={title} />
          </div>
        </Reveal>
        <div className="flex flex-col mt-10 md:flex-row">
          {items.map((team, index) => {
            if (team.link.url) {
              return (
                <Grow>
                  <PrismicNextLink field={team.link} key={index}>
                    <div className={cardCss}>
                      <div>
                        {prismic.isFilled.image(team.image) && (
                          <PrismicNextImage field={team.image} height={150} width={150} className="mx-auto rounded-full border-4" />
                        )}
                      </div>
                      <div className="mt-5">
                        <h3 className="text-center text-xl font-semibold text-white">
                          {team.name}
                        </h3>
                        <h4 className="text-center text-xl text-white">{team.position}</h4>
                      </div>
                    </div>
                  </PrismicNextLink>
                </Grow>
              )
            }

            return (
              <div className={cardCss} key={index}>
                <div className="">
                  {prismic.isFilled.image(team.image) && (
                    <PrismicNextImage field={team.image} height={150} width={150} className="mx-auto rounded-full border-4" />
                  )}
                </div>
                <div className="mt-5">
                  <h3 className="text-center text-xl font-semibold text-white">
                    {team.name}
                  </h3>
                  <h4 className="text-center text-xl text-white">{team.position}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DefaultTeamSection;