import React, { useState } from "react";
import "./Home.css";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import WorldImg from "../../assets/image-removebg-preview.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import testimonial_1 from "../../assets/image 1.png";
import testimonial_2 from "../../assets/image 2.png";
import testimonial_3 from "../../assets/image 3.png";
import testimonial_4 from "../../assets/image 4.png";
import img1_animation from "../../assets/img1_animation.png";
import img2_animation from "../../assets/img2_animation.png";
import video from "../../assets/bg.webm";

import Slider from "react-slick";
import {
  ArgentinaSvg,
  CanadaSvg,
  DollarSvg,
  GermanySvg,
  HandSvg,
  LithuaniaSvg,
  ThialandSvg,
  ThumsupSvg,
  TrophySvg,
  WorldSvg
} from "../svg";
// import required modules

const animation = { duration: 5000, easing: (t) => t };
const animation2 = { duration: 5000, easing: (t) => t };
const animation3 = { duration: 8000, easing: (t) => t };
function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 5,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    initial: 0,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },

    // breakpoints: {
    //         "(max-width: 470px)": {
    //     slides: { perView: 2 },
    //   },
    //   "(min-width: 471px) and (max-width: 991px)": {
    //     slides: { perView: 3 },
    //   },
    //   "(min-width: 992px)": {
    //     slides: { perView: 4 },
    //   },

    // },
    breakpoints: {
      "(max-width: 470px)": {
        slides: { perView: 2 ,spacing:15 }
      },
      "(min-width: 471px) and (max-width: 991px)": {
        slides: { perView: 3,spacing:25  }
      },
   
      "(min-width: 992px)": {
        slides: { perView: 4 ,spacing:35 }
      },
    }
  });
  const [sliderRef4] = useKeenSlider({
    slides: {
      perView: 4 // Default number of slides visible
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    initial: 0,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 415px)": {
        slides: { perView: 1,spacing:0 } // 2 slides per view for medium screens
      },
      "(min-width: 416px) and (max-width: 539px)": {
        slides: { perView: 1 } // 2 slides per view for medium screens
      },
      "(min-width: 540px) and (max-width: 631px)": {
        slides: { perView: 1.3 } // 2 slides per view for medium screens
      },
      "(min-width: 630px) and (max-width: 991px)": {
        slides: { perView: 2 } // 2 slides per view for medium screens
      },
      "(min-width: 992px) and (max-width: 1050px)": {
        slides: { perView: 3 } // 3 slides per view for larger but not too big screens
      },
      "(min-width: 1051px)": {
        slides: { perView: 4 } // 4 slides per view for larger screens
      }
    }
    // breakpoints: {

    //   "(max-width: 470px)": {
    //     slides: { perView: 1 },
    //   },
    //   "(min-width: 471px) and (max-width: 991px)": {
    //     slides: { perView: 2 },
    //   },
    //   "(min-width: 992px) and (max-width: 1050px)": {
    //     slides: { perView: 3 },
    //   },
    //   "(min-width: 1051px)": {
    //     slides: { perView: 4 },
    //   },
    // },
  });
  const [sliderRef2] = useKeenSlider({
    slides: {
      perView: 7
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation2);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation2);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation2);
    },
    breakpoints: {
      "(max-width: 470px)": {
        slides: { perView: 2 }
      },
      "(min-width: 471px) and (max-width: 991px)": {
        slides: { perView: 3 }
      },
      "(min-width: 992px) and (max-width: 1199px)": {
        slides: { perView: 5 }
      },
      "(min-width: 1200px)": {
        slides: { perView: 7 } // Show 5 slides
      }
    }
  });
  const [sliderRef3] = useKeenSlider({
    slides: {
      perView: 7
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation3);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation3);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation3);
    },
    breakpoints: {
      "(max-width: 470px)": {
        slides: { perView: 2 }
      },
      "(min-width: 471px) and (max-width: 991px)": {
        slides: { perView: 3 }
      },
      "(min-width: 992px) and (max-width: 1199px)": {
        slides: { perView: 5 }
      },
      "(min-width: 1200px)": {
        slides: { perView: 7 } // Show 5 slides
      }
    }
  });
  const testimonialImg = [
    testimonial_1,
    testimonial_2,
    testimonial_3,
    testimonial_4,
    testimonial_1,
    testimonial_2,
    testimonial_3
  ];
  const cardSvg2Img = [img1, img2, img3, img4, img1, img2, img3, img4];
  const countryData = [
    {
      name: "Lithuania",
      svg: <LithuaniaSvg />,
      amount: "$41,106"
    },
    {
      name: "Germany",
      svg: <GermanySvg />,
      amount: "$140,354"
    },
    {
      name: "Canada",
      svg: <CanadaSvg />,
      amount: "$40,000"
    },
    {
      name: "Thailand",
      svg: <ThialandSvg />,
      amount: "$50,197"
    },
    {
      name: "Argentina",
      svg: <ArgentinaSvg />,
      amount: "$38,103"
    }
  ];
  const settings = {
    infinite: true, // Enables infinite looping
    speed: 3000, // Speed of the slide transition
    slidesToScroll: 1, // Number of cards to scroll per transition
    autoplay: true, // Enables autoplay
    autoplaySpeed: 0, // Speed of autoplay (0 for continuous)
    cssEase: "linear", // Smooth, linear transition
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 720, // For tablets
        settings: {
          slidesToShow: 3, // Show 3 cards for screens smaller than 1024px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 550, // For mobile
        settings: {
          slidesToShow: 2, // Show 1 card for screens smaller than 600px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      }
    ]
  };
  const setting2 = {
    speed: 2000,
    arrows: false,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1230, // For tablets
        settings: {
          slidesToShow: 5, // Show 3 cards for screens smaller than 1024px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 4, // Show 3 cards for screens smaller than 1024px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 790, // For tablets
        settings: {
          slidesToShow: 3, // Show 3 cards for screens smaller than 1024px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 700, // For mobile
        settings: {
          slidesToShow: 3, // Show 1 card for screens smaller than 600px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 550, // For mobile
        settings: {
          slidesToShow: 2, // Show 1 card for screens smaller than 600px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      }
    ]
  };
  const setting3 = {
    speed: 1000,
    arrows: false,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1230, // For tablets
        settings: {
          slidesToShow: 5, // Show 3 cards for screens smaller than 1024px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 4, // Show 3 cards for screens smaller than 1024px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 790, // For tablets
        settings: {
          slidesToShow: 3, // Show 3 cards for screens smaller than 1024px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 700, // For mobile
        settings: {
          slidesToShow: 3, // Show 1 card for screens smaller than 600px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 550, // For mobile
        settings: {
          slidesToShow: 2, // Show 1 card for screens smaller than 600px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      }
    ]
  };
  const testimonial = {
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1600, // For tablets
        settings: {
          slidesToShow: 4, // Show 3 cards for screens smaller than 1024px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3, // Show 3 cards for screens smaller than 1024px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },

      {
        breakpoint: 830, // For mobile
        settings: {
          slidesToShow: 2, // Show 1 card for screens smaller than 600px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 620, // For mobile
        settings: {
          slidesToShow: 1, // Show 1 card for screens smaller than 600px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        }
      }
    ]
  };
  const obj = {
    step1: {
      buttons: ["FundingPips"],
      cardData: [
        {
          subTitle: "Evaluation Stage",
          title: "Student",
          feild: [
            {
              title: "Trading Period",
              value: "Unlimited"
            },
            {
              title: "Minimum Trading Days",
              value: "3 days"
            },
            {
              title: "Maximum Daily Loss",
              value: "4%"
            },
            {
              title: "Maximum Loss",
              value: "6%"
            },
            {
              title: "Profit Target",
              value: "$500(10%)"
            },
            {
              title: "Leverage",
              value: "1:50"
            }
          ]
        },
        {
          subTitle: "Evaluation Stage",
          title: "Student",
          feild: [
            {
              title: "Trading Period",
              value: "Unlimited"
            },
            {
              title: "Maximum Daily Loss",
              value: "4%"
            },
            {
              title: "Maximum Loss",
              value: "6%"
            },
            {
              title: "Profit Target",
              value: "-"
            },
            {
              title: "Leverage",
              value: "1:50"
            },
            {
              title: "Rewards & Split",
              value: "Every Tuesday"
            }
          ]
        }
      ]
    },
    step2: {
      buttons: ["FundingPips", "FundigPips X", "FundigPips Pluse"],
      cardData: [
        {
          subTitle: "Evaluation Stage",
          title: "Student",
          feild: [
            {
              title: "Trading Period",
              value: "Unlimited"
            },
            {
              title: "Minimum Trading Days",
              value: "3 days"
            },
            {
              title: "Maximum Daily Loss",
              value: "5%"
            },
            {
              title: "Maximum Loss",
              value: "10%"
            },
            {
              title: "Profit Target",
              value: "$400(8%)"
            },
            {
              title: "Leverage",
              value: "1:100"
            }
          ]
        },
        {
          subTitle: "Evaluation Stage",
          title: "Practitioner",
          feild: [
            {
              title: "Trading Period",
              value: "Unlimited"
            },
            {
              title: "Minimum Trading Days",
              value: "3 days"
            },
            {
              title: "Maximum Daily Loss",
              value: "5%"
            },
            {
              title: "Maximum Loss",
              value: "10%"
            },
            {
              title: "Profit Target",
              value: "$250(5%)"
            },
            {
              title: "Leverage",
              value: "1:100"
            }
          ]
        },
        {
          subTitle: "",
          title: "Master",
          feild: [
            {
              title: "Trading Period",
              value: "Unlimited"
            },
            {
              title: "Maximum Daily Loss",
              value: "5%"
            },
            {
              title: "Maximum Loss",
              value: "10%"
            },
            {
              title: "Profit Target",
              value: "-"
            },
            {
              title: "Leverage",
              value: "1:100"
            },
            {
              title: "Rewards & Split",
              value: "Flexible"
            }
          ]
        }
      ]
    },
    step3: {
      buttons: ["FundingPips"],
      cardData: [
        {
          subTitle: "Evaluation Stage",
          title: "Student",
          feild: [
            {
              title: "Trading Period",
              value: "Unlimited"
            },
            {
              title: "Minimum Trading Days",
              value: "3 days"
            },
            {
              title: "Maximum Daily Loss",
              value: "4%"
            },
            {
              title: "Maximum Loss",
              value: "6%"
            },
            {
              title: "Profit Target",
              value: "$500(5%)"
            },
            {
              title: "Leverage",
              value: "1:50"
            }
          ]
        },
        {
          subTitle: "Evaluation Stage",
          title: "Practitioner",
          feild: [
            {
              title: "Trading Period",
              value: "Unlimited"
            },
            {
              title: "Minimum Trading Days",
              value: "3 days"
            },
            {
              title: "Maximum Daily Loss",
              value: "4%"
            },
            {
              title: "Maximum Loss",
              value: "6%"
            },
            {
              title: "Profit Target",
              value: "$500(5%)"
            },
            {
              title: "Leverage",
              value: "1:50"
            }
          ]
        },
        {
          subTitle: "Evaluation Stage",
          title: "Senior",
          feild: [
            {
              title: "Trading Period",
              value: "Unlimited"
            },
            {
              title: "Minimum Trading Days",
              value: "3 days"
            },
            {
              title: "Maximum Daily Loss",
              value: "4%"
            },
            {
              title: "Maximum Loss",
              value: "6%"
            },
            {
              title: "Profit Target",
              value: "$500(5%)"
            },
            {
              title: "Leverage",
              value: "1:50"
            }
          ]
        },
        {
          subTitle: " ",
          title: "Master",
          feild: [
            {
              title: "Trading Period",
              value: "Unlimited"
            },
            {
              title: "Maximum Daily Loss",
              value: "4%"
            },
            {
              title: "Maximum Loss",
              value: "6%"
            },
            {
              title: "Profit Target",
              value: "-"
            },
            {
              title: "Leverage",
              value: "1:50"
            },
            {
              title: "Rewards & Split",
              value: "Every Tuesday"
            }
          ]
        }
      ]
    }
  };

  const amountButton = {
    step1: [
      {
        title: "$5K",
        onClick: () => {
          setProfit({ ...profit, first: "$500(10%)" });
          setAmount("5K");
        }
      },
      {
        title: "$10K",
        onClick: () => {
          setProfit({ ...profit, first: "$1,000(10%)" });
          setAmount("10K");
        }
      },
      {
        title: "$25K",
        onClick: () => {
          setProfit({ ...profit, first: "$2,500(10%)" });
          setAmount("25K");
        }
      },
      {
        title: "$50K",
        onClick: () => {
          setProfit({ ...profit, first: "$5,000(10%)" });
          setAmount("50K");
        }
      },
      {
        title: "$100K",
        onClick: () => {
          setProfit({ ...profit, first: "$10,000(10%)" });
          setAmount("100K");
        }
      }
    ],
    FundingPips: [
      {
        title: "$5K",
        onClick: () => {
          setProfit({ ...profit, first: "$400(8%)", second: "$250(5%)" });
          setAmount("5K");
        }
      },
      {
        title: "$10K",
        onClick: () => {
          setProfit({ ...profit, first: "$800(8%)", second: "$500(5%)" });
          setAmount("10K");
        }
      },
      {
        title: "$25K",
        onClick: () => {
          setProfit({ ...profit, first: "$2,000(8%)", second: "$1,250(5%)" });
          setAmount("25K");
        }
      },
      {
        title: "$50K",
        onClick: () => {
          setProfit({ ...profit, first: "$4,000(8%)", second: "$2,500(5%)" });
          setAmount("50K");
        }
      },
      {
        title: "$100K",
        onClick: () => {
          setProfit({ ...profit, first: "$8,000(8%)", second: "$5,000(5%)" });
          setAmount("100K");
        }
      }
    ],
    "FundigPips X": [
      {
        title: "$5K",
        onClick: () => {
          setProfit({ ...profit, first: "$1,000(10%)", second: "$800(8%)" });
          setAmount("5K");
        }
      },
      {
        title: "$10K",
        onClick: () => {
          setProfit({ ...profit, first: "$1,000(10%)", second: "$800(8%)" });
          setAmount("10K");
        }
      },
      {
        title: "$25K",
        onClick: () => {
          setProfit({ ...profit, first: "$2,500(10%)", second: "$2,000(8%)" });
          setAmount("25K");
        }
      },
      {
        title: "$50K",
        onClick: () => {
          setProfit({ ...profit, first: "$5,000(10%)", second: "$4,000(8%)" });
          setAmount("50K");
        }
      },
      {
        title: "$100K",
        onClick: () => {
          setProfit({ ...profit, first: "$10,000(10%)", second: "$8,000(8%)" });
          setAmount("100K");
        }
      }
    ],
    "FundigPips Pluse": [
      {
        title: "$5K",
        onClick: () => {
          setProfit({ ...profit, first: "$400(8%)", second: "$250(8%)" });
          setAmount("5K");
        }
      },
      {
        title: "$10K",
        onClick: () => {
          setProfit({ ...profit, first: "$800(8%)", second: "$500(8%)" });
          setAmount("10K");
        }
      },
      {
        title: "$25K",
        onClick: () => {
          setProfit({ ...profit, first: "$2,000(8%)", second: "$1,250(8%)" });
          setAmount("25K");
        }
      },
      {
        title: "$50K",
        onClick: () => {
          setProfit({ ...profit, first: "$4,000(8%)", second: "$2,500(8%)" });
          setAmount("50K");
        }
      },
      {
        title: "$100K",
        onClick: () => {
          setProfit({ ...profit, first: "$8,000(8%)", second: "$5,000(8%)" });
          setAmount("100K");
        }
      }
    ],
    step3: [
      {
        title: "$5K",
        onClick: () => {
          setProfit({
            ...profit,
            first: "$500(5%)",
            second: "$500(5%)",
            third: "$500(5%)"
          });
          setAmount("5K");
        }
      },
      {
        title: "$10K",
        onClick: () => {
          setProfit({
            ...profit,
            first: "$500(5%)",
            second: "$500(5%)",
            third: "$500(5%)"
          });
          setAmount("10K");
        }
      },
      {
        title: "$25K",
        onClick: () => {
          setProfit({
            ...profit,
            first: "$1,250(5%)",
            second: "$1,250(5%)",
            third: "$1,200(5%)"
          });
          setAmount("25K");
        }
      },
      {
        title: "$50K",
        onClick: () => {
          setProfit({
            ...profit,
            first: "$2,500(5%)",
            second: "$2,500(5%)",
            third: "$2,500(5%)"
          });
          setAmount("50K");
        }
      },
      {
        title: "$100K",
        onClick: () => {
          setProfit({
            ...profit,
            first: "$5,000(5%)",
            second: "$5,000(5%)",
            third: "$5,000(5%)"
          });
          setAmount("100K");
        }
      }
    ]
  };
  const testimonialSetting = { ...settings, ...testimonial };
  const cardSvg = { ...settings, ...setting2 };
  const cardSvg2 = { ...settings, ...setting3 };
  const [select, setSelect] = useState("step1");
  const [amount, setAmount] = useState("5K");
  const [value, setValue] = useState("$500");
  const [amountTitle, setAmountTitle] = useState("step1");
  const [profit, setProfit] = useState({
    first: "$500(10%)",
    second: "",
    third: ""
    // forth:""
  });

  return (
    <div className="home">
      {/* traders section */}
      <div className="position-relative">
        <video width="100%" autoPlay loop muted id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
        <div className="traders mx-auto content">
          <div className="title">
            <h1 className="heading">
              Built by traders <br /> ➔ for traders
            </h1>
            <p>
              Join over 750,000 traders in the world’s leading firm. Trade in a
              fully simulated environment and earn up to 100% rewards.
            </p>
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <Button className="nav-btn text-white rounded-3">
              Buy Challenge
            </Button>
            <Button variant="border text-white border rounded-3">
              Join Competition
            </Button>
          </div>
        </div>
      </div>
      {/* funding cards */}
      <div className="funding">
        <h3 className="text-center my-3">Why FundingPips?</h3>

        <div className="funding-cards container my-4 keen-slider">
          <Swiper
            grabCursor={true}
            pagination={{
              clickable: true
            }}
            slidesPerView={4}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10
              },

              521: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 10
              }
            }}
          >
            <SwiperSlide>
              <Card className="funding-card p-2 border rounded-4 pb-4">
                <Card.Body>
                  <div>
                    <HandSvg />
                  </div>
                  <Card.Subtitle className="mb-2 text-primary mt-5">
                    Zero Reward Denials.
                  </Card.Subtitle>
                  <Card.Text className="text-white">
                    Trade of peace of mind
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="funding-card p-2 border rounded-4 pb-4">
                <Card.Body>
                  <div>
                    <TrophySvg />
                  </div>
                  <Card.Subtitle className="mb-2 text-primary mt-5">
                    Flexible Reward Cycle
                  </Card.Subtitle>
                  <Card.Text className="text-white">
                    The choice is yours: weekly, bi-weekly or monthly
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="funding-card p-2 border rounded-4 pb-4">
                <Card.Body>
                  <div>
                    <DollarSvg />
                  </div>
                  <Card.Subtitle className="mb-2 text-primary mt-5">
                    We Grow Together.
                  </Card.Subtitle>
                  <Card.Text className="text-white">
                    Trade up to $300.000 In simulated capital.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="funding-card p-2 border rounded-4 pb-4">
                <Card.Body>
                  <div>
                    <ThumsupSvg />
                  </div>
                  <Card.Subtitle className="mb-2 text-primary mt-5">
                    Choice Is Yours.
                  </Card.Subtitle>
                  <Card.Text className="text-white">
                    Pick your favorite evaluation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* journey */}
      <div className="journey mx-auto">
        <div className="title">
          <h1 className="heading">Buckle Up, Your Journey Starts Here!</h1>
          <p className="px-4">
            We evaluate according to objectives that best fit your style. From
            beginners to experts, traders from 195+ countries trust our
            platform.
          </p>
        </div>
        {/* buttons */}
        <div className="d-flex justify-content-center">
          <div className="step mt-5 mx-auto px-3 py-2 rounded-4">
            <Row className="justify-content-evenly g-2">
              <Col xs="auto" sm="auto" md="auto" lg="auto">
                <Button
                  className={`${
                    select === "step1" ? "btn-primary" : "select-btn "
                  } py-2 px-4 text-white rounded-4`}
                  onClick={() => {
                    setSelect("step1");
                    setAmountTitle("step1");
                  }}
                >
                  1 Step
                </Button>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto">
                <Button
                  className={`${
                    select === "step2" ? "btn-primary" : "select-btn "
                  } py-2 px-4  text-white rounded-4`}
                  onClick={() => {
                    setSelect("step2");
                    setAmountTitle("FundingPips");
                    setProfit({
                      ...profit,
                      first: "$400(8%)",
                      second: "$250(5%)"
                    });
                  }}
                >
                  2 Step
                </Button>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto">
                <Button
                  className={`${
                    select === "step3" ? "btn-primary" : "select-btn "
                  } py-2 px-4  text-white rounded-4`}
                  onClick={() => {
                    setSelect("step3");
                    setAmountTitle("step3");
                    setProfit({
                      ...profit,
                      first: "$500(5%)",
                      second: "$500(5%)",
                      third: "$500(5%)"
                    });
                  }}
                >
                  3 Step
                </Button>
              </Col>
            </Row>
            <div />
            <div />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="fundingpipes mt-3 mx-auto rounded-4 py-2 px-2">
            <Row className="g-3 justify-content-center">
              {obj?.[select]?.buttons?.map((item, index) => (
                <Col
                  xs="auto"
                  sm="auto"
                  md="auto"
                  lg="auto"
                  key={`${index}-buttons`}
                >
                  <Button
                    className={`${
                      amountTitle === item || amountTitle === select
                        ? "btn-primary"
                        : "select-btn"
                    } rounded-4 `}
                    onClick={() => {
                      setAmountTitle(item);
                      setProfit(
                        item == "FundingPips"
                          ? { ...profit, first: "$400(8%)", second: "$250(5%)" }
                          : item == "FundigPips X"
                          ? {
                              ...profit,
                              first: "$1,000(10%)",
                              second: "$800(8%)"
                            }
                          : { ...profit, first: "$400(8%)", second: "$250(8%)" }
                      );
                    }}
                  >
                    {item}
                  </Button>
                </Col>
              ))}
              {/* <Col xs="auto" sm="auto" md="auto" lg="auto">
              <Button
                className={`${select === "step2"
                  ? "btn-primary"
                  : "select-btn "} py-2 px-4  text-white rounded-4`}
                onClick={() => setSelect("step2")}
              >
                2 Step
              </Button>
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto">
              <Button
                className={`${select === "step3"
                  ? "btn-primary"
                  : "select-btn "} py-2 px-4  text-white rounded-4`}
                onClick={() => setSelect("step3")}
              >
                3 Step
              </Button>
            </Col> */}
            </Row>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="step amount mt-4 mx-auto px-2 py-2 rounded-4">
            <Row className="justify-content-evenly g-2">
              {amountButton?.[amountTitle]?.map((data, i) => (
                <Col xs="auto" sm="auto" md="auto" lg="auto">
                  <Button
                    className={`${
                      amount == data?.title?.slice(1)
                        ? "btn-primary"
                        : "select-amount"
                    } py-2 px-4 text-white rounded-4`}
                    onClick={data?.onClick}
                  >
                    {data?.title}
                  </Button>
                </Col>
              ))}
              {/* <Col xs="auto" sm="auto" md="auto" lg="auto">
              <Button
                className={`${
                  amount === "5K" ? "btn-primary" : "select-amount"
                } py-2 px-4 text-white rounded-4`}
                onClick={() => {
                  setAmount("5K");
                  setValue("500");
                }}
              >
                $5K
              </Button>
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto">
              <Button
                className={`${
                  amount == "10K" ? "btn-primary" : "select-amount"
                } py-2 px-4  text-white rounded-4`}
                onClick={() => {
                  setAmount("10K");
                  setValue("$1,000");
                }}
              >
                $10K
              </Button>
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto">
              <Button
                className={`${
                  amount === "25K" ? "btn-primary" : "select-amount"
                } py-2 px-4  text-white rounded-4`}
                onClick={() => {
                  setAmount("25K");
                  setAmount("$2,500");
                }}
              >
                $25K
              </Button>
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto">
              <Button
                className={`${
                  amount === "50K" ? "btn-primary" : "select-amount"
                } py-2 px-4  text-white rounded-4`}
                onClick={() => {
                  setAmount("50K");
                  setValue("$5,000");
                }}
              >
                $50K
              </Button>
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto">
              <Button
                className={`${
                  amount === "100K" ? "btn-primary" : "select-amount "
                } py-2 px-4  text-white rounded-4`}
                onClick={() => {
                  setAmount("100K");
                  setValue("$10,000");
                }}
              >
                $100K
              </Button>
            </Col> */}
            </Row>
            <div />
            <div />
          </div>
        </div>

        {/* cards */}

        <div className="journey-card mt-5">
          <Row
            xs={1}
            md={2}
            lg={select == "step1" ? 2 : 3}
            className="justify-content-center g-4"
          >
            {obj[select]?.cardData?.map((data, i) => (
              <Col key={`journeycard-${i}`}>
                <Card
                  className={`${
                    i == obj[select]?.cardData?.length - 1 ? "bg-primary" : ""
                  } card-details p-3 rounded-4`}
                >
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-white">
                      {data?.subTitle}
                    </Card.Subtitle>
                    <Card.Title className="text-white">
                      {data?.title}
                    </Card.Title>
                    <Card.Text className="mt-3 feild-details">
                      {data?.feild?.map((item, index) => (
                        <Row
                          className="justify-content-between my-1"
                          key={`journeyfeild-${index}`}
                        >
                          <Col className="card-text text-start">
                            {item?.title}
                          </Col>
                          <Col className="text-white text-end feild-value">
                            {item?.title !== "Profit Target" ||
                            i == obj[select]?.cardData?.length - 1
                              ? item?.value
                              : i == 0
                              ? profit?.first
                              : i == 1
                              ? profit?.second
                              : i == 2
                              ? profit?.third
                              : ""}
                          </Col>
                        </Row>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        {/* buy challengr */}
        <div className="mx-auto buy-challenge mt-5">
          <div className="title">
            <h1 className="heading">$59 for 5k Account</h1>
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <Button variant="primary" className="nav-btn text-white rounded-3">
              Buy Challenge
            </Button>
          </div>
        </div>
      </div>
      {/* landing trade */}

      <div className="landing-trade mx-auto rounded-4 ">
        <div className="position-relative">
          <img
            src={WorldImg}
            alt=""
            className="position-absolute img-set "
            fluid
            width={655}
            height={620}
          />
          <div className="bg-svg">
            <WorldSvg />
          </div>
          <div className="content position-absolute">
            <h1 className="text-center ">
              Over $80 Million Earned by Users Globally
            </h1>
            <p className="text-center">
              Quick, reliable and tailored to your needs. Weekly, bi-weekly, or
              monthly rewards.
            </p>
          </div>
          <div className="position-absolute content-h3">
            <h3>Landing Trade Par Country </h3>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "110%",
              margin: "auto",
              top: "500px", // Adjust this position based on your design
              // left: "50%",
              // transform: "translateX(-50%)",
              zIndex: 10
            }}
            className="position-absolute country-card"
          >
            <div className="position-relative">
              <div className="position-relative" style={{ overflow: "hidden" }}>
                <div ref={sliderRef} className="keen-slider">
                  {countryData?.map((item, index) => (
                    <div
                      key={`country-${index}`}
                      className="keen-slider__slide"
                    >
                      <Card className="rounded-4 bg-transparent border-white">
                        <Card.Body>
                          <div className="d-flex gap-2">
                            {item.svg}
                            <Card.Subtitle className="text-white country-name my-1">
                              {item?.name}
                            </Card.Subtitle>
                          </div>

                          <Card.Text className="text-white country-trade">
                            {item?.amount}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
                {instanceRef.current && (
                  <>
                    <Arrow
                      left
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      disabled={currentSlide === 0}
                    />

                    <Arrow
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                      disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                      }
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card sliders */}
      <div className="card-slider mt-5 keen-slider" ref={sliderRef2}>
        {/* <div ref={sliderRef2} className="keen-slider"> */}
        {cardSvg2Img?.map((item, index) => (
          <div key={`slider2-${index}`} className="keen-slider__slide ">
            <Card className="rounded-4 card-bg mx-3">
              <Card.Body>
                <div className="d-flex justify-content-center">
                  <img src={item} alt="" />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
        {/* </div> */}
        {/* <Slider {...cardSvg}>
          {cardSvg2Img?.map((item, index) => (
            <div key={`slider2-${index}`}>
              <Card className="rounded-4 card-bg mx-3">
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <img src={item} alt="" />
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider> */}
      </div>
      {/* <div className="card-slider my-5">
        <Slider {...cardSvg2}>
          {cardSvg2Img?.map((item, index) => (
            <div key={`slider2-${index}`}>
              <Card className="rounded-4 card-bg mx-3">
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <img src={item} alt="" />
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div> */}
      <div className="card-slider my-5 keen-slider" ref={sliderRef3}>
        {/* <div ref={sliderRef2} className="keen-slider"> */}
        {cardSvg2Img?.map((item, index) => (
          <div key={`slider2-${index}`} className="keen-slider__slide ">
            <Card className="rounded-4 card-bg mx-3">
              <Card.Body>
                <div className="d-flex justify-content-center">
                  <img src={item} alt="" />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="tesimonials mx-auto">
        <div className="title">
          <h1 className="text-center">
            Empowering your Success on All Major Trading Platforms
          </h1>
          <p className="text-center">
            FundingPips provides its users with tools, rules and trading
            platforms needed to succeed in evaluations!
          </p>
          <div className="text-center">
            <Button className="nav-btn text-white rounded-3">
              Start Trading Now
            </Button>
          </div>
        </div>
        <div className="animation mt-5">
          <div>
            <img src={img1_animation} alt="" width={500} />
          </div>
          <h1 className="heading">Your Skill Is Our Capital</h1>
          <div>
            <img src={img2_animation} alt="" width={500} />
          </div>
        </div>

        <div className="subtitle">
          <h1 className="text-start">
            {" "}
            Made in Dubai.
            <br /> <span>Testimonials</span> <br />{" "}
            <span>from all around </span>
            <br />
            <span>the world</span>
          </h1>
        </div>
        <div className="testimonial-img">
          <div className="card-slider my-5 keen-slider" ref={sliderRef4}>
            {testimonialImg?.map((item, index) => (
              <div key={`testimonial-${index}`} className="keen-slider__slide">
                <div className="d-flex justify-content-center">
                  <img src={item} alt="" />
                </div>
              </div>
            ))}
          </div>
          
        </div>
        {/* <Slider {...testimonialSetting}>
            {testimonialImg?.map((item, index) => (
              <div key={`testimonial-${index}`}>
                <div className="d-flex justify-content-center">
                  <img src={item} alt="" />
                </div>
              </div>
            ))}
          </Slider> */}
      </div>
    </div>
  );
};

export default Home;
