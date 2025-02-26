import "./Menu.css";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { RiGroupLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import UserPr from "../../assets/img/user-pr.png";

export const Menu = () => {
  const menuItems = [
    {
      icon: <GoHomeFill color="#ffff" size="1.5rem"/>,
      key: "Inicio",
      label: "Inicio",
      url: "/",
    },
    {
      icon: <FaSearch color="#ffff" size="1.5rem"/>,
      key: "Explorar",
      label: "Explorar",
      url: "/",
    },
    {
      icon: <IoNotificationsOutline color="#ffff" size="1.5rem"/>,
      key: "Notificaciones",
      label: "Notificaciones",
      url: "/",
    },
    {
      icon: <MdOutlineEmail color="#ffff" size="1.5rem"/>,
      key: "Mensajes",
      label: "Mensajes",
      url: "/",
    },
    {
      icon: <BiBookmark color="#ffff" size="1.5rem"/>,
      key: "Guardados",
      label: "Guardados",
      url: "/",
    },
    {
      icon: <RiGroupLine color="#ffff" size="1.5rem"/>,
      key: "Comunidades",
      label: "Comunidades",
      url: "/",
    },
    {
      icon: <FaRegUser color="#ffff" size="1.5rem"/>,
      key: "Perfil",
      label: "Perfil",
      url: "/",
    },
  ];

  return (
    <div className="container-menu">
      <div className="menu">
        <div className="logo-menu">
          <a href="#">
           <FaXTwitter color="#ffff" size="2rem"/>
          </a>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li key={item.key} className="menu-item">
              {item.icon}
              <a>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="menu-tweet">
          <a href="#">Postear</a>
        </div>

        <div className="continer-user">
          <img src={UserPr} alt="img-user" />
          <div className="data-user">
            <h3>Nombre usuario</h3>
            <p>@handle</p>
          </div>
          <div className="options">
            <a href="#"><SlOptions color="#ffff" size="1rem"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};
