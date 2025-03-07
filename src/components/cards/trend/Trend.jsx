import "../Cards.css";
import { SlOptions } from "react-icons/sl";

export const Trend = () => {
  const trends = [
    {
      title: "Trending 1",
      hashtag: "#trending1",
      posts: "10,1 mil publiciones",
    },
    {
      title: "Trending 2",
      hashtag: "#trending2",
      posts: "10,1 mil publiciones",
    },
    {
      title: "Trending 3",
      hashtag: "#trending3",
      posts: "10,1 mil publiciones",
    },
  ];

  return (
    <div className="card-container">
      <h3>Qué está pasando</h3>
      <ul className="list-cards">
        {trends.map((trend) => (
          <li key={trend.title} className="list-item_cards">
            <div className="data-trend">
              <p className="grayed-out_text">{trend.title}</p>
              <h4>{trend.hashtag}</h4>
              <p className="grayed-out_text">{trend.posts}</p> 
            </div>
            <div className="option">
              <a href="#">
                <SlOptions color="#3e4144" size="1rem" />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <a href="#" className="see-more">Mostrar más</a>
    </div>
  );
};
