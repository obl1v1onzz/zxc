import { Card } from "../Main/Card";
import "./SearchResult.css";
import { Link } from "react-router-dom";
export let SearchResult = (props) => {
  if (props.data) {
    return (
      <div className="wrapper">
        {props.data.films.map((el) => {
          return (
            <Link className="links" to={`/film/${el.filmId}`}>
              <Card cardInfo={el}></Card>
            </Link>
          );
        })}
      </div>
    );
  }
  return <div>'loading'</div>;
};
