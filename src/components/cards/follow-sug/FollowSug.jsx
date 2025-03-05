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
      <h3>A quién seguir</h3>

      <ul className="list-cards">
        {followSug.map((sug) => (
          <li className="list-item_cards" key={sug.name}>
            <div className="data-sug_list">
              <div className="data-user_sug">
                <img src={sug.img} className="img-user" alt="user-img" />
                <div className="name-user_sug">
                  <p className="grayed-out_text">{sug.name}</p>
                  <span>{sug.handle}</span>
                </div>
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
