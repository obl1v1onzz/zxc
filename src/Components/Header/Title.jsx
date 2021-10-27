import style from "./Title.module.css";
import { NavLink } from "react-router-dom";
export let Title = () => {
  return (
    <NavLink className={style.link} to="">
      <div className={style.header_title}>Cinema</div>
    </NavLink>
  );
};
