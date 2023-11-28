import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const LogoCarousel = ({ brands, css }) => {
  return (
    <div className={`slider relative h-[180px] mx-auto w-[90%] grid place-items-center`}>
      <div className={`${css} absolute flex w-[calc(250px*16)]`}>
        {brands.map((item, index) => {
          return (
            <div
              className={`slide h-[200px] w-[250px] flex items-center px-[10px] py-[5px]`}
              key={index}
            >
              {prismic.isFilled.image(item.logo) && (
                <PrismicNextImage field={item.logo} height={250} width={250} className="mx-auto" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoCarousel;