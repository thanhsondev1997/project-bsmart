import React from "react";
import { Col, Layout, Row } from "antd";

const { Footer } = Layout;
const PageFooter = () => {
  return (
    <Layout>
      <Footer style={{ background: "#0e0a38" }}>
        <Row
          style={{
            margin: "auto",
            width: "80%",
            textAlign: "left",
            color: "white",
          }}
          gutter={24}
          className="footer-container"
        >
          <Col span={8} xl={8} lg={12} md={12} sm={12} xs={24} style={{ textAlign: "left" }}>
            <img
              style={{ width: "200px", height: "75px" }}
              src="https://bsmart.edu.vn/files/icon-logo-footer.webp"
              alt=""
              srcset=""
            />
            <p style={{ textAlign: "justify" }}>
              Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ
              năng lập trình của bạn. Tất cả các mentor của chúng tôi đều có
              nhiều kinh nghiệm trong thực tế và giảng dạy.
            </p>
            <p
              style={{ marginTop: "20px", fontWeight: "700", fontSize: "16px" }}
            >
              Theo dõi chúng tôi tại:
            </p>
            <div style={{ display: "flex", left: "0" }}>
              <i
                style={{ marginRight: "15px" }}
                className="fa-brands fa-facebook-f"
              ></i>
              <i
                style={{ marginRight: "15px" }}
                class="fa-brands fa-linkedin-in"
              ></i>
              <i
                style={{ marginRight: "10px" }}
                class="fa-brands fa-square-youtube"
              ></i>
            </div>
          </Col>
          <Col span={5} xl={5} lg={12} md={12} sm={12} xs={24} style={{ paddingTop: "20px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#ff630e",
              }}
            >
              Menu
            </h2>
            <div style={{ fontWeight: "400" }}>
              <p style={{ paddingBottom: "9px" }} href="">
                Trang chủ
              </p>
              <p style={{ paddingBottom: "9px" }} href="">
                Về chúng tôi
              </p>
              <p style={{ paddingBottom: "9px" }} href="">
                Nền tảng LMS
              </p>
              <p style={{ paddingBottom: "9px" }} href="">
                Khóa học STEM
              </p>
              <p style={{ paddingBottom: "9px" }} href="">
                Khóa học
              </p>
              <p style={{ paddingBottom: "9px" }} href="">
                Mentor
              </p>
              <p style={{ paddingBottom: "9px" }} href="">
                Blog
              </p>
            </div>
          </Col>
          <Col span={5} xl={5} lg={12} md={12} sm={12} xs={24} style={{ paddingTop: "20px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#ff630e",
              }}
            >
              Điều khoản
            </h2>
            <div style={{ fontWeight: "400" }}>
              <p style={{ paddingBottom: "9px" }} href="">
                Chính sách bảo mật
              </p>
              <p style={{ paddingBottom: "9px" }} href="">
                Điều khoản dịch vụ
              </p>
            </div>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#ff630e",
              }}
            >
              Cộng tác viên
            </h2>
            <div style={{ fontWeight: "400" }}>
              <p style={{ paddingBottom: "9px" }} href="">
                Đăng ký cộng tác viên
              </p>

              <p style={{ paddingBottom: "9px" }} href="">
                Đăng ký Mentor
              </p>
            </div>
          </Col>
          <Col span={6} xl={6} lg={12} md={12} sm={12} xs={24} style={{ paddingTop: "20px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#ff630e",
              }}
            >
              Liên hệ chúng tôi
            </h2>
            <div
              style={{
                fontWeight: "400",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom:"20px"
              }}
            >
              <i
                style={{ color: "#ff630e", marginRight: "10px" }}
                class="fa-solid fa-location-dot"
              ></i>
              <p>Tòa S9.02A, Vinhomes Grand Park, TP.Thủ Đức</p>
            </div>
            <div
              style={{
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
                marginBottom:"20px"
              }}
            >
              <i
                style={{ color: "#ff630e", marginRight:"10px" }}
                class="fa-solid fa-envelope"
              ></i>
              <p>admin@bsmart.edu.vn</p>
            </div>
            <div
              style={{
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                style={{ color: "#ff630e", marginRight: "10px" }}
                class="fa-solid fa-phone-volume"
              ></i>
              <p>028 9999 79 39</p>
            </div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default PageFooter;
