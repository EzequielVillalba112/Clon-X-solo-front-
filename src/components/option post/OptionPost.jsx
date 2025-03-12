import "./OptionPost.css";
import { FaRegComment } from "react-icons/fa6";
import { CiRepeat } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import { RiShare2Line } from "react-icons/ri";

export const OptionPost = ({ nameClass = "", optGalery = "" }) => {
  return (
    <div
      className={`${
        (nameClass != "" ? nameClass : "option-post") +
        (optGalery != "" ? optGalery : "")
      }`}
    >
      <ul>
        <li className={`${nameClass != "" ? "ct-img_opt" : "li-comment"}`}>
          <div
            className={`${
              nameClass != "" ? "icon-view_img default" : "icon default"
            }`}
          >
            <FaRegComment />
          </div>
          <p
            className={`${nameClass != "" ? "" : "grayed-out_text default-n"}`}
          >
            10
          </p>
        </li>
        <li className={`${nameClass != "" ? "ct-img_opt" : "li-repeat"}`}>
          <div
            className={`${
              nameClass != "" ? "icon-view_img repeat" : "icon repeat"
            }`}
          >
            <CiRepeat />
          </div>
          <p className={`${nameClass != "" ? "" : "grayed-out_text repeat-n"}`}>
            10
          </p>
        </li>
        <li className={`${nameClass != "" ? "ct-img_opt" : "li-heart"}`}>
          <div
            className={`${
              nameClass != "" ? "icon-view_img heart" : "icon heart"
            }`}
          >
            <FaRegHeart />
          </div>
          <p className={`${nameClass != "" ? "" : "grayed-out_text heart-n"}`}>
            10
          </p>
        </li>
        {optGalery == "" && (
          <li className={`${nameClass != "" ? "ct-img_opt" : "li-default"}`}>
            <div
              className={`${
                nameClass != "" ? "icon-view_img default" : "icon default"
              }`}
            >
              <IoIosStats />
            </div>
            <p
              className={`${
                nameClass != "" ? "" : "grayed-out_text default-n"
              }`}
            >
              10
            </p>
          </li>
        )}

        <div
          className={`${
            nameClass != "" ? "option-img_right" : "option-post-right"
          }`}
        >
          <li className={`${nameClass != "" ? "ct-img_opt" : "li-default"}`}>
            <div
              className={`${
                nameClass != "" ? "icon-view_img default" : "icon default"
              }`}
            >
              <BiBookmark />
            </div>
          </li>
          <li className={`${nameClass != "" ? "ct-img_opt" : "li-default"}`}>
            <div
              className={`${
                nameClass != "" ? "icon-view_img default" : "icon default"
              }`}
            >
              <RiShare2Line />
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};
