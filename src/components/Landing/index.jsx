import React from "react";

import "./index.css";

const Landing = ({ urlImg, urlVideo }) => {
  return (
    <section className="landing--page">
      <div className="container-flex">
        <div className="container-message">
          <h1 className="title-mock">Aproveite na TV</h1>
          <p className="text-mock">
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </p>
        </div>
        <div class="container-video">
          <img alt="Mock" src={urlImg} />
          <video autoPlay playsInline muted loop>
            <source src={urlVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

{
  /* <Landing
  urlImg={
    "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
  }
  urlVideo={
    "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
  }
/>; */
}

export default Landing;
