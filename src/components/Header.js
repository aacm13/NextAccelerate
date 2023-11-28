import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

const localeLabels = {
  "en-us": "EN",
  "es-es": "ES",
};

export function Header({ locales = [], settings, pageHeader = 'black', navigation }) {
  return (
    <Bounded as="header" yPadding="sm" className={pageHeader === 'white' ? 'bg-white' : ''}>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink field={navigation.data.homeLink}>
          {pageHeader === 'black' && prismic.isFilled.image(settings.data.logo) && (
            <>
              <PrismicNextImage field={settings.data.logo} height={40}
                width={262} className="hidden md:block" />
              <PrismicNextImage field={settings.data.mobileLogo} height={40}
                width={54} className="block md:hidden" />
            </>
          )}
          {pageHeader === 'white' && prismic.isFilled.image(settings.data.logo) && (
            <>
              <PrismicNextImage field={settings.data.invertedLogo} height={40}
                width={262} className="hidden md:block" />
              <PrismicNextImage field={settings.data.invertedMobileLogo} height={40}
                width={54} className="block md:hidden" />
            </>
          )}
        </PrismicNextLink>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {settings.data?.headerlinks.map((item, index) => {
              let icon;
              switch (item.icon) {
                case 'phone':
                  icon = faPhone;
                  break;
                case 'location':
                  icon = faLocationDot;
                  break;
                case 'message':
                  icon = faMessage;
                  break;
                default:
              }
              return (
                <li
                  key={`${prismic.asText(item.label)}-${index}`}
                  className={`font-semibold tracking-tight ${pageHeader === "white" ? "text-accelerate-magenta" : "text-accelerate-cyan"}`}
                >
                  <PrismicNextLink field={item.link}>
                    {icon && <FontAwesomeIcon icon={icon} />}
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              )
            })}
          </ul>
          <div className="flex flex-wrap gap-3">
            <span aria-hidden={true}>🌐</span>
            <ul className="flex flex-wrap gap-3">
              {locales.map((locale) => (
                <li key={locale.lang} className="first:font-bold">
                  <PrismicNextLink
                    href={locale.url}
                    locale={locale.lang}
                    className={`${pageHeader === "white" ? "text-accelerate-magenta" : "text-accelerate-cyan"}`}
                    aria-label={`Change language to ${locale.lang_name}`}
                  >
                    {localeLabels[locale.lang] || locale.lang}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </Bounded>
  );
}
