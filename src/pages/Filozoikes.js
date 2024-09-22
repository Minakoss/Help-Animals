import React from "react";
import "./Filozoikes.css";
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
            <img src="/images/filozoiki1.jpg" alt="Φιλοζωική Ομάδα 1" />
          </div>
          <div>
            <img src="/images/filozoiki2.jpg" alt="Φιλοζωική Ομάδα 2" />
          </div>
          <div>
            <img src="/images/filozoiki3.jpg" alt="Φιλοζωική Ομάδα 3" />
          </div>
          <div>
            <img src="/images/filozoiki4.jpg" alt="Φιλοζωική Ομάδα 4" />
          </div>
          <div>
            <img src="/images/filozoiki5.jpg" alt="Φιλοζωική Ομάδα 5" />
          </div>
          <div>
            <img src="/images/filozoiki6.jpg" alt="Φιλοζωική Ομάδα 6" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Filozoikes;
