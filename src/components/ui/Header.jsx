import React from "react";
import { Col, Input, Menu, Row, Layout } from "antd";
import "../../assets/style.css";
import { PATH } from "../../config/path";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const { Search } = Input;

const PageHeader = () => {

  const navigate = useNavigate()
  return (
    <div className="header">
      <div className="container">
        <div className="header-top">
          <div className="container-header-top">
            <div className="header-icon">
              <ul className="icon">
                <li>
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i class="fa-brands fa-linkedin-in"></i>
                </li>
                <li>
                  <i class="fa-brands fa-square-youtube"></i>
                </li>
              </ul>
            </div>
            <div className="header-mail">
              <img
                style={{ width: "30px" }}
                src="https://bsmart.edu.vn/files/icon-gmail.webp"
                alt=""
              />
              <p style={{ fontSize: "18px" }}>admin@bsmart.edu.vn</p>
            </div>
            <div className="header-sdt">
              <img
                style={{ width: "30px" }}
                src="https://bsmart.edu.vn/files/icon-phone.webp"
                alt=""
              />
              <p style={{ fontSize: "18px", color: "white" }}>028 9999 7939</p>
            </div>
            <div className="header-search">
              <Search
                className="search"
                placeholder="Tìm kiếm khóa học"
                allowClear
                style={{ width: 450 }}
              />
            </div>
            <div className="header-auth">
              <p
                style={{
                  marginRight: "10px",
                  borderRight: "2px solid #ccc",
                  padding: "0 7px",
                }}
              >
                Đăng nhập
              </p>
              <p>Đăng ký</p>
            </div>
          </div>
        </div>
        <div className="header-bottom ">
          <div className="container-header-bottom">
            <img
              style={{ width: "190px", height: "75px" }}
              src="https://bsmart.edu.vn/files/icon-logo.webp"
              alt=""
              onClick={()=>{
                navigate("/")
              }}
            />

            <Menu
              mode="horizontal"
              items={[
                {
                  label: <NavLink to="/">Trang chủ</NavLink>,
                  key: "1",
                },
                {
                  label: <NavLink to="/">Về chúng tôi</NavLink>,
                  key: "2",
                },
                {
                  label: <NavLink to="/khoahoc">Khóa học</NavLink>,
                  key: "3",
                },
              ]}
            ></Menu>
            <div className="gioHang">
              <img
                style={{ width: "70px" }}
                src="https://bsmart.edu.vn/files/icon-shopping-cart.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
