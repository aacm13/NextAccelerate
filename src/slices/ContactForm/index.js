import DefaultContactForm from "@/components/slices/ContactForm/default";

/**
 * @typedef {import("@prismicio/client").Content.ContactFormSlice} ContactFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSlice>} ContactFormProps
 * @param {ContactFormProps}
 */
const ContactForm = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <DefaultContactForm
        title={slice.primary.title}
        titleColor={slice.primary.titleColor}
        firstNamePlaceholder={slice.primary.firstNamePlaceholder}
        lastNamePlaceholder={slice.primary.lastNamePlaceholder}
        emailPlaceholder={slice.primary.emailPlaceholder}
        servicePlaceholder={slice.primary.servicePlaceholder}
        companyPlaceholder={slice.primary.companyPlaceholder}
        discountPlaceholder={slice.primary.discountPlaceholder}
        subscribeToNewsText={slice.primary.subscribeToNewsText}
        ourEmail={slice.primary.ourEmail}
        acceptTermsText={slice.primary.acceptTermsText}
        termsAndConditionsLabel={slice.primary.termsAndConditionsLabel}
        termsAndConditionsLink={slice.primary.termsAndConditionsLink}
        sendText={slice.primary.sendText}
        formContainerColor={slice.primary.formContainerColor}
        backgroundColor={slice.primary.backgroundColor}
        socialItems={slice.items}
      />
    </section>
  );
};

export default ContactForm;
