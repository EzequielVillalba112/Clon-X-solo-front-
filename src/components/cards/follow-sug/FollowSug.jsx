import "./FollowSug.css";
import user from "../../../assets/img/user-pr.png";

export const FollowSug = () => {
  const followSug = [
    {
      img: user,
      name: "Trending 1",
      handle: "@user1",
    },
    {
      img: user,
      name: "Trending 2",
      handle: "@user2",
    },
    {
      img: user,
      name: "Trending 3",
      handle: "@user3",
    },
  ];

  return (
    <div className="card-container">
      <h2>A quién seguir</h2>

      <ul className="list-cards">
        {followSug.map((sug) => (
          <li className="list-item_cards" key={sug.name}>
            <div className="data-sug_list">
              <img src={sug.img} alt="user-img" />
              <div className="name-user">
                <p>{sug.name}</p>
                <span>{sug.handle}</span>
              </div>
              <button className="btn-follow">Seguir</button>
            </div>
          </li>
        ))}
      </ul>

      <a href="#" className="see-more">
        Mostrar más
      </a>
    </div>
  );
};
