import { PrismicRichText } from "@/components/PrismicRichText";
import Grow from "@/components/animations/Grow";
import Reveal from "@/components/animations/Reveal";
import { ContentGap } from "@/utils/formatter";
import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

const DefaultTeamSection = ({ title, backgroundColor, gap, items }) => {
  const cardCss =
    "flex flex-col md:w-[350px] mb-10 lg:mb-0 lg:mr-20 bg-gradient-to-br from-accelerate-magenta  to-accelerate-magentaLight  px-10 py-20 rounded-xl hover:bg-gradient-to-tl";

  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      <div className={clsx("main-container flex flex-col items-center", ContentGap(gap))}>
        <Reveal css={"mx-auto"}>
          <div className="RichText">
            <PrismicRichText field={title} />
          </div>
        </Reveal>
        <div className="flex flex-col mt-10 lg:flex-row">
          {items.map((team, index) => {
            if (team.link.url) {
              return (
                <Grow key={index}>
                  <PrismicNextLink field={team.link} >
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