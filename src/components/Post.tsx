import { IoLocationOutline } from "react-icons/io5";
import { FaComments } from "react-icons/fa";

import "../styles/Post.css";

interface PostDetails {
  url: string;
  date: string;
  title: string;
  intro: string | null;
  location: string;
  comments: string;
  subCss?: string | null;
  noneImage?: string;
}

const Post = (props: PostDetails) => {
  return (
    <div>
      <div className={`${props.subCss}`}>
        <p>
          Want <span>Me to Purchase</span> Something For You That isn’t
          available in your Country?
        </p>
        <button className="card_Button">Place Order</button>
      </div>
      <div className={`bg-white ${props.noneImage}`}>
        <figure>
          <img
            src={props.url}
            alt="bus"
            className={`image ${props.noneImage}`}
          />

          <div className="padding ">
            <text className="dates">{props.date}</text>

            <span>
              <p className="post_Title">{props.title}</p>
            </span>
            <span>
              <p className="post_Intro">{props.intro}</p>
            </span>
            <span className="space-between">
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
  );
};

export default Post;
