import React from "react";
import DestinationCard from "../components/DestinationCard";
import DestinationHer from "../components/DestinationHer";
import "../styles/Destination.css";
const Destination = () => {
  const Destinationcards = [
    {
      url: "images/Card_1Destination.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Finding Love & Home In Tbilisi, Georgia",
      location: "Georgia",
      comments: "Comment (25)",
    },
    {
      url: "images/Card_2Destination.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Have you read the Beach by Alex?",
      location: "Georgia",
      comments: "Comment (25)",
    },
    {
      url: "images/Card_3Destination.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "The writer actually live in philippines",
      location: "Georgia",
      comments: "Comment (25)",
    },
    {
      url: "images/Card_4Destination.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Honestly it’s almost ridiculous how",
      location: "Georgia",
      comments: "Comment (25)",
    },
    {
      url: "images/Card_5Destination.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: " The only way to see the islands",
      location: "Georgia",
      comments: "Comment (25)",
    },
    {
      url: "images/Card_6Destination.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: " Get away from the  maddening crowds",
      location: "Georgia",
      comments: "Comment (25)",
    },
    {
      url: "images/Card_7Destination.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Matsumoto castle is considered one of",
      location: "Georgia",
      comments: "Comment (25)",
    },
    {
      url: "images/Card_8Destination.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "Many buildings especially in japan",
      location: "Georgia",
      comments: "Comment (25)",
    },
    {
      url: "images/Card_9Destination.png",
      date: "September 16, 2018 - Tips & Tricks",
      title: "There are roughly 1200  semiwild deer",
      location: "Georgia",
      comments: "Comment (25)",
    },
  ];
  return (
    <div>
      <div className="DestinationBackground">
        <p>Destination</p>
      </div>
      <div className="main_Margin">
        <div className="cardDestination">
          <DestinationHer></DestinationHer>
          {Destinationcards.map(
            ({ url, date, title, location, comments }): JSX.Element => {
              return (
                <div className="cardDestinationwidth">
                  <DestinationCard
                    url={url}
                    date={date}
                    title={title}
                    location={location}
                    comments={comments}
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

export default Destination;
