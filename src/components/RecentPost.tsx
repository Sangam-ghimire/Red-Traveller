import "../styles/recentposts.css"
interface Details {
  url: string;
  dateString: string | null;
  Title: string;
  price: string | null;
}

const RecentPost = (props:Details) => {
  return (
    <div className="postRecentmain">
      <img src={props.url} alt="icon" />
      <span>
        <p className="dateRecent">{props.dateString}</p>
        <p className="titleRecent">{props.Title}</p>
        <p className="priceRecent">{props.price}</p>
      </span>
    </div>
  );
};

export default RecentPost;
