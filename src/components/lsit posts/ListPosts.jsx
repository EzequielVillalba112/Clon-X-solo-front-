import { Post } from "../post/Post";
import "./ListPosts.css";

export const ListPosts = () => {
  return (
    <div className="list-posts">
      {[1, 2, 3].map((post, index) => (
        <Post key={index} />
      ))}
    </div>
  );
};
