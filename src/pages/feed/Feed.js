import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// styles
import "./Feed.css";

export default function Feed({ allFeed }) {
  const [allFeeds, setAllfeeds] = useState([]);
  const [active, setActive] = useState(true);
  useEffect(() => {
    setAllfeeds(allFeed);
  }, [allFeed]);

  const sortArray = () => {
    const sorted = [...allFeeds].sort((x, y) => {
      return (
        new Date(y.date.split("-").reverse().join("-")).getTime() -
        new Date(x.date.split("-").reverse().join("-")).getTime()
      );
    });
    setAllfeeds(sorted);
    setActive(false);
  };
  console.log(allFeeds);

  return (
    <div className="feed">
      <div className="up-left">
        <div className={`popular ${active && "not-green"}`}>
          <h3>Popular</h3>
        </div>
        <div className={`sorted ${!active && "sorted-green"}`}>
          <h3 onClick={sortArray}>Recents</h3>
        </div>
      </div>

      {allFeeds.map((feed) => (
        <div key={feed.id} className="card">
          <div>
            <NavLink className="link" to="/second-page">
              <p className="feed-title">{feed.title.substring(0, 100)}...</p>
            </NavLink>
            <div className="card-element">
              <p className="votes">
                <img src={"../assets/arrow-alt-down.svg"} alt="" />
                {feed.downvote}{" "}
                <img src={"../assets/arrow-alt-down (1).svg"} alt="" />
                {feed.upvote}{" "}
                <img src={"../assets/comment-alt-dots.svg"} alt="" />
                {feed.reviews}{" "}
                <img
                  className="three-dot"
                  src={"../assets/ellipsis-h.svg"}
                  alt=""
                />
              </p>
              <p className="date">{feed.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
