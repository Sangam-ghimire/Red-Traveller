import "../styles/Join.css";

const Join = () => {
  return (
    <div className="total_subs">
      <div className="joinText">
        <p>
          Join <span>98,641</span> Monthly Readers. Subscribe Today!
        </p>
      </div>
      <div className="subscribe">
        <label>
            <input type="text" placeholder="Email Address" />
        </label>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Join;
