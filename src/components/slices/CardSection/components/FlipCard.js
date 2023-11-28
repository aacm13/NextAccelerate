import styles from './FlipCard.module.css';
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";

const FlipCard = ({ value, img, desc }) => {
  return (
    <div className={`${styles.flipCard} mb-5`}>
      <div className={styles.flipCardInner}>
        <div className={`${styles.flipCardFront} bg-black rounded-2xl p-5 flex flex-col justify-center`}>
          {prismic.isFilled.image(img) && (
            <PrismicNextImage field={img} height={150} width={150} className="mx-auto" />
          )}
          <h3 className="font-bold text-accelerate-magenta mt-5">{value}</h3>
        </div>
        <div className={`${styles.flipCardBack} bg-accelerate-magenta text-white rounded-2xl p-5 flex flex-col justify-center`}>
          <div className="RichText">
            <PrismicRichText field={desc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
