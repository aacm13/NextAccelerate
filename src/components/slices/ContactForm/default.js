'use client'
import { PrismicRichText } from "@/components/PrismicRichText";
import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react'
import Reveal from "@/components/animations/Reveal";
import SentMessage from "./components/SentMessage";

const DefaultContactForm = ({
  title,
  titleColor,
  firstNamePlaceholder,
  lastNamePlaceholder,
  emailPlaceholder,
  servicePlaceholder,
  companyPlaceholder,
  discountPlaceholder,
  subscribeToNewsText,
  ourEmail = "contact@accelerate.io",
  acceptTermsText,
  termsAndConditionsLabel,
  termsAndConditionsLink,
  sendText = "SEND",
  formContainerColor,
  backgroundColor,
  socialItems
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [company, setCompany] = useState("");
  const [code, setCode] = useState("");
  const [terms, setTerms] = useState(false);
  const [news, setNews] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const [disabled, setDisabled] = useState(false);

  const fields = [
    {
      name: "firstName",
      placeholder: firstNamePlaceholder,
      type: "text",
      required: true,
      set: setFirstName,
      value: firstName,
    },
    {
      name: "lastName",
      placeholder: lastNamePlaceholder,
      type: "text",
      required: true,
      set: setLastName,
      value: lastName,
    },
    {
      name: "email",
      placeholder: emailPlaceholder,
      type: "text",
      required: true,
      set: setEmail,
      value: email,
    },
    {
      name: "service",
      placeholder: servicePlaceholder,
      type: "text",
      required: true,
      set: setService,
      value: service,
    },
    {
      name: "company",
      placeholder: companyPlaceholder,
      type: "text",
      required: true,
      set: setCompany,
      value: company,
    },
    {
      name: "code",
      placeholder: discountPlaceholder,
      type: "text",
      required: false,
      set: setCode,
      value: code,
    },
  ];

  const validateForm = () => {
    if (firstName.length === 0) {
      setMsg(`${t("contact.firstNameInvalid")}`);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    if (lastName.length === 0) {
      setMsg(`${t("contact.lastNameInvalid")}`);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    if (email.length === 0) {
      setMsg(`${t("contact.emailInvaid")}`);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    if (service.length === 0) {
      setMsg(`${t("contact.serviceInvalid")}`);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    if (company.length === 0) {
      setMsg(`${t("contact.companyInvalid")}`);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    if (!terms) {
      setMsg(`${t("contact.termsInvalid")}`);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_ugrqu8b",
          "template_7jos9jk",
          event.target,
          "UoFlwRlEUWfC2SL4i"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      fields.forEach((item) => item.set(""));
      setNews(false);
      setTerms(false);
      setDisabled(false);
      setMsg(`${t("contact.msgSent")}`);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3500);
      return;
    }
    setMsg(`${t("contact.msgErr")}`);
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3500);
    setDisabled(false);
  };

  return (
    <section style={{ backgroundColor: `${backgroundColor}` }}>
      {(success || error) && msg && (
        <SentMessage error={error} success={success} msg={msg} />
      )}
      <div className="main-container py-10">
        <Reveal width="100%">
          <div className="rounded-xl md:w-2/3 mx-auto px-2 sm:px-10 py-20" style={{ backgroundColor: `${formContainerColor}` }}>
            <div className="RichText mb-5 text-center" style={{ color: `${titleColor}` }}>
              <PrismicRichText field={title} />
            </div>
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-7 mt-10"
            >
              {fields.map((field, index) => (
                <input
                  key={index}
                  value={field.value}
                  type={field.type}
                  className="p-3 bg-white rounded w-full"
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  onChange={(e) => field.set(e.target.value)}
                />
              ))}
              <div className="w-full flex flex-col sm:flex-row">
                <div>
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                    value={`${terms}`}
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                  />
                  <label htmlFor="terms" className="ml-1 text-white leading-5">
                    {acceptTermsText}{" "}
                    {prismic.asLink(termsAndConditionsLink) && <PrismicNextLink field={termsAndConditionsLink} className="text-accelerate-cyan">
                      {termsAndConditionsLabel}
                    </PrismicNextLink>}
                  </label>
                </div>
                <button
                  type="submit"
                  className={`${disabled ? "bg-gray-800" : "bg-black"
                    } text-white px-5 py-3 sm:w-1/2`}
                  disabled={disabled}
                >
                  {sendText}
                </button>
              </div>
              <div className="w-full">
                <input
                  type="checkbox"
                  name="news"
                  id="news"
                  value={`${news}`}
                  checked={news}
                  onChange={(e) => setNews(e.target.checked)}
                />
                <label className="text-white ml-1" htmlFor="news">
                  {subscribeToNewsText}
                </label>
              </div>
              <div className="w-full">
                <span className="text-white font-bold text-xl">
                  {ourEmail}
                </span>
              </div>
              <div className="flex flex-row justify-center sm:justify-end">
                {socialItems.map((item, index) => {
                  let icon;
                  switch (item.socialMedia) {
                    case 'twitter':
                      icon = faTwitter;
                      break;
                    case 'facebook':
                      icon = faFacebook;
                      break;
                    case 'instagram':
                      icon = faInstagram;
                      break;
                    case 'linkedin':
                      icon = faLinkedin;
                      break;
                    default:
                      icon = faInstagram;
                  }
                  if (prismic.asLink(item.socialMediaLink)) {
                    return (
                      <PrismicNextLink key={index} field={item.socialMediaLink} className="text-white mx-3 text-lg hover:text-accelerate-magenta">
                        <FontAwesomeIcon icon={icon} />
                      </PrismicNextLink>
                    )
                  }
                })}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default DefaultContactForm;