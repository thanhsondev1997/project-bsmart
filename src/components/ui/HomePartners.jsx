import React from "react";
import Slider from "react-slick";

const HomePartners = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="HomePartners">
      <div className="route">
        <div className="route-container" style={{ zIndex: 2 }}></div>
        <div className="route-content" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px" }}>
            Định hướng và Chuẩn hoá lộ trình học tập
          </h2>
          <p style={{ margin: "20px 0", fontSize: "30px", fontWeight: "600" }}>
            Học Thật, Dự Án Thật, Mentor Tận Tâm
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="buttonStyle">Danh sách khóa học</button>
            <button className="buttonStyle" style={{ marginLeft: "10px" }}>
              Tư vấn lộ trình
            </button>
          </div>
        </div>
      </div>
      <div
        className="partners"
        style={{
          textAlign: "center",
          margin: "20px auto",
          width: "80%",
          padding: "40px 0",
        }}
      >
        <h1
          style={{ fontSize: "35px", fontWeight: "700", marginBottom: "20px" }}
        >
          Nhận được sự tin tưởng của các đối tác
        </h1>
        <Slider {...settings}>
          <div className="show-partner">
            <img
              style={{ width: "230px", height: "100px" }}
              src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-07.webp"
              alt=""
              srcset=""
            />
          </div>
          <div className="show-partner">
            <img
              style={{ width: "230px", height: "100px" }}
              src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-05.webp"
              alt=""
              srcset=""
            />
          </div>
          <div className="show-partner">
            <img
              style={{ width: "230px", height: "100px" }}
              src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-01.webp"
              alt=""
              srcset=""
            />
          </div>
          <div className="show-partner">
            <img
              style={{ width: "230px", height: "100px" }}
              src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-03.webp"
              alt=""
              srcset=""
            />
          </div>
          <div className="show-partner">
            <img
              style={{ width: "230px", height: "100px" }}
              src="https://bsmart.edu.vn/assets/images/logo-dai-hoc-04.webp"
              alt=""
              srcset=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomePartners;
