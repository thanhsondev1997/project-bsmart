import { Avatar, Card, Col, Rate, Row } from "antd";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#999" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#999" }}
      onClick={onClick}
    />
  );
}

const HomeCourse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="course">
      <div className="typical-course">
        <h2 style={{ margin: "40px 0 20px" }}>Khóa học tiêu biểu</h2>

        <Slider {...settings}>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
        </Slider>
      </div>
      <div className="crash-course">
        <h2 style={{ margin: "40px 0 20px" }}>Khóa học cấp tốc</h2>

        <Slider {...settings}>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
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
                    src={
                      "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp"
                    }
                  ></Avatar>
                }
              ></Card.Meta>
              <div style={{ textAlign: "left", marginTop: "5px" }}>
                <h2 style={{ fontSize: "24px" }}>.Net Core API</h2>
                <p style={{ color: "#999", marginTop: "5px" }}>
                  Mentor{" "}
                  <span style={{ color: "#ff630e " }}>Trần Hòa Hiệp</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i class="fa-solid fa-user-tie"></i>
                  <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                </div>
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
                <p>
                  .NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
        </Slider>
      </div>
      <div className="info-mentor">
        <h2 style={{ margin: "40px 0 20px" }}>Mentor tiêu biểu</h2>
        <Slider {...settings}>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "2px", textAlignLast:"center" }}>
                <h2 style={{ fontSize: "24px", color: "#ff630e"}}>Trần Hòa Hiệp</h2>
                <p>
                  NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "2px", textAlignLast:"center" }}>
                <h2 style={{ fontSize: "24px", color: "#ff630e"}}>Trần Hòa Hiệp</h2>
                <p>
                  NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "2px", textAlignLast:"center" }}>
                <h2 style={{ fontSize: "24px", color: "#ff630e"}}>Trần Hòa Hiệp</h2>
                <p>
                  NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "2px", textAlignLast:"center" }}>
                <h2 style={{ fontSize: "24px", color: "#ff630e"}}>Trần Hòa Hiệp</h2>
                <p>
                  NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "2px", textAlignLast:"center" }}>
                <h2 style={{ fontSize: "24px", color: "#ff630e"}}>Trần Hòa Hiệp</h2>
                <p>
                  NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
                </p>
              </div>
            </Card>
          </Col>
          <Col span={23}>
            <Card
              title={
                <div>
                  <img
                    style={{
                      width: "280px",
                      height: "200px",
                    }}
                    src="https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png"
                    alt=""
                  />
                </div>
              }
            >
              <div style={{ textAlign: "left", marginTop: "2px", textAlignLast:"center" }}>
                <h2 style={{ fontSize: "24px", color: "#ff630e"}}>Trần Hòa Hiệp</h2>
                <p>
                  NET Core API là một framework được tạo ra bởi Microsoft để
                  xây dựng các ứng dụng web API và ...
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
