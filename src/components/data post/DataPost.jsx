import { BsFillPatchCheckFill } from "react-icons/bs";
import imgpr from "../../assets/img/user-pr.png";
import { Galery } from "../galery/Galery";
import { OptionPost } from "../option post/OptionPost";

export const DataPost = ({ img = "", optGalery = "" }) => {
  return (
    <div className="container-data_post">
      <div className="img-user_post">
        <img src={imgpr} className="img-user" alt="" />
      </div>
      <div className="content-post">
        <div className={"data-user_post" +`${optGalery !="" ? "data-user_galery" : ""}`}>
          <h4>
            Nombre de usuario <BsFillPatchCheckFill className="check" />
          </h4>
          <p className="grayed-out_text">@nameUse · 11min</p>
        </div>
        <p className="data-post">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, nostrum a ipsa neque placeat ipsum iusto, officiis
          minus inventore amet minima perspiciatis magnam distinctio ratione
          fugiat quam est saepe harum?
        </p>
        {img != "" && <Galery />}
        <OptionPost optGalery={optGalery} />
      </div>
    </div>
  );
};
