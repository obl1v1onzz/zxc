import { Loader } from "../Loader/Loader";
import "./Film.css";
export let Film = (props) => {
  if (props.data) {
    return (
      <div className="wrapperFilm">
        <div className="filmMain">
          <div className="nameRu">{props.data.nameRu}</div>
          <div className="poster">
            <img width="300" src={props.data.posterUrl} alt="" />
          </div>
          <div className="year">
            <b>Год:</b> {props.data.year}
          </div>
          <div className="length">
            <b> Длительность фильма: </b> {props.data.filmLength} минут
          </div>
        </div>
        <div className="desc">
          <div className="description">
            <span className="s">
              <b>Описание</b>
            </span>{" "}
            <br />
            {props.data.description}
          </div>
          <div className="ratings">
            Кинопоиск Рейтинг: {props.data.ratingKinopoisk} <br />
            Imdb Рейтинг: {props.data.ratingImdb}
          </div>
        </div>
      </div>
    );
  }
  return <Loader></Loader>;
};
