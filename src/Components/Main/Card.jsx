import { Link } from "react-router-dom";
import s from "./Card.module.css";

export let Card = (props) => {
  return (
    <div
      onClick={() => {
        <Link to="/tets"></Link>;
      }}
      className={s.card}
    >
      <img
        height="400"
        width="300"
        src={props.cardInfo.posterUrlPreview}
        alt=""
      />
      <div className={s.nameRu}>{props.cardInfo.nameRu}</div>

      <div className="rate">
        Рейтинг: <span>{props.cardInfo.rating}</span>
      </div>
      <div className="year">
        Год: <span>{props.cardInfo.year}</span>
      </div>
    </div>
  );
};
