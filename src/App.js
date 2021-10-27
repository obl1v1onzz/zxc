import "./App.css";
import { Card } from "./Components/Main/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "./Components/Loader/Loader";
import { NavLink } from "react-router-dom";
import { axios_cfg } from "./axiosCfg/axios_cfg";
function App() {
  let [cardInfo, setCardInfo] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [pagesCount, setPagesCount] = useState([]);
  let [loading, setLoading] = useState(false);

  let fetchFilms = () => {
    return axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${currentPage}`,
      axios_cfg
    );
  };
  useEffect(() => {
    fetchFilms().then((res) => {
      setCardInfo([...res.data.films]);
      pageCount(res.data.pagesCount);
      setLoading(true);
    });
  }, [currentPage]);
  let pageCount = (pagesCount) => {
    if (pagesCount !== 0) {
      let arr = [];
      for (let index = 1; index <= pagesCount; index++) {
        arr.push(index);
      }
      setPagesCount(arr);
    }
  };
  let onPageBtnClick = (pageN, e) => {
    setLoading(false);
    setCurrentPage(pageN);
  };
  return (
    <div className="wrapper">
      <div className="App"></div>
      <section className="cardsFilm">
        {loading === false ? (
          <Loader />
        ) : (
          cardInfo.map((elem) => {
            return (
              <NavLink className="test" to={`/film/${elem.filmId}`}>
                <Card cardInfo={elem} />
              </NavLink>
            );
          })
        )}
      </section>
      <div className="pages">
        {pagesCount.map((elem, index) => {
          return (
            <span
              onClick={(e) => {
                onPageBtnClick(elem);
              }}
              className={currentPage === elem ? "pagesBtn_active" : "pagesBtn"}
            >
              {elem}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
