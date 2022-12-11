import "../styles/Aboutme.css";
const Aboutme = () => {
  return (
    <div className="about_Container">
      <figure>
        <p className="figTitle">About Me</p>
        <img src="images/lady.jpg" alt="About Me" className="figImage" />
        <p className="figcaption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel
          massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget et
          lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla amet
          suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque
          sed d.
        </p>
      </figure>
      <button className="card_Button">Read More</button>
    </div>
  );
};

export default Aboutme;
