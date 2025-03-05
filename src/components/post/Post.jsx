import imgpr from "../../assets/img/user-pr.png";
import "./Post.css";
import { FaRegComment } from "react-icons/fa6";
import { CiRepeat } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import { RiShare2Line } from "react-icons/ri";
import { BsFillPatchCheckFill } from "react-icons/bs";

export const Post = () => {
  return (
    <div className="container-post">
      <div className="img-user_post">
        <img src={imgpr} className="img-user" alt="" />
      </div>
      <div className="content-post">
        <div className="data-user_post">
          <h4>Nombre de usuario</h4>
          <BsFillPatchCheckFill className="check" />
          <p className="grayed-out_text">@nameUse · 11min</p>
        </div>
        <div className="data-post">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, nostrum a ipsa neque placeat ipsum iusto, officiis
          minus inventore amet minima perspiciatis magnam distinctio ratione
          fugiat quam est saepe harum?
        </div>

        <div className="option-post">
          <ul>
            <li className="li-comment">
              <div className="icon default">
                <FaRegComment />
              </div>
              <p className="grayed-out_text default-n">10</p>
            </li>
            <li className="li-repeat">
              <div className="icon repeat">
                <CiRepeat />
              </div>
              <p className="grayed-out_text repeat-n">10</p>
            </li>
            <li className="li-heart">
              <div className="icon heart">
                <FaRegHeart />
              </div>
              <p className="grayed-out_text heart-n">100</p>
            </li>
            <li className="li-stats">
              <div className="icon default">
                <IoIosStats />
              </div>
              <p className="grayed-out_text default-n">10</p>
            </li>
            <div className="option-post-right">
              <li className="li-bookmark">
                <div className="icon default">
                  <BiBookmark />
                </div>
              </li>
              <li className="li-share">
                <div className="icon default">
                  <RiShare2Line />
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
