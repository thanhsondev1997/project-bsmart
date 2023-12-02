import { StarOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Drawer,
  Menu,
  Progress,
  Rate,
  Row,
} from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import dataKhoaHoc from "../../assets/data.json";
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

const DetailTemplate = () => {
  const { id } = useParams();
  const khoaHoc = dataKhoaHoc.find((khoahoc) => khoahoc.id === id * 1);
  console.log("khoaHoc: ", khoaHoc);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div className="banner " style={{ marginBottom: "100px" }}>
        <div className="banner-img"></div>
        <div className="banner-content detailCourse-carousel">
          <p
            className="nameKhoaHoc"
            style={{
              fontSize: "49px",
              color: "#FF630E",
              fontWeight: "700",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            {khoaHoc.tenKhoaHoc}
          </p>
          <div
            className="pathForCourse"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <p style={{ marginRight: "10px" }}>Trang chủ</p>
            <i class="fa-solid fa-angle-right"></i>
            <p style={{ margin: "0 10px" }}>Khóa học</p>
            <i class="fa-solid fa-angle-right"></i>
            <p style={{ marginLeft: "10px" }}>{khoaHoc.tenKhoaHoc}</p>
          </div>
        </div>
      </div>
      <div style={{ margin: "20px auto", width: "85%", fontSize: "16px" }}>
        <Row gutter={12} style={{ display: "flex" }}>
          <Col
            span={16}
            xl={{ span: 16, order: 1 }}
            lg={{ span: 16, order: 1 }}
            md={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            xs={{ span: 24, order: 2 }}
          >
            <Row gutter={12} style={{ marginBottom: "30px", display:'flex', justifyContent:"space-around" }} >
              <Col span={18} xl={16} lg={24} md={24} sm={24} xs={24} style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  style={{ width: "35px", height: "35px", marginRight: "10px" }}
                  src={<img src={khoaHoc.avatar} />}
                />
                <p style={{ color: "#999999" }}>
                  bởi{" "}
                  <span style={{ color: "#0e0a38", fontWeight: "700" }}>
                    Mentor {khoaHoc.ten}
                  </span>
                </p>
              </Col>
              <Col span={6} xl={8} lg={24} md={24} sm={24} xs={24} style={{display:"flex"}}>
                <Rate defaultValue={5} style={{ color: "#ff630e" }} />
                <p style={{ marginLeft: "20px", marginRight: "10px" }}>
                  (59 đánh giá)
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: "30px" }}>
              <Col
                span={8}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "16px",
                }}
              >
                <p style={{ fontSize: "16px", marginRight: "10px" }}>
                  Lĩnh vực:
                </p>
                <a
                  href=""
                  style={{
                    color: "#999",
                    padding: "4px",
                    background: "#f5f5f5",
                    borderRadius: "4px",
                    fontSize: "16px",
                  }}
                >
                  {khoaHoc.linhVuc}
                </a>
              </Col>
              <Col
                span={8}
                style={{
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{ marginRight: "10px" }}>Cấp độ:</p>
                <p>Khó</p>
                <img width={60} src={khoaHoc.imgTrinhDo} alt="" />
              </Col>
            </Row>
            <Row style={{ marginBottom: "30px", color: "#ff630e" }}>
              <Col span={8} xl={8} lg={24} md={24} sm={24} xs={24} style={{ fontSize: "16px", marginBottom:"10px" }}>
                <p>Số lượng học viên đăng ký: {khoaHoc.soLuongHocVien}</p>
              </Col>
              <Col span={6} xl={6} lg={24} md={24} sm={24} xs={24} style={{ fontSize: "16px", marginBottom:"10px" }}>
                <p>Số lượng lớp đang mở: 0</p>
              </Col>
              <Col span={10} xl={10} lg={24} md={24} sm={24} xs={24} style={{ fontSize: "16px", marginBottom:"10px" }}>
                <p>Ngày khai giảng lớp học mới: Hiện chưa có</p>
              </Col>
            </Row>
            <hr />
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "10px",
                  lineHeight: "30px",
                  marginTop: "20px",
                }}
              >
                Miêu tả khóa học
              </h3>
              <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                .NET Core API là một framework được tạo ra bởi Microsoft để xây
                dựng các ứng dụng web API và microservices. Nó được thiết kế để
                hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà
                phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows,
                macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có
                thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và
                không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã
                nguồn.
              </p>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "10px",
                  lineHeight: "30px",
                  marginTop: "20px",
                }}
              >
                Lộ trình khóa học
              </h3>
              <div>
                <i
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    lineHeight: "30px",
                    marginTop: "20px",
                  }}
                >
                  Module 1: Giới thiệu về Web API
                </i>
                <ol>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Cài đặt môi trường
                  </li>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Hướng dẫn sử dụng Visual Studio
                  </li>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Hướng dẫn sử dụng Postman, Swagger
                  </li>
                </ol>
              </div>
              <div style={{ marginTop: "20px" }}>
                <i
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    lineHeight: "30px",
                    marginTop: "20px",
                  }}
                >
                  Module 2:Xây dựng ứng dụng Asp.Net Core API đầu tiên
                </i>
                <ol>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Phân biệt khái niệm CodeFirst và Database First
                  </li>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Xây dựng Model
                  </li>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Sử dụng CodeFirst
                  </li>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Thực hành các phương thức GET, PUSH, POST, DELETE
                  </li>
                </ol>
              </div>
              <div style={{ marginTop: "20px" }}>
                <i
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    lineHeight: "30px",
                    marginTop: "20px",
                  }}
                >
                  Module 3:Làm việc với Relational Data sử dụng EF Core 7
                </i>
                <ol>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Xây dựng ứng dụng với nhiều table
                  </li>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Xây dựng ứng dụng với Authorization
                  </li>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Tìm hiểu về JWT
                  </li>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Thực hành Try – Catch
                  </li>
                </ol>
              </div>
              <div style={{ marginTop: "20px" }}>
                <i
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    lineHeight: "30px",
                    marginTop: "20px",
                  }}
                >
                  Module 4:Xây dựng Project hoàn thiện
                </i>
                <ol>
                  <li style={{ fontSize: "16px", marginTop: "20px" }}>
                    Hoàn thiện Project đã xây dựng
                  </li>
                </ol>
              </div>
              <div style={{ marginTop: "20px" }}>
                <i
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    lineHeight: "30px",
                    marginTop: "20px",
                  }}
                >
                  Module 5:Chia sẻ kinh nghiệm thực tiễn và kinh nghiệm phỏng
                  vấn xin việc
                </i>
              </div>
              <div className="danhGia">
                <h2 style={{marginTop:"20px"}}>Đánh giá khóa học</h2>
                <Card style={{ marginTop: "30px", marginBottom: "30px" }}>
                  <Row >
                    <Col span={5} xl={5} lg={24} md={24} sm={24} xs={24} className="danhgia-top">
                      <p style={{ fontSize: "65px", fontWeight: "700" }}>5</p>
                      <Rate
                        defaultValue={5}
                        style={{ color: "#ff630e", marginBottom: "20px" }}
                      />
                      <p>59 đánh giá</p>
                    </Col>
                    <Col span={19} xl={19} lg={24} md={24} sm={24} xs={24}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Rate
                          count={1}
                          defaultValue={1}
                          style={{ color: "red" }}
                          character={<StarOutlined />}
                        />
                        <p>5</p>
                        <Progress
                          percent={91}
                          style={{ width: "500px" }}
                          strokeColor={"#f4c150"}
                        />
                        <p>59 đánh giá</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Rate
                          count={1}
                          defaultValue={1}
                          style={{ color: "red" }}
                          character={<StarOutlined />}
                        />
                        <p>4</p>
                        <Progress
                          percent={20}
                          style={{ width: "500px" }}
                          strokeColor={"#f4c150"}
                        />
                        <p>0 đánh giá</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Rate
                          count={1}
                          defaultValue={1}
                          style={{ color: "red" }}
                          character={<StarOutlined />}
                        />
                        <p>3</p>
                        <Progress
                          percent={0}
                          style={{ width: "500px" }}
                          strokeColor={"#f4c150"}
                        />
                        <p>0 đánh giá</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Rate
                          count={1}
                          defaultValue={1}
                          style={{ color: "red" }}
                          character={<StarOutlined />}
                        />
                        <p>2</p>
                        <Progress
                          percent={0}
                          style={{ width: "500px" }}
                          strokeColor={"#f4c150"}
                        />
                        <p>0 đánh giá</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Rate
                          count={1}
                          defaultValue={1}
                          style={{ color: "red" }}
                          character={<StarOutlined />}
                        />
                        <p>1</p>
                        <Progress
                          percent={0}
                          style={{ width: "500px" }}
                          strokeColor={"#f4c150"}
                        />
                        <p>0 đánh giá</p>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
              <div className="nhanxet">
                <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
                  Nhận xét
                </h3>
                <div>
                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <div>
                      <Avatar
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                        src={
                          <img src="https://i.pinimg.com/originals/67/59/da/6759dab67081a5ed6dc0bf74e4f5f363.jpg" />
                        }
                      />
                    </div>
                    <div>
                      <div>
                        <p style={{ marginBottom: "5px" }}>
                          Hoa Huynh (Lớp: NE626)
                        </p>
                        <Rate defaultValue={5} style={{ color: "#ff630e" }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "30px", marginBottom: "40px" }}>
                    <p style={{ color: "#999" }}>10 điểm không có nhưng</p>
                  </div>
                </div>
                <hr />
                <div>
                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <div>
                      <Avatar
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                        src={
                          <img src="https://sieupet.com/sites/default/files/pictures/images/1-1473150685951-5.jpg" />
                        }
                      />
                    </div>
                    <div>
                      <div>
                        <p style={{ marginBottom: "5px" }}>
                          Minh Tú (Lớp: NE626)
                        </p>
                        <Rate defaultValue={5} style={{ color: "#ff630e" }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "30px", marginBottom: "40px" }}>
                    <p style={{ color: "#999" }}>
                      Khóa học này thực sự đáng giá mọi đồng tiền của tôi. Nó đã
                      giúp tôi xây dựng một ứng dụng .NET Core API thực tế từ
                      đầu đến cuối
                    </p>
                  </div>
                </div>
                <hr />
                <div>
                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <div>
                      <Avatar
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                        src={
                          <img src="https://sieupet.com/sites/default/files/cho-pug-bieu-cam_0.jpg" />
                        }
                      />
                    </div>
                    <div>
                      <div>
                        <p style={{ marginBottom: "5px" }}>
                          kkhoqtsyna (Lớp: NE626)
                        </p>
                        <Rate defaultValue={5} style={{ color: "#ff630e" }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "30px", marginBottom: "40px" }}>
                    <p style={{ color: "#999" }}>
                      Khóa học đã cung cấp một cái nhìn toàn diện về RESTful API
                      và cách triển khai chúng trong .NET Core. Em cảm thấy tự
                      tin hơn khi phát triển các ứng dụng dựa trên API sau khi
                      hoàn thành khóa học này
                    </p>
                  </div>
                </div>
                <hr />
                <div>
                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <div>
                      <Avatar
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                        src={
                          <img src="https://i.pinimg.com/originals/67/59/da/6759dab67081a5ed6dc0bf74e4f5f363.jpg" />
                        }
                      />
                    </div>
                    <div>
                      <div>
                        <p style={{ marginBottom: "5px" }}>
                          Hoa Huynh (Lớp: NE626)
                        </p>
                        <Rate defaultValue={5} style={{ color: "#ff630e" }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "30px", marginBottom: "40px" }}>
                    <p style={{ color: "#999" }}>10 điểm không có nhưng</p>
                  </div>
                </div>
                <hr />
                <div>
                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <div>
                      <Avatar
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                        src={
                          <img src="https://i.pinimg.com/originals/67/59/da/6759dab67081a5ed6dc0bf74e4f5f363.jpg" />
                        }
                      />
                    </div>
                    <div>
                      <div>
                        <p style={{ marginBottom: "5px" }}>
                          Hoa Huynh (Lớp: NE626)
                        </p>
                        <Rate defaultValue={5} style={{ color: "#ff630e" }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "30px", marginBottom: "40px" }}>
                    <p style={{ color: "#999" }}>10 điểm không có nhưng</p>
                  </div>
                </div>
              </div>
              <button
                className="buttontype"
                style={{ width: "100px", height: "40px", lineHeight: "10px" }}
              >
                Xem thêm
              </button>
            </div>
          </Col>
          <Col
            span={8}
            xl={{ span: 8, order: 1 }}
            lg={{ span: 8, order: 1 }}
            md={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            xs={{ span: 24, order: 1 }}
          >
            <Card
              style={{
                boxShadow: "0 0 30px rgba(51, 51, 51, 0.1)",
                marginBottom: "20px",
              }}
            >
              <img style={{ width: "100%" }} src={khoaHoc.banne} />
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                {khoaHoc.giaTien.toLocaleString()} VND
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                Danh sách lớp học
              </p>
              <Menu mode="vertical">
                <Card
                  className="lopHocDetail"
                  style={{ width: "80%", margin: "auto" }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "5px",
                      marginLeft: "6px",
                    }}
                  >
                    Mã lớp: <span style={{ color: "#ff630e" }}>1</span>
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "5px",
                      marginLeft: "6px",
                    }}
                  >
                    Thời gian:{" "}
                    <span style={{ color: "#ff630e" }}>
                      18:45 - 20:45(T3, T5)
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "5px",
                      marginLeft: "6px",
                    }}
                  >
                    Dự kiến mở lớp:{" "}
                    <span style={{ color: "#ff630e" }}>14/02/2024</span>
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "5px",
                      marginLeft: "6px",
                    }}
                  >
                    Buổi học:{" "}
                    <span style={{ color: "#ff630e" }}>
                      {khoaHoc.soBuoiHoc}
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "5px",
                      marginLeft: "6px",
                    }}
                  >
                    Số lượng học viên:{" "}
                    <span style={{ color: "#ff630e" }}>
                      {khoaHoc.soLuongHocVien}
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "5px",
                      marginLeft: "6px",
                    }}
                  >
                    Hình thức học:{" "}
                    <span style={{ color: "#ff630e" }}>
                      {khoaHoc.hinhThucHoc}
                    </span>
                  </p>
                  <Button
                    style={{
                      width: "100%",
                      background: "#778899",
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "10px",
                    }}
                  >
                    Đã bắt đầu
                  </Button>
                </Card>
              </Menu>
            </Card>
          </Col>
        </Row>
        <div style={{ margin: "30px auto" }}>
          <h1 style={{ marginBottom: "30px" }}>Khóa học tiêu biểu</h1>
          <Slider {...settings}>
            <Col span={23} xl={24}>
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
                  <div
                    style={{
                      textAlign: "right",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div></div>
                    <img
                      style={{ width: "50px" }}
                      src="https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp"
                      alt=""
                    />
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
                    <p style={{ marginLeft: "4px" }}>148 Học viên</p>
                  </div>
                  <p style={{ marginBottom: "10px" }}>
                    .NET Core API là một framework được tạo ra bởi Microsoft để
                    xây dựng các ứng dụng web API và microservices...
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
                  <div
                    style={{
                      textAlign: "right",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div></div>
                    <img
                      style={{ width: "50px" }}
                      src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp"
                      alt=""
                    />
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
                    <p style={{ marginLeft: "4px" }}>22 Học viên</p>
                  </div>
                  <p style={{ marginBottom: "10px" }}>
                    Nhập Môn Kiểm Thử Phần Mềm sẽ cung cấp cho bạn kiến thức có
                    thể áp dụng vào công việc kiểm thử...
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
                  <div
                    style={{
                      textAlign: "right",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div></div>
                    <img
                      style={{ width: "50px" }}
                      src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp"
                      alt=""
                    />
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
                    <p style={{ marginLeft: "4px" }}>0 Học viên</p>
                  </div>
                  <p style={{ marginBottom: "10px" }}>
                    Khóa học Windows Forms là một khóa học chuyên về phát triển
                    ứng dụng desktop sử dụng công nghệ...
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
                  <div
                    style={{
                      textAlign: "right",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div></div>
                    <img
                      style={{ width: "50px" }}
                      src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp"
                      alt=""
                    />
                  </div>
                  <h2 style={{ fontSize: "24px", height: "70px" }}>
                    Database Fundamental
                  </h2>
                  <p style={{ color: "#999", marginTop: "5px" }}>
                    Mentor{" "}
                    <span style={{ color: "#ff630e " }}>
                      Đoàn Ngọc Trân Châu
                    </span>
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i class="fa-solid fa-user-tie"></i>
                    <p style={{ marginLeft: "4px" }}>17 Học viên</p>
                  </div>
                  <p style={{ marginBottom: "10px" }}>
                    Cơ sở dữ liệu (Database) là một hệ thống tổ chức và lưu trữ
                    dữ liệu, cho phép người dùng truy cập và quản lý...
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
                  <div
                    style={{
                      textAlign: "right",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div></div>
                    <img
                      style={{ width: "50px" }}
                      src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp"
                      alt=""
                    />
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
                    <p style={{ marginLeft: "4px" }}>17 Học viên</p>
                  </div>
                  <p style={{ marginBottom: "10px" }}>
                    Môn học C++ là một môn học trong lĩnh vực Khoa học máy tính
                    và Lập trình, trong đó sinh viên sẽ học cách...
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
      </div>
    </div>
  );
};

export default DetailTemplate;
