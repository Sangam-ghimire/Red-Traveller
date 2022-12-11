import "../styles/DestinationCard.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaComments } from "react-icons/fa";

interface CarDDetails {
  url: string;
  date: string;
  title: string;
  location: string;
  comments: string;
}
const DestinationCard = (props: CarDDetails) => {
  return (
    <div>
      <div className="top_box">
        <img src={props.url} alt="image" />
        <div>
          <div className="bg-white below_box">
            <figure>
              <div className="padding itemsCard ">
                <p className="dates Destinationdates itemsCard ">
                  {props.date}
                </p>

                <span>
                  <p className="post_Title DestinationTitle itemsCard ">
                    {props.title}
                  </p>
                </span>

                <span className="space-between itemsCard ">
                  <span>
                    <IoLocationOutline color="yellow" size="2rem" />{" "}
                    <text> {props.location}</text>
                  </span>
                  <span>
                    <FaComments color="yellow" size="2rem" />
                    <text> {props.comments}</text>
                  </span>
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
