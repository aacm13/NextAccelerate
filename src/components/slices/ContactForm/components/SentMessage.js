import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SentMessage = ({ msg, success, error }) => {
  return (
    <div className="w-full md:w-[300px] p-5 flex bg-white shadow-2xl fixed bottom-[10px] md:right-0 z-20 md:mr-2 rounded-lg">
      {success && (
        <>
          <div className="mr-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />
          </div>
          <div>{msg}</div>
        </>
      )}
      {error && (
        <>
          <div className="mr-2">
            <FontAwesomeIcon icon={faCircleXmark} className="text-red-600" />
          </div>
          <div>{msg}</div>
        </>
      )}
    </div>
  );
};

export default SentMessage;
