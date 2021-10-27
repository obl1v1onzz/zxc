import { Title } from "./Title";
import { SearchFilm } from "./SearchFilm";
import "./Header.css";
export let Header = (props) => {
  return (
    <div className="header">
      <Title></Title>
      <SearchFilm callback={props.callback}></SearchFilm>
    </div>
  );
};
