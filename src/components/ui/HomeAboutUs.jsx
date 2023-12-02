import { Button, Col, Row } from "antd";
import React from "react";

const HomeAdboutUs = () => {



  return (
    <div className="about-us">
      <div className="parallax-container"></div>
      <div className="aboutUs-content">
        <h2 style={{fontSize:"45px", fontWeight:"700", marginBottom:"30px"}}>Về chúng tôi</h2>
        <Row gutter={[40, 8]} className="custom-row-aboutUS">
          <Col className="aboutUs-left" span={12} xs={24} sm={24} md={24} lg={24} xl={12}>
             <p style={{fontSize:"20px", fontWeight:"500", marginBottom:"30px"}}>BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội ngũ Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang đến các khóa học lập trình chất lượng nhất. Hệ thống khóa học đa dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể lựa chọn các khóa học phù hợp với nhu cầu và khả năng của mình. BSMART cập nhật và áp dụng những công nghệ mới, giúp học viên và Mentor được tiếp cận với những kiến thức và kỹ năng mới nhất trong lập trình. Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên trong quá trình học tập và phát triển sự nghiệp sau khi tốt nghiệp.</p>
             <div>
              <button className="buttonStyle">Xem khóa học</button>

              <button style={{marginLeft:"20px"}} className="buttonStyle">Hỗ trợ tư vấn</button>
            </div>
             </Col>
          <Col className="aboutUs-right" span={12} xs={2} sm={24} md={24} lg={24} xl={12}>
            <img style={{width:"100%", height:"100%"}} src="https://bsmart.edu.vn/files/banner-2.webp" alt="" />

          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeAdboutUs;
