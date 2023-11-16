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
        >
          <Col span={6} style={{textAlign:"left"}}>
            <img
              style={{ width: "200px", height: "75px" }}
              src="https://bsmart.edu.vn/files/icon-logo-footer.webp"
              alt=""
              srcset=""
            />
            <p>
              Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ
              năng lập trình của bạn. Tất cả các mentor của chúng tôi đều có
              nhiều kinh nghiệm trong thực tế và giảng dạy.
            </p>
            <p>Theo dõi chúng tôi tại:</p>
            <div>
              <i style={{marginLeft:"10px"}} className="fa-brands fa-facebook-f"></i>
              <i style={{marginLeft:"10px"}} class="fa-brands fa-linkedin-in"></i>
              <i style={{marginLeft:"10px"}} class="fa-brands fa-square-youtube"></i>
            </div>
          </Col>
          <Col span={6}style={{paddingTop:"20px"}}>
            <h2 >Menu</h2>
            <div>
              <p href="">Trang chủ</p>
              <p href="">Trang chủ</p>
              <p href="">Trang chủ</p>
            </div>
          </Col>
          <Col span={6}style={{paddingTop:"20px"}}>
            <h2 >Menu</h2>
            <div>
              <p href="">Trang chủ</p>
              <p href="">Trang chủ</p>
              <p href="">Trang chủ</p>
            </div>
          </Col>
          <Col span={6}style={{paddingTop:"20px"}}>
            <h2 >Menu</h2>
            <div>
              <p href="">Trang chủ</p>
              <p href="">Trang chủ</p>
              <p href="">Trang chủ</p>
            </div>
          </Col>

        </Row>
      </Footer>
    </Layout>
  );
};

export default PageFooter;
