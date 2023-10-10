import PropTypes from 'prop-types';
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
        <div className="container-video">
          <img alt="Mock" src={urlImg} />
          <video autoPlay playsInline muted loop>
            <source src={urlVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  urlImg: PropTypes.string.isRequired,
  urlVideo: PropTypes.string.isRequired,
};

export default Landing;
