import "./Galery.css";
import ImgPr from "../../assets/img/galeria-2.jpg";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export const Galery = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state]);

  return (
    <div className="continer-galery">
      <div
        className="img-container"
        onClick={() => {
          setState(!state);
        }}
      >
        <img src={ImgPr} alt="" />
      </div>
      {state && (
        <div className="view-img">
          <div
            className="close-img"
            onClick={() => {
              setState(!state);
            }}
          >
            <IoMdClose size="1.5rem" />
          </div>
        </div>
      )}
    </div>
  );
};
