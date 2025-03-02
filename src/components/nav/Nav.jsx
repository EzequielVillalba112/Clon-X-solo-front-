import "./Nav.css";

export const Nav = ({navItem,setNavItem}) => {
  return (
    <div className="nav-posts">
      
      {
        navItem.map((item, index) => (
          <div className="nav-posts_item" key={index}>
            <button
              className={`btn-nav ${item.active ? "focus" : "disabled"}`}
              onClick={() => setNavItem(navItem.map((i, idx) => {
                if (index === idx) {
                  return { ...i, active: true };
                } else {
                  return { ...i, active: false };
                }
              }))}
            >
              {item.name_tag}
            </button>
            {item.active && <div className="nav-posts_item-active"></div>}
          </div>
        ))
      }
    </div>
  );
};
