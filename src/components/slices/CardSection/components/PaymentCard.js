import styles from './PaymentCard.module.css';
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";

const PaymentCard = ({ img, title, desc }) => {
  return (
    <div className={`${styles.flipPay} mb-5 relative`}>
      <div className={`${styles.flipPayInner}`}>
        <div className={`${styles.flipPayFront} bg-accelerate-magenta/[.41] rounded-2xl p-5 flex flex-col justify-center relative z-10`}>
          {prismic.isFilled.image(img) && (
            <PrismicNextImage field={img} height={150} width={150} className="mx-auto" />
          )}
        </div>
        <div className={`${styles.flipPayBack} bg-accelerate-black text-white rounded-2xl p-2 flex flex-col justify-center`}>
          <div className="text-sm text-white display-linebreak">
            <span className="text-accelerate-cyan">{title}</span>
            <div className="">
              <PrismicRichText field={desc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;