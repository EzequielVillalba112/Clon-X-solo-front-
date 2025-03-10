import "./Post.css";
import { DataPost } from "../data post/DataPost";

export const Post = () => {
  return (
    <div className="container-post">
      <DataPost img={true}/>
    </div>
  );
};
