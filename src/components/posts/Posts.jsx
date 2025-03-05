import { useState } from "react";
import { Nav } from "../nav/Nav";
import "./Posts.css";
import { AddPost } from "../add post/AddPost";
import { ListPosts } from "../lsit posts/ListPosts";

export const Posts = () => {
  const [navItem, setNavItem] = useState([
    { name_tag: "Para ti", active: true },
    { name_tag: "Siguiendo", active: false },
  ]);

  return (
    <div className="posts">
      <Nav navItem={navItem} setNavItem={setNavItem}/>
      <AddPost/>
      <ListPosts/>
    </div>
  );
};
