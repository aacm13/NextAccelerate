"use client"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navigation = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const showSideBar = () => setShow(!show);
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar?.classList.contains("active")) {
      document.getElementsByTagName("main")[0].addEventListener("click", () => {
        setShow(false);
      });
    }
  });

  const link = "py-5 border-t-2 border-black";
  return (
    <div>
      <div className="bg-accelerate-blue fixed top-1/2 rounded-r-full z-20">
        <button
          id="sidebar-button"
          aria-label="Sidebar button"
          onClick={() => showSideBar()}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-4xl py-3 pr-5"
          />
        </button>
      </div>
      <nav
        id="sidebar"
        className={show ? "nav-menu active " : "nav-menu hidden"}
      >
        <PrismicNextLink field={navigation.data.homeLink}
          onClick={() => showSideBar()}
        >
          {prismic.isFilled.image(navigation.data.logo) && (
            <PrismicNextImage field={navigation.data.logo} height={88} width={160} />
          )}
        </PrismicNextLink>
        <ul className="text-left mt-5">
          {navigation.data?.links.map((item) => {
            return (
              <li className={link} key={prismic.asText(item.label)}>
                <PrismicNextLink field={item.link} onClick={() => showSideBar()}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row justify-between text-xl mt-auto">
          {navigation.data.socialMedia.map((item, index) => {
            let icon;
            switch (item.icon) {
              case 'Twitter':
                icon = faTwitter;
                break;
              case 'Facebook':
                icon = faFacebook;
                break;
              case 'Instagram':
                icon = faInstagram;
                break;
              case 'Linkedin':
                icon = faLinkedin;
                break;
              default:
                icon = faInstagram;
            }
            return (<PrismicNextLink className="hover:text-accelerate-magenta" key={`${item}-${index}`} field={item.socialMediaLink
            } onClick={() => showSideBar()}>
              <FontAwesomeIcon icon={icon} />
            </PrismicNextLink>)
          })}
        </div>
      </nav>
    </div>
  )
}

export default Navigation;