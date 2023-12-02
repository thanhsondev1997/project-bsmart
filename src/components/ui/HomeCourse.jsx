import { Avatar, Card, Col, Rate, Row } from "antd";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="customNextRight"
      // style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <i class="fa-solid fa-chevron-right"></i>

    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='customNextLeft'
      // style={{ ...style, display: "block", background: "#999" }}
      onClick={onClick}
    >
      <i class="fa-solid fa-chevron-left"></i>
    </div>
  );
}

const HomeCourse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  };

  return (
    <div className="course">
      <div className="typical-course">
        <h2 style={{ margin: "40px 0 20px", fontSize: "45px" }}>
          Khóa học tiêu biểu
        </h2>

        <Slider {...settings}>
          <Col span={23} xl={24} >
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                .NET Core API
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    148 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>3,000,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>15 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/testing%20foundation.jpg"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                Nhập Môn Kiểm Thử Phần Mềm
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Tô Lý Hữu Nhân</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    22 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                Nhập Môn Kiểm Thử Phần Mềm sẽ cung cấp cho bạn kiến thức có thể áp dụng vào công việc kiểm thử...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>2,500,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>12 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/c-sharp.webp"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                Windows Form
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Phan Nhật Tân</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    0 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                Khóa học Windows Forms là một khóa học chuyên về phát triển ứng dụng desktop sử dụng công nghệ...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>3,000,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>15 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/ezgif-1-1b0fae0dff.webp"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                Database Fundamental
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Đoàn Ngọc Trân Châu</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    17 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                Cơ sở dữ liệu (Database) là một hệ thống tổ chức và lưu trữ dữ liệu, cho phép người dùng truy cập và quản lý...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>2,500,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>15 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/download.png"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                C Fundamental
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Phan Nhật Tân</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    17 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                Môn học C++ là một môn học trong lĩnh vực Khoa học máy tính và Lập trình, trong đó sinh viên sẽ học cách...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>2,000,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>

        </Slider>
      </div>
      <div className="intensive-course" style={{marginTop:"40px"}}>
        <h2 style={{ margin: "40px 0 20px", fontSize: "45px" }}>
          Khóa học cấp tốc
        </h2>

        <Slider {...settings}>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                .NET Core API
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    148 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>3,000,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>15 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/testing%20foundation.jpg"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                Nhập Môn Kiểm Thử Phần Mềm
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Tô Lý Hữu Nhân</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    22 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                Nhập Môn Kiểm Thử Phần Mềm sẽ cung cấp cho bạn kiến thức có thể áp dụng vào công việc kiểm thử...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>2,500,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>12 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/c-sharp.webp"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                Windows Form
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Phan Nhật Tân</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    0 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                Khóa học Windows Forms là một khóa học chuyên về phát triển ứng dụng desktop sử dụng công nghệ...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>3,000,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>15 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/ezgif-1-1b0fae0dff.webp"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                Database Fundamental
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Đoàn Ngọc Trân Châu</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    17 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                Cơ sở dữ liệu (Database) là một hệ thống tổ chức và lưu trữ dữ liệu, cho phép người dùng truy cập và quản lý...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>2,500,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>15 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/download.png"
                    alt=""
                  />
                </div>
              }
            >
              <Card.Meta
                style={{
                  marginTop: -50,
                  fontSize: "16px",
                }}
                avatar={
                  <Avatar
                    style={{ width: "50px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp"
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <div style={{ textAlign: "right", display:"flex", justifyContent:"space-between" }}>
                  <div></div>
                  <img style={{ width: "50px" }} src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp" alt="" />

                </div>
                <h2 style={{ fontSize: "24px", height: "70px" }}>
                C Fundamental
                </h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Phan Nhật Tân</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>
                    17 Học viên
                  </p>
                  
                </div>
                <p style={{ marginBottom: "10px" }}>
                Môn học C++ là một môn học trong lĩnh vực Khoa học máy tính và Lập trình, trong đó sinh viên sẽ học cách...
                </p>
                <Rate allowHalf defaultValue={5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ color: "red" }}>2,000,000</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>18 Buổi học</p>
                  </div>
                </div>

              </div>
              <hr />
              <button className="buttontype">XEM CHI TIẾT</button>
            </Card>
          </Col>

        </Slider>
      </div>
      <div className="typical-mentor">
        <h2 style={{ margin: "40px 0 20px", fontSize: "45px" }}>
          Mentor tiêu biểu
        </h2>

        <Slider {...settings}>
          <Col span={23} style={{borderRadius:"10px"}}>
            <Card
              style={{ padding: "0px", borderRadius:"5px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                      borderRadius:"5px"
                    }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "center", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px",height:"40px" , color:"#ff630e"}}>
                Phan Nhật Tân
                </h2>
                <p style={{ marginBottom: "10px", textAlign:"justify" }}>
                Nhật Tân, với kinh nghiệm giảng dạy và chia sẻ cho nhiều học viên, tôi đã xây dựng được niềm tin rất lớn đối với cộng đồng...
                </p>

              </div>

            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px", height: "40px", color:"#ff630e",  textAlign: "center", }}>
                Đỗ Minh Quân
                </h2>
                <p style={{ marginBottom: "10px", textAlign:"justify" }}>
                Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin, chuyên ngành công nghệ phần mềm. Tôi...
                </p>

              </div>

            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/stem.webp"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px", height: "40px", color:"#ff630e" }}>
                Team STEM Mentor
                </h2>
                <p style={{ marginBottom: "10px", textAlign:"justify" }}>
                Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ thuật và toán học)...
                </p>

              </div>

            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/aa.webp"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px", height: "40px", color:"#ff630e" }}>
                Tuấn Anh Phạm
                </h2>
                <p style={{ marginBottom: "10px", textAlign:"justify" }}>
                Xin chào! Tôi là Phạm Tuấn Anh - một lập trình viên với đam mê mãnh liệt về công nghệ thông tin...
                </p>

              </div>

            </Card>
          </Col>
          <Col span={23}>
            <Card
              style={{ padding: "0px" }}
              title={
                <div>
                  <img
                    style={{
                      width: "306px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-95638d4605.webp"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px", height: "40px", color:"#ff630e" }}>
                Hồ Hồng Minh
                </h2>
                <p style={{ marginBottom: "10px", textAlign:"justify" }}>
                Xin chào, tôi là Hồ Hồng Minh. Tôi có hơn 3 năm kinh nghiệm trong việc giảng dạy và mentor cho...
                </p>

              </div>

            </Card>
          </Col>

        </Slider>
      </div>
    </div>
  );
};

export default HomeCourse;
