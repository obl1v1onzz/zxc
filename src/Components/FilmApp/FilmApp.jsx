import axios from "axios";
import { axios_cfg } from "./../../axiosCfg/axios_cfg";
import { useEffect } from "react";
import { useState } from "react";
import { Film } from "./Film";
import "./FilmApp.css";

export let FilmApp = (props) => {
  let filmId = props.location.pathname.slice(6);
  let [filmData, setFilmData] = useState(undefined);
  let FetchFilm = () => {
    return axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`,
      axios_cfg
    );
  };

  useEffect(() => {
    FetchFilm().then((response) => {
      setFilmData(response);
    });
  }, []);

  return (
    <div className="wrapperMain">
      {filmData ? <Film data={filmData.data}></Film> : undefined}
    </div>
  );
};
