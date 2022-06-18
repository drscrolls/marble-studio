import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const ArrowRightIconButton = ({ onPress }) => {

  return (
    <div className="button">
      <FontAwesomeIcon icon={faArrowRight} style={{color: '#ffffff', fontSize: 14}} />
    </div>
  )


}

export default ArrowRightIconButton;
