import { Col, Row } from "antd";
import React from "react";

const HomeAvantage = () => {
  return (
    <div className="avantage">
      <div className="advantage-top">
        <h2
          style={{ fontSize: "45px", fontWeight: "700", marginBottom: "50px" }}
        >
          Điểm ưu việt tại BSmart
        </h2>
        <Row className="container-content" gutter={[32, 32]}>
          <Col className="advantage-item" span={8}>
            <div className="item-title">
              <i class="fa-regular fa-circle-check"></i>
              <p>Học theo lộ trình, có định hướng</p>
            </div>
            <div className="item-content">
              <p>
                BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm
                phát triển năng lực và niềm đam mê lập trình của bạn để có việc
                ngay sau khi học.
              </p>
            </div>
          </Col>
          <Col className="advantage-item" span={8}>
            <div className="item-title">
              <i class="fa fa-cogs"></i>
              <p>Nền tảng cốt lõi trong lập trình</p>
            </div>
            <div className="item-content">
              <p>
                BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất
                trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ
                và môi trường làm việc.
              </p>
            </div>
          </Col>
          <Col className="advantage-item" span={8}>
            <div className="item-title">
              <i class="fa-solid fa-fire"></i>
              <p>Mài giũa bạn qua thực tế</p>
            </div>
            <div className="item-content">
              <p>
                Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án
                thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu
                lửa" cho bạn.
              </p>
            </div>
          </Col>
          <Col className="advantage-item" span={8}>
            <div className="item-title">
              <i class="fa-solid fa-users"></i>
              <p>Mentor tận tâm</p>
            </div>
            <div className="item-content">
              <p>
                Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng
                vai trò một thành viên trong quy trình Scrum, Agile. Được Mentor
                hỗ trợ tận tâm, nhiệt tình.
              </p>
            </div>
          </Col>
          <Col className="advantage-item" span={8}>
            <div className="item-title">
              <i class="fa-solid fa-qrcode"></i>
              <p>Công nghệ mới, thực tế</p>
            </div>
            <div className="item-content">
              <p>
                Bạn được học và trải nghiệm các công nghệ lập trình mới nhất,
                chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.
              </p>
            </div>
          </Col>
          <Col className="advantage-item" span={8}>
            <div className="item-title">
              <i class="fa-solid fa-trophy"></i>
              <p>Trao tay chìa khóa thành công</p>
            </div>
            <div className="item-content">
              <p>
                Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng
                doanh nghiệp ngay sau khi tốt nghiệp.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="advantage-bottom">

      </div>
      <Row className="container-img" gutter={[0, 0]}>
        <Col className="img-item-left" span={12}>
          <div className="img-left"></div>
          <div style={{ color: "white", textAlign:"center" }} className="img-content-left">
            <h2 style={{ fontSize: "42px", fontWeight: "700" }}>Trái Ngành</h2>
            <p style={{ fontSize: "20px" }}>From Zero to Hero</p>
          </div>
        </Col>
        <Col className="img-item-right" span={12}>
          <div className="img-right"></div>
          <div style={{ color: "white", textAlign:"center" }} className="img-content-right">
            <h2 style={{ fontSize: "42px", fontWeight: "700" }}>
              Đã biết lập trình
            </h2>
            <p style={{ fontSize: "20px" }}>
              Đã có kiến thức tư duy lập trình và OOP
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAvantage;
