import { GrNext, GrPrevious } from "react-icons/gr";
import "../styles/Popularpost.css"
const Popularpost = () => {
  return (
    <div>
      <div className="card3">
        <p>September 17,2018 - Tips & Tricks</p>
        <p>Finding Love & home in Tbilisi,Georgia</p>
        <span>
          <GrPrevious size="3rem" />
          <GrNext size="3rem" />
        </span>
      </div>
    </div>
  );
};

export default Popularpost;
