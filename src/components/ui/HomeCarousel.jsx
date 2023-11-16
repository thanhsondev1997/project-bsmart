import React from "react";
import { Button, Carousel } from "antd";

const HomeCarousel = () => {
  const imageURL = "https://bsmart.edu.vn/assets/images/banner/banner.webp";
  const contentStyle = {
    display: "block",
    margin: 0,
    width: "100%",
    height: "600px",
    backgroundSize: "cover",
    color: "#fff",
    textAlign: "center",
    backgroundImage: `url(${imageURL})`,
    zIndex: "0",
  };


  return (
    <div className="carousel">
      <div className="container-carousel">
        <div className="carousel-overlay " style={contentStyle}></div>
      </div>
      <div className="carousel-content">
        <h3>
          Khởi đầu sự nghiệp của bạn
        </h3>
        <h2 className="">Trở thành lập trình viên chuyên nghiệp tại BSMART</h2>
        <p>Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành lập trình viên chuyên nghiệp</p>
        <button className="buttonStyle">Khóa học</button>
      </div>
    </div>
  );
};

export default HomeCarousel;
