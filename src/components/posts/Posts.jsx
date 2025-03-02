import { useState } from "react";
import { Nav } from "../nav/Nav";
import "./Posts.css";
import { AddPost } from "../add post/AddPost";

export const Posts = () => {
  const [navItem, setNavItem] = useState([
    { name_tag: "Para ti", active: true },
    { name_tag: "Siguiendo", active: false },
  ]);

  return (
    <div className="posts">
      <Nav navItem={navItem} setNavItem={setNavItem}/>
      <AddPost/>
      <div style={{ height: "1500px" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam
          vero, iste dolorum itaque alias sint asperiores nostrum facilis
          corrupti aperiam animi nulla autem iusto assumenda reiciendis labore.
          Vel, quasi.
        </p>
      </div>
    </div>
  );
};
