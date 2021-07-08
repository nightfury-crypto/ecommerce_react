import React from 'react';
import { BannerData, dealsOfDay, mens, womans, mobiles } from './SliderData';
import '../ComponentsCss/HomePage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    dotsClass: 'dots',
    pauseOnHover: true,
  };
  const instaCheck = {
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 316,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };


  return (
    <div className="home">
      {/* main Slider */}
      <div className="container">
        <Slider {...settings} >
          {BannerData.map((slide) => {
            return <div className="imageSlide" key="{slide}"><img src={slide.banner} alt={slide.alt}  className="slidingimg" /></div>
          })}

        </Slider>
      </div>
      {/* deals of the day */}
      <div className="container">
        <div className="card">
          <div className="card_top">
            <h3>Deals of the Day</h3>
            <div id="clockdiv">🕗 01:23:12 left</div>
            <Link to="/view">
            <Button variant="contained" color="secondary" style={{ fontSize: 12 }}>View all</Button></Link>
          </div>
          <hr />
          <div className="cardSlider">
            <Slider {...instaCheck}>
              {dealsOfDay.map((deal) => {
                return <div className="card_content" key="{deal}"><img src={deal.img} alt="" />
                  <h4>{deal.title}</h4>
                  <span>Upto {deal.discount}% off.</span>
                  <p>{deal.brand}</p>
                </div>
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* ends here deals of the day */}

      {/* mens */}
      <div className="container">
        <div className="card">
          <div className="card_top">
            <h3>Mens</h3>
            <Link to="/view">
            <Button variant="contained" color="secondary" style={{ fontSize: 12 }}>View all</Button></Link>
          </div>
          <hr />
          <div className="cardSlider">
          <Slider {...instaCheck}>
              {mens.map((men) => {
                return <div className="card_content" key="{men}" ><img src={men.img} alt={mens.alt} />
                  <h4>{men.title}</h4>
                  <span>Upto {men.discount}% off.</span>  
                  <p>{men.brand}</p>
                </div>
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* mens ends here */}

      {/* womans */}
      <div className="container">
        <div className="card">
          <div className="card_top">
            <h3>Womans</h3>
            <Link to="/view">
            <Button variant="contained" color="secondary" style={{ fontSize: 12 }}>View all</Button></Link>
          </div>
          <hr />
          <div className="cardSlider">
          <Slider {...instaCheck}>
              {womans.map((women) => {
                return <div className="card_content" key="{women}"><img src={women.img} alt="" />
                  <h4>{women.title}</h4>
                  <span>Upto {women.discount}% off.</span>
                  <p>{women.brand}</p>
                </div>
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* womans ends here */}

              {/* mobile phones */}
      <div className="container">
        <div className="card">
          <div className="card_top">
            <h3>Mobile</h3>
            
            <Link to="/view">
            <Button variant="contained" color="secondary" style={{ fontSize: 12 }}>View all</Button></Link>
          </div>
          <hr />
          <div className="cardSlider">
          <Slider {...instaCheck}>
              {mobiles.map((mobile) => {
                return <div className="card_content" key="{mobile}"><img src={mobile.img} alt="" />
                  <h4>{mobile.title}</h4>
                  <span>Upto {mobile.discount}% off.</span>
                  <p>{mobile.brand}</p>
                </div>
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* mobile phones ends here */}

    </div>
  )
}

export default HomePage;

