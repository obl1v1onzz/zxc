import "./SearchFilm.css";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { axios_cfg } from "../../axiosCfg/axios_cfg";

export let SearchFilm = (props) => {
  let [searchFilmField, setInput] = useState("");
  let history = useHistory();
  let searchFilmFetch = () => {
    return axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchFilmField}&page=1`,
      axios_cfg
    );
  };
  let OnChangeInput = (value) => {
    setInput(value);
  };

  let OnClickSearch = () => {
    props.callback(searchFilmFetch);
  };
  let PressEnter = (e) => {
    if (e.key === "Enter") {
      props.callback(searchFilmFetch);
      history.push(`/search/${searchFilmField}`);
    }
  };
  return (
    <div className="wrap">
      <label>
        <input
          onKeyPress={(e) => {
            PressEnter(e);
          }}
          onChange={(e) => {
            OnChangeInput(e.target.value);
          }}
          value={searchFilmField}
          type="text"
          id="search-bar"
        />
        <span class="search-icon"></span>
        <div
          onClick={() => {
            OnClickSearch();
          }}
          className="tet"
        >
          <Link to={`/search/${searchFilmField}`}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
              alt=""
              width="50"
              height="50"
            />
          </Link>
        </div>
      </label>
    </div>
  );
};
