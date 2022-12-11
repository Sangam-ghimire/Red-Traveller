import "../styles/Tips.css";

import Tips_HeroSection from "../components/Tips_HeroSection";
import Card_Tips from "../components/Card_Tips";

const Tips = () => {
  const cards = [
    {
      url: "images/Tips_2Card.png",
      Title: "Road Trip 101 Things you need to know",
    },
    {
      url: "images/Tips_2Card.png",
      Title: "Summer Vibes... Where to spend the energy.  ",
    },
    {
      url: "images/Tips_3Card.png",
      Title: "Smartet cites and how to enjoy them.",
    },
    {
      url: "images/Tips_5Card.png",
      Title: "Going to the wild? What should you pack?",
    },
    {
      url: "images/Tips_5Card.png",
      Title: " Going to the wild? What should you pack?",
    },
    {
      url: "images/Tips_6Card.png",
      Title: " Foods to try when you  Visit Australia.",
    },
    {
      url: "images/Tips_7Card.png",
      Title: "Beaches And how to enjoy them the most.",
    },
    {
      url: "images/Tips_8Card.png",
      Title: " Road Trip 101 Things you need to know",
    },
    {
      url: "images/Tips_9Card.png",
      Title: " Water front precautions to take during travels.",
    },
  ];
  return (
    <div>
      <div className="TipsBackground">
        <p>Travel Tips</p>
      </div>
      <div>
        <Tips_HeroSection />
      </div>
      <div className="main_Tips">
        {cards.map(({ url, Title }) => {
          return <Card_Tips url={url} Title={Title} />;
        })}
      </div>
    </div>
  );
};

export default Tips;
