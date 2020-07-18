import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const photos = [
  {
    name: "Photo 1",
    url: "img/ps4-img1.jpg"
  },
  {
    name: "Photo 2",
    url: "img/ps4-img2.jpg"
  },
  {
    name: "Photo 3",
    url: "img/xbox-img1.jpg"
  },
  {
    name: "Photo 4",
    url: "img/xbox-img2.jpg"
  }
]


class Home extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      fade: true,
      speed: 5000,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      className: "slide"
    };
    return (
      <div>
        <section className="slideshow-container">
        <Slider {...settings}>
          {photos.map((photos) => {
            return(
              <div className = "mySlides">
                <img className="slide-img" src={photos.url} alt={photos.name} />
              </div>
            )
          })}
        </Slider>
        </section>

      <div className="overview">
        <div className="ps4-gamer">
          <img src = "img/ps4-gamer.jpg" alt = "ps4 gamer img"/>
          <p className="slogan">"GREATNESS AWAITS"</p>
        </div>

        <div className="divider" />

        <div className="xbox-gamer">
          <img src = "img/xbox-gamer.jpg" alt = "xbox gamer img"/>
          <p className="slogan">"JUMP AHEAD"</p>
        </div>
      </div>

      <div className="button-look">
        <a className="button" href="/Products">Get Started</a>
    </div>
       </div>
    );
}
}
 
export default Home;