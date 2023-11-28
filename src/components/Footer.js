import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Bounded } from "./Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export function Footer({ footer, navigation }) {
  return (
    <Bounded as="footer" className="bg-white pb-12 text-blacks md:pb-12">
      <ul className="flex flex-col md:flex-row border-b-2 pb-3 justify-between items-center">
        <li>
          <div>
            <PrismicNextLink field={navigation.data.homeLink}
            >
              {prismic.isFilled.image(footer.data.logo) && (
                <PrismicNextImage field={footer.data.logo} height={123} width={224} />
              )}
            </PrismicNextLink>
            <div className="flex flex-row mt-5">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-accelerate-cyan text-2xl mr-2"
              />
              <p className="text-sm lg:w-60">
                {footer.data.location}
              </p>
            </div>
          </div>
        </li>
        <li>
          <ul className="my-5 md:my-0">
            {navigation.data?.links.map((item) => {
              return (
                <li className="flex my-3" key={prismic.asText(item.label)}>
                  <svg
                    width="53.2"
                    height="16.01"
                    viewBox="0 0 53.2 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.6133 22.5406C39.6311 14.2628 52.7877 11.2703 75.0849 11.2703C52.7877 11.2703 39.6419 8.27781 25.6133 0C38.4468 7.57812 37.0149 10.7213 19.5949 11.2057C12.812 10.7321 10.2927 7.57812 10.2927 0C10.2927 7.57812 7.77334 10.7321 0.990509 11.2057C0.656751 11.2057 0.344525 11.1842 0.0215328 11.1734C0.0215328 11.238 0.0107664 11.3026 0 11.3672C0.322992 11.3564 0.645984 11.3457 0.979743 11.3349C7.76258 11.8085 10.2819 14.9625 10.2819 22.5406C10.2819 14.9625 12.8013 11.8085 19.5841 11.3349C37.0149 11.8193 38.4361 14.9625 25.6025 22.5406H25.6133Z"
                      fill="#733DF2"
                    />
                  </svg>
                  <PrismicNextLink field={item.link} className="ml-2 font-bold leading-5">
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="lg:w-80">

        </li>
        <li>
          <div className="flex md:flex-col md:items-end">
            <Link
              href="https://twitter.com/acceleratesv_io"
              aria-label="See Accelerates twitter account"
              className="text-white text-4xl p-2 bg-accelerate-cyan rounded-lg w-[55px] mr-2 md:mr-0 md:mb-2"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <PrismicNextLink field={footer.data.ctaLink} className="bg-black p-3 text-white">
              {footer.data.ctaLabel}
            </PrismicNextLink>
          </div>
        </li>
      </ul>
      <div className="mt-5">
        <h2 className="font-bold uppercase text-2xl md:text-4xl mb-3 text-center">
          {footer.data.hashtag}
        </h2>
        <p className="text-center text-md">{footer.data.rights}</p>
      </div>
    </Bounded>
  );
}
