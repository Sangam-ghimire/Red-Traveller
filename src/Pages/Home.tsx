import React from "react";
import "../styles/Home.css";
import { FcExpand } from "react-icons/fc";
import Post from "../components/Post";
import RecentPost from "../components/RecentPost";
import Aboutme from "../components/Aboutme";
import Categories from "../components/Categories";
import Rectangularbox from "../components/Rectangularbox";
import Popularpost from "../components/Popularpost";
import { TfiFacebook, TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";

const Home = () => {
  const posts = [
    {
      imageurl: "images/yellowbus.png",
      classname: "grid-col-span-2",
      date: "July, 15, 2021 - Tips and Tricks ",
      title:
        "A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
      location: "Penang, Malaysia",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: "/images/minivan.png",
      classname: " ",
      date: "September 17, 2021 - Tips & Tricks",
      title: "Have you read The Beach by Alex?",
      intro: " ",
      location: "Georgia",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: "/images/yatch.png",
      classname: "",
      date: "September 17, 2021 - Tips & Tricks",
      title: "The writer actually live in Philippines",
      intro: "",
      location: "Georgia",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: "images/Wild.jpg",
      classname: "grid-col-span-2",
      date: "September 17, 2021 - Tips & Tricks",
      title: "Finding Love & home in Tbilisi, Georgia",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
      location: "Penang, Malaysia ",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: " ",
      classname: "grid-col-span-2 ",
      date: " ",
      title: " ",
      intro: " ",
      location: "",
      comments: " ",
      subCss: "buy",
      noneImage: "none",
    },
    {
      imageurl: "images/worldinhand.png",
      classname: " ",
      date: "September 17, 2021 - Tips & Tricks",
      title: " Get away from the maddening Crowds",
      intro: " ",
      location: "Georgia",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: "images/castle.png",
      classname: " ",
      date: "September 17, 2021 - Tips & Tricks",
      title: "Matsumoto Castle is considered one of",
      intro: " ",
      location: "Georgia",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: "images/japan.png",
      classname: " ",
      date: "September 17, 2021 - Tips & Tricks",
      title: " Many buildings especially in Japan",
      intro: " ",
      location: "Georgia",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: "images/dear.png",
      classname: " ",
      date: "September 17, 2021 - Tips & Tricks",
      title: " There are roughly 1200 semiwild dear",
      intro: " ",
      location: "Georgia",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: "images/Wild.jpg",
      classname: "grid-col-span-2",
      date: "September 17, 2021 - Tips & Tricks",
      title: "Finding Love & home in Tbilisi, Georgia",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
      location: "Penang, Malaysia ",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: "/images/minivan.png",
      classname: " ",
      date: "September 17, 2021 - Tips & Tricks",
      title: "Have you read The Beach by Alex?",
      intro: " ",
      location: "Georgia",
      comments: "Comment (52)",
      subCss: "none",
    },
    {
      imageurl: "/images/yatch.png",
      classname: "",
      date: "September 17, 2021 - Tips & Tricks",
      title: "The writer actually live in Philippines",
      intro: "",
      location: "Georgia",
      comments: "Comment (52)",
      subCss: "none",
    },
  ];

  const recentposts = [
    {
      url: "images/mini.jpg",
      dateString: "September 17, 2018 - Tips & Tricks",
      Title: "Finding Love & home in Tbilisi, Georgia",
      price: "",
    },
    {
      url: "images/mini.jpg",
      dateString: "September 17, 2018 - Tips & Tricks",
      Title: "Finding Love & home in Tbilisi, Georgia",
      price: "",
    },
    {
      url: "images/mini.jpg",
      dateString: "September 17, 2018 - Tips & Tricks",
      Title: "Finding Love & home in Tbilisi, Georgia",
      price: "",
    },
  ];

  const products = [
    {
      url: "images/minilaptop.png",
      dateString: "",
      Title: "Apple MacBook Air  MJV2ELL/A 13-inch Laptop ",
      price: "$514",
    },
    {
      url: "images/minilaptop.png",
      dateString: "",
      Title: "Iphone Xs case, Iphone X case, SUPCASE ",
      price: "$267",
    },
    {
      url: "images/minilaptop.png",
      dateString: "",
      Title: "Master Sport band for Apple wrist watch",
      price: "$378",
    },
  ];

  return (
    <div className="home_MainContainer">
      <div className="home_BackgroundContainer">
        <p className="counter">
          THE COUNTER: <span>70</span> Countries <span>1036</span> Cities
        </p>
        <p className="slogan">Leave your mark on all over the world </p>
        <button className="navButton">Read More</button>
        <p className="small_Text">Scroll Down to Continue</p>
        <div className="iconFcExpand">
          <FcExpand color="#0336FF" />
        </div>
      </div>
      <div className="home_subContainerContent grid-items">
        <div className="first_Maingrid  ">
          <div className="long_gridFirst">
            <div>
              <Aboutme />
            </div>
            <div>
              <Categories></Categories>
            </div>
            <div>
              <Rectangularbox Text="Popular Post" />
            </div>
            <div>
              <Popularpost />
            </div>
            <div>
              <Rectangularbox Text="Recent Post" />
            </div>

            <div>
              {recentposts.map(
                ({ url, dateString, Title, price }): JSX.Element => {
                  return (
                    <div>
                      <RecentPost
                        url={url}
                        dateString={dateString}
                        Title={Title}
                        price={price}
                      />
                    </div>
                  );
                }
              )}
            </div>
            <div className="gearCard">
              <p className="bold">Gear I Use</p>
              <p className="bold">What's in My Bag??</p>
              <p className="light">
                Unfortunately, there is no “one-size-fits-all” when it comes to
                travel packing lists.
              </p>
              <button className="gearButton">View Details</button>
            </div>
            <div>
              <Rectangularbox Text="Product That I Have"></Rectangularbox>
            </div>
            <div>
              {products.map(
                ({ url, dateString, Title, price }): JSX.Element => {
                  return (
                    <div>
                      <RecentPost
                        url={url}
                        dateString={dateString}
                        Title={Title}
                        price={price}
                      />
                    </div>
                  );
                }
              )}
            </div>
            <div>
              <Rectangularbox Text="Get In Touch"></Rectangularbox>
            </div>
            <div className="socialMedia">
              <span>
                <div className="socialbutton blue">
                  <TfiFacebook color="white" size="2rem" />
                  <span>
                    <p>65.5K</p>
                    <p>Likes</p>
                  </span>
                </div>
                &nbsp;
                <div className="socialbutton pink">
                  <AiOutlineYoutube color="white" size="2rem" />
                  <span>
                    <p>105 k</p>
                    <p>Followers</p>
                  </span>
                </div>
              </span>
              &nbsp;
              <span>
                <div className="socialbutton navy">
                  <TfiTwitter color="white" size="2rem" />
                  <span>
                    <p>1.5M</p>
                    <p>Subscribers</p>
                  </span>
                </div>
                &nbsp;
                <div className="socialbutton red">
                  <AiOutlineInstagram color="white" size="2rem" />
                  <span>
                    <p>85 k</p>
                    <p>Followers</p>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="second_Maingrid ">
          {posts.map(
            ({
              imageurl,
              classname,
              date,
              title,
              intro,
              location,
              comments,
              subCss,
              noneImage,
            }): JSX.Element => {
              return (
                <div className={classname}>
                  <Post
                    url={imageurl}
                    date={date}
                    title={title}
                    intro={intro}
                    location={location}
                    comments={comments}
                    subCss={subCss}
                    noneImage={noneImage}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
