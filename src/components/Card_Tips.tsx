import "../styles/Card_Tips.css";
import { HiLocationMarker } from "react-icons/hi";
import { FaComments } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import Logo from "../assets/icons/Tips_2Card.png";
interface cardTips {
  url: string;
  Title: string;
}

const Card_Tips = (props: cardTips) => {
  return (
    <div>
      <div className="card_Tips">
        <figure>
          <img src={props.url} alt="Logo" />
          <figcaption style={{ padding: "1rem" }}>
            January 15, 2019 - Travel Tips
          </figcaption>
        </figure>
        <div className="text_cardTips">{props.Title}</div>
        <div className="flex gap_1">
          <span className="flex">
            <HiLocationMarker size="2.5rem" />
            North Pole
          </span>
          <span className="flex">
            <FaComments size="2.5rem" />
            12 Comment
          </span>
          <span className="flex">
            <AiFillStar size="2.5rem" />
            4.8 of 5
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card_Tips;
