import React from 'react';
 
const Home = () => {
    return (
       <div>
          <div className="container">
        <div className="slideshow-container">
          <div className="mySlides fade  img1">
            <div className="numbertext">1 / 4</div>
            <h1 className = "slide__text">Welcome Gamer</h1>
          </div>

          <div className="mySlides fade  img2">
            <div className="numbertext">2 / 4</div>
            <h1 className = "slide__text">Welcome Gamer</h1>
          </div>

          <div className="mySlides fade  img3">
            <div className="numbertext">3 / 4</div>
            <div class = "slide__text">Welcome Gamer</div>
          </div>

          <div className="mySlides fade  img4">
            <div className="numbertext">4 / 4</div>
            <div className = "slide__text">Welcome Gamer</div>
          </div>

          {/* <!-- Next and previous buttons --> */}
          <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a className="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br />

        {/* <!-- The dots/circles --> */}
        <div>
          <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
          <span className="dot" onclick="currentSlide(4)"></span>
        </div>
      </div>

      <div className="overview">
        <div className="ps4-gamer">
          <p className="slogan">"GREATNESS AWAITS"</p>
        </div>
        <div className="divider"></div>
        <div className="xbox-gamer">
          <p className="slogan">"JUMP AHEAD"</p>
        </div>
      </div>

      <div className="button-look">
        <a className="button" href="/Products">Get Started</a>
    </div>
       </div>
    );
}
 
export default Home;