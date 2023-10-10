import React from "react";
import "./index.css";

const FeaturedMovie = ({ item }) => {
  let firstDate = new Date(item.first_air_date);

  let description = item.overview || "";
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--content">
        <div className="featured--name">{item.original_name}</div>
        <div className="featured--info">
          <div className="featured--point">{item.vote_average}</div>
          <div className="featured--year">{firstDate.getFullYear()}</div>
          <div className="featured--seasons">
            {item.number_of_seasons} temporada
            {item.number_of_seasons !== 1 ? "s" : ""}
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a className="watch--button" href={`/watch/${item.id}`}>
              ▶ Assistir
            </a>
            <a className="add--button" href={`/list/add/${item.id}`}>
              + Minha Lista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
