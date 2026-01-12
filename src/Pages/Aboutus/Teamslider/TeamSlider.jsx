import React, { useState } from "react";
import "./Teamslider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TeamSlider() {
    const [slider, setSlider] = useState([
        {
            img: "./images/img5.jpg",
            title: "Mr. P.K. Malhotra",
            discription: "President",
            p: "Mr. Malhotra serves as the Chief Representative and leader of the residential community. Elected by the members of the association, he is the face of ORWA in dealings with OMAXE. He is responsible for guiding ORWA in fulfilling its mission to ensure the well-being, safety, and harmony of all residents. "


        },
        {
            img: "./images/img6.jpeg",
            title: "Mr. Jagjit Sareen",
            discription: "President",
            p: "Mr. Malhotra serves as the Chief Representative and leader of the residential community. Elected by the members of the association, he is the face of ORWA in dealings with OMAXE. He is responsible for guiding ORWA in fulfilling its mission to ensure the well-being, safety, and harmony of all residents. "

        },
        {
            img: "./images/img7.jpg",
            title: "Mr. Karan S Gill",
            discription: "President",
            p: "Mr. Malhotra serves as the Chief Representative and leader of the residential community. Elected by the members of the association, he is the face of ORWA in dealings with OMAXE. He is responsible for guiding ORWA in fulfilling its mission to ensure the well-being, safety, and harmony of all residents. "

        },
        {
            img: "./images/img8.jpg",
            title: "Mr. P.K Jaiswal",
            discription: "President",
            p: "Mr. Malhotra serves as the Chief Representative and leader of the residential community. Elected by the members of the association, he is the face of ORWA in dealings with OMAXE. He is responsible for guiding ORWA in fulfilling its mission to ensure the well-being, safety, and harmony of all residents. "
        },
        {
            img: "./images/img9.jpg",
            title: "Mr. Basant Kumar",
            discription: "President",
            p: "Mr. Malhotra serves as the Chief Representative and leader of the residential community. Elected by the members of the association, he is the face of ORWA in dealings with OMAXE. He is responsible for guiding ORWA in fulfilling its mission to ensure the well-being, safety, and harmony of all residents. "

        },
        {
            img: "./images/img10.jpeg",
            title: "Mr. Vishnu Goyal",
            discription: "President",
            p: "Mr. Malhotra serves as the Chief Representative and leader of the residential community. Elected by the members of the association, he is the face of ORWA in dealings with OMAXE. He is responsible for guiding ORWA in fulfilling its mission to ensure the well-being, safety, and harmony of all residents. "

        },
        {
            img: "./images/img11.jpg",
            title: "Mrs. Veena Sachdeva",
            discription: "President",
            p: "Mr. Malhotra serves as the Chief Representative and leader of the residential community. Elected by the members of the association, he is the face of ORWA in dealings with OMAXE. He is responsible for guiding ORWA in fulfilling its mission to ensure the well-being, safety, and harmony of all residents. "

        },
        {
            img: "./images/img12.png",
            title: "Mrs. Tanu Vashneya",
            discription: "President",
            p: "Mr. Malhotra serves as the Chief Representative and leader of the residential community. Elected by the members of the association, he is the face of ORWA in dealings with OMAXE. He is responsible for guiding ORWA in fulfilling its mission to ensure the well-being, safety, and harmony of all residents. "

        },

        {
            img: "./images/img13.jpeg",

            title: "Mr. T.S. Sidhu",
            discription: "President",
            p: "Mr. Malhotra serves as the Chief Representative and leader of the residential community. Elected by the members of the association, he is the face of ORWA in dealings with OMAXE. He is responsible for guiding ORWA in fulfilling its mission to ensure the well-being, safety, and harmony of all residents. "

        },

       
    ]);

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="container-fluid team-slider-wrap">
            <Slider {...settings}>
                {slider.map((item) => (
                    <div key={item.title} className="px-2">
                        <div className="team-slider-card">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="team-slider-img"
                            />

                            <h5 className="team-slider-name">{item.title}</h5>
                            <small className="team-slider-role">{item.discription}</small>

                            <p className="team-slider-desc">{item.p}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>


    );
}

export default TeamSlider;
