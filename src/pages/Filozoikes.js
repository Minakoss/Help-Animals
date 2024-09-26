import React from "react";
import "./Filozoikes.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Filozoikes = () => {
  return (
    <section className="filozoikes-section">
      <h2>Φιλοζωικές Ομάδες</h2>
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={33.33}
        >
          <div>
            <img src="/filozoikes/filoz1.jpg" alt="Φιλοζωική Ομάδα 1" />
          </div>
          <div>
            <img src="/filozoikes/filoz2.jpg" alt="Φιλοζωική Ομάδα 2" />
          </div>
          <div>
            <img src="/filozoikes/filoz3.jpg" alt="Φιλοζωική Ομάδα 3" />
          </div>
          <div>
            <img src="/filozoikes/filoz4.png" alt="Φιλοζωική Ομάδα 4" />
          </div>
          <div>
            <img src="/filozoikes/filoz5.jpg" alt="Φιλοζωική Ομάδα 5" />
          </div>
          <div>
            <img src="/filozoikes/filoz6.jpg" alt="Φιλοζωική Ομάδα 6" />
          </div>
          <div>
            <img src="/filozoikes/filoz7.jpg" alt="Φιλοζωική Ομάδα 6" />
          </div>
          <div>
            <img src="/filozoikes/filoz8.jpg" alt="Φιλοζωική Ομάδα 6" />
          </div>
          <div>
            <img src="/filozoikes/filoz9.jpg" alt="Φιλοζωική Ομάδα 6" />
          </div>
          <div>
            <img src="/filozoikes/filoz10.jpg" alt="Φιλοζωική Ομάδα 6" />
          </div>
          <div>
            <img src="/filozoikes/filoz11.png" alt="Φιλοζωική Ομάδα 6" />
          </div>
          <div>
            <img src="/filozoikes/filoz12.jpg" alt="Φιλοζωική Ομάδα 6" />
          </div>
        </Carousel>
      </div>
      {/* Κουμπί Λίστας  */}
      <div className="ad-button-container">
        <Link to="/list">
          <button className="ad-post-button">Λίστα Φιλοζωικών</button>
        </Link>
      </div>
      <div className="ad-button-container">
        <Link to="/vets">
          <button className="ad-post-button">Κτηνίατρεια </button>
        </Link>
      </div>
    </section>
  );
};

export default Filozoikes;
