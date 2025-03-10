import "./OptionPost.css"
import { FaRegComment } from "react-icons/fa6";
import { CiRepeat } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import { RiShare2Line } from "react-icons/ri";

export const OptionPost = () => {
  return (
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
  )
}
