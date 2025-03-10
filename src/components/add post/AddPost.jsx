import "./AddPost.css";
import userpr from "../../assets/img/user-pr.png";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { useState } from "react";
import { BiWorld } from "react-icons/bi";

export const AddPost = () => {
  const [status, setStatus] = useState(false);
  const [text, setText] = useState("");

  const handleInput = (e) => {
    e.target.style.height = e.target.scrollHeight + "px"; // Ajusta al contenido
  };

  return (
    <div className="container-add_post">
      <img src={userpr} className="img-user" alt="user-img" />
      <div className="comment-post">
        <div className={`container-input_post ${status ? "input-focus" : ""}`}>
          <textarea
            rows="3"
            cols="20"
            type="text"
            onInput={handleInput}
            style={{
              resize: "none",
              overflow: "hidden",
            }}
            placeholder="¡¿Qué está pasando?!"
            onFocus={() => setStatus(!status)}
            onBlur={() => setStatus(!status)}
            onChange={(e) => setText(e.target.value)}
          />

          <div className={`${status ? "answer-post" : "answer-disable"}`}>
            <BiWorld className="icon-world" size="1rem" />
            <p>Cualquier persona puede responder</p>
          </div>
        </div>
        <div className="media-picker">
          <div className="add-element">
            <div className="item-element">
              <AiOutlinePicture className="icon-media" size="18px" />
            </div>
            <div className="item-element">
              <MdOutlineGifBox className="icon-media" size="18px" />
            </div>
            <div className="item-element">
              <BsEmojiSmile className="icon-media" size="18px" />
            </div>
          </div>
          <button className={`btn-postear ${text == "" && "btn-disable"}`}>
            Postear
          </button>
        </div>
      </div>
    </div>
  );
};
