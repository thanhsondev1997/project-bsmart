import React, { useEffect, useRef, useState } from "react";
import { Col, Input, Menu, Row, Layout } from "antd";
import "../../assets/style.css";
import { PATH } from "../../config/path";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const { Search } = Input;

const PageHeader = () => {
  const navigate = useNavigate();
  const [showHeaderTop, setShowHeaderTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeaderTop(scrollY < 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="header" style={{height:'18vh'}}>
      <div className="container">
        {showHeaderTop && <div className="header-top" >
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
              {/* <Search
                className="search"
                placeholder="Tìm kiếm khóa học"
                allowClear
                
              /> */}
              <input
                className="search"
                placeholder="Tìm kiếm khóa học"
                type="text"
              />
              <button className="buttonSearch">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
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
        </div>}

        <div className="header-bottom " style={{position:'fixed'}}>
          <div className="container-header-bottom">
            <img
              style={{ width: "190px", height: "75px" }}
              src="https://bsmart.edu.vn/files/icon-logo.webp"
              alt=""
              onClick={() => {
                navigate("/");
              }}
            />
            <nav className="nav-menu" style={{ display: "flex" }}>
              <NavLink className="nav-link" activeClassName="active" to="/">
                Trang chủ
              </NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/zz">
                Về chúng tôi
              </NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/zz">
                Khóa học STEM
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={PATH.khoahoc}
              >
                Khóa học
              </NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/zz">
                Mentor
              </NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/zz">
                Blog
              </NavLink>
            </nav>
            <div className="gioHang">
              <img
                style={{ width: "70px" }}
                src="https://bsmart.edu.vn/files/icon-shopping-cart.webp"
                alt=""
              />
            </div>
            <label for="nav-mobile-input" className="nav_bar-btn">
              <i class="fa-solid fa-bars"></i>
            </label>
            <input
              hidden
              type="checkbox"
              className="nav-input"
              id="nav-mobile-input"
            />

            <label for="nav-mobile-input" className="nav-overlay"></label>
            <nav className="nav-mobile">
              <label for="nav-mobile-input" className="nav-mobile-close">
                <i class="fa-solid fa-xmark"></i>
              </label>
              <img style={{width:"100px", height:"100px", marginL:"10px"}} src="https://bsmart.edu.vn/files/icon-logo-mobile.webp" alt="" />
              <br />
              <img style={{width:"100px", height:"100px", marginL:"10px"}} src="https://bsmart.edu.vn/files/icon-shopping-cart.webp" alt="" />
              <div className="nav-container-mobile">
                <NavLink
                  className="nav-link-mobile"
                  activeClassName="active"
                  to="/"
                >
                  Trang chủ
                </NavLink>
                <NavLink
                  className="nav-link-mobile"
                  activeClassName="active"
                  to="/zz"
                >
                  Về chúng tôi
                </NavLink>
                <NavLink
                  className="nav-link-mobile"
                  activeClassName="active"
                  to="/zz"
                >
                  Khóa học STEM
                </NavLink>
                <NavLink
                  className="nav-link-mobile"
                  activeClassName="active"
                  to={PATH.khoahoc}
                >
                  Khóa học
                </NavLink>
                <NavLink
                  className="nav-link-mobile"
                  activeClassName="active"
                  to="/zz"
                >
                  Mentor
                </NavLink>
                <NavLink
                  className="nav-link-mobile"
                  activeClassName="active"
                  to="/zz"
                >
                  Blog
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
