'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { PrismicRichText } from "@/components/PrismicRichText";

const QuestionAnswerItem = ({
  question,
  answer,
}) => {
  const [showItem, setShowItem] = useState(false);

  return (
    <div
      className={`${showItem
        ? `bg-accelerate-blue/[0.56]`
        : `bg-accelerate-magenta/[0.49]`
        } p-5 rounded-[40px] flex flex-row mb-5 transition-all`}
      onClick={() => setShowItem(!showItem)}
    >
      <div className="w-[40px] md:w-[50px]">
        <div
          className={`flex flex-row justify-center items-center rounded-full transition-all w-[30px] h-[30px] md:w-[40px] md:h-[40px] ${!showItem ? "bg-black text-white" : "bg-white text-black"
            }`}
        >
          {!showItem && <FontAwesomeIcon icon={faPlus} />}
          {showItem && <FontAwesomeIcon icon={faMinus} />}
        </div>
      </div>
      <div className="px-5">
        <div className="text-left text-sm sm:text-lg font-bold">{question}</div>
        {showItem && <div className="text-sm sm:text-lg"><PrismicRichText field={answer} /></div>}
      </div>
    </div>
  );
};

export default QuestionAnswerItem;