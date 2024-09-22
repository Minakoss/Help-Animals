import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles
import "./Filozoikes.css"; // custom styles

const Filozoikes = () => {
  return (
    <section className="carousel-container">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={33.33} // Displays 3 items at a time
      >
        <div>
          <img src="/filozoikes/filoz1.jpg" alt="" />
        </div>
        <div>
          <img src="/filozoikes/filoz1.jpg" alt="" />
        </div>
        <div>
          <img src="/filozoikes/filoz1.jpg" alt="" />
        </div>
        <div>
          <img src="/filozoikes/filoz1.jpg" alt="" />
        </div>
        <div>
          <img src="/filozoikes/filoz1.jpg" alt="" />
        </div>
        <div>
          <img src="/filozoikes/filoz1.jpg" alt="" />
        </div>
      </Carousel>
    </section>
  );
};

export default Filozoikes;
