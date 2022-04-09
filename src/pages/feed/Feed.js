import { Link } from "react-router-dom";

// styles
import "./Feed.css";

export default function RecipeList({ feeds }) {
  if (feeds.length === 0) {
    return <div className="error">No feed to load...</div>;
  }

  return (
    <div className="recipe-list">
      {feeds.map((feed) => (
        <div key={feed.id} className="card">
          <h3>{feed.title.substring(0, 50)}...</h3>
          <p>{feed.review} </p>
        </div>
      ))}
    </div>
  );
}
