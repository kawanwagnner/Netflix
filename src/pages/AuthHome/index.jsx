import React, { useState, useEffect } from "react";
import Tmdb from "../../API/Tmdb";
import MovieRow from "../../components/MovieRow/index";
import FeaturedMovie from "../../components/FeaturedMovie/index";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";

import "./index.css";

const AuthHome = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a Lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured
      let topseries = list.filter((i) => i.slug === "topseries");
      let randomChosen = Math.floor(
        Math.random() * (topseries[0].items.results.length - 1)
      );
      let chosen = topseries[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  const [black, setBlack] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlack(true); // Corrigido de setblack para setBlack
      } else {
        setBlack(false); // Corrigido de setblack para setBlack
      }
    };
    //quando houver qualquer evento de scroll, vai rodar essa função
    window.addEventListener("scroll", scrollListener);
    //remove esse monitoramento quando sairmos da pagina
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="home">
      <Header black={black} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />

      {movieList <= 0 && (
        <div className="loading">
          <img src="/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      )}
    </div>
  );
};

export default AuthHome;
