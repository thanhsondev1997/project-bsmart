import {
  Col,
  Row,
  InputNumber,
  Checkbox,
  Card,
  Avatar,
  Rate,
  Pagination,
  Select,
  Collapse,
} from "antd";
import React, { useState } from "react";
import dataKhoahoc from "../../assets/data.json";
import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "../../config/path";
const { Option } = Select;

const KhoaHocTemplate = () => {
  //pagani and select
  const navigate = useNavigate();
  const pageSize = 9;
  const [currenPage, setCurrenPage] = useState(1);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSort = (value) => {
    setSelectedValue(value);
    setCurrenPage(1);
  };

  const dataSort = dataKhoahoc.slice().sort((a, b) => {
    if (selectedValue === "az") {
      return a.tenKhoaHoc.localeCompare(b.tenKhoaHoc);
    } else if (selectedValue === "za") {
      return b.tenKhoaHoc.localeCompare(a.tenKhoaHoc);
    } else if (selectedValue === "soHocVien") {
      return b.soLuongHocVien.localeCompare(a.soLuongHocVien);
    } else if (selectedValue === "") {
      return dataKhoahoc;
    }
  });

  const startIndex = (currenPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currenData = dataSort.slice(startIndex, endIndex);
  const { Panel } = Collapse;

  // handle search
  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(10000000);

  const [data, setData] = useState(dataKhoahoc);

  const [checkedValues, setCheckedValues] = useState({
    hinhThucHoc: [],
    trinhDo: [],
    linhVuc: [],
  });
  console.log("setCheckedValues: ", checkedValues);

  const handleCheckbox = (category, value) => {
    setCheckedValues((prevFilters) => {
      const currentFilters = prevFilters[category] || []; // Kiểm tra xem prevFilters[category] có tồn tại không
      return {
        ...prevFilters,
        [category]: currentFilters.includes(value)
          ? currentFilters.filter((item) => item !== value)
          : [...currentFilters, value],
      };
    });
  };

  const handleSearchValue = () => {
    // kiem tra gia
    // const dataPrice = dataKhoahoc.filter((item) => {
    //   const dataFilter =
    //     (minValue === null || item.giaTien >= minValue) &&
    //     (maxValue === null || item.giaTien <= maxValue);
    //   return dataFilter;
    // });

    // // Logic để lọc mảng data dựa trên filters
    // const filteredData = dataKhoahoc.filter(
    //   (item) =>
    //     (checkedValues.hinhThucHoc.length === 0 ||
    //       checkedValues.hinhThucHoc.includes(item.hinhThucHoc)) &&
    //     (checkedValues.trinhDo.length === 0 ||
    //       checkedValues.trinhDo.includes(item.trinhDo)) &&
    //     (checkedValues.linhVuc.length === 0 ||
    //       checkedValues.linhVuc.includes(item.linhVuc))
    // );
    // console.log("filteredData:", filteredData);

    const combineDataPriceAndCheckbox = dataKhoahoc.filter(
      (item) =>
        // Lọc theo giá
        (minValue === null || item.giaTien >= minValue) &&
        (maxValue === null || item.giaTien <= maxValue) &&
        // Lọc theo các giá trị được chọn
        (checkedValues.hinhThucHoc.length === 0 ||
          checkedValues.hinhThucHoc.includes(item.hinhThucHoc)) &&
        (checkedValues.trinhDo.length === 0 ||
          checkedValues.trinhDo.includes(item.trinhDo)) &&
        (checkedValues.linhVuc.length === 0 ||
          checkedValues.linhVuc.includes(item.linhVuc))
    );
    console.log("combineDataPriceAndCheckbox: ", combineDataPriceAndCheckbox);

    setData(combineDataPriceAndCheckbox);
  };

  const combineData = currenData.filter((product1) =>
    data.some(
      (product2) =>
        product1.giaTien === product2.giaTien &&
        product1.linhVuc === product2.linhVuc &&
        product1.trinhDo === product2.trinhDo &&
        product1.hinhThucHoc === product2.hinhThucHoc
    )
  );
  // console.log('combineData: ', combineData);

  return (
    <div className="KhoaHocTemplate">
      <div className="banner">
        <div className="banner-img"></div>
        <div className="banner-content">
          <p
            style={{
              fontSize: "49px",
              color: "#FF630E",
              fontWeight: "700",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            Danh sách khóa học
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <p style={{ marginRight: "10px" }}>Trang chủ</p>
            <i class="fa-solid fa-angle-right"></i>
            <p style={{ marginLeft: "10px" }}>Khóa học</p>
          </div>
        </div>
      </div>
      <div
        style={{ height: "", margin: "50px auto", width: "80%" }}
        className="khoahoc"
      >
        <Row gutter={[32, 32]} className="container-khoahoc">
          <Col
            span={4}
            xl={4}
            lg={8}
            md={10}
            sm={10}
            xs={24}
            className="filter-col"
          >
            <div className="filter-decktop">
              <div className="khoangGia">
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  KHOẢNG GIÁ
                </p>
                <p style={{ fontSize: "16px", color: "#808080" }}>Từ giá</p>
                <InputNumber
                  addonAfter="VND"
                  defaultValue={0}
                  max={10000000}
                  min={0}
                  onChange={setMinValue}
                />
                <p style={{ fontSize: "16px", color: "#808080" }}>Đến giá</p>
                <InputNumber
                  addonAfter="VND"
                  defaultValue={"10.000.000"}
                  max={10000000}
                  onChange={setMaxValue}
                />
              </div>
              <div className="hinhThucHoc">
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    marginTop: "10px",
                  }}
                >
                  HÌNH THỨC HỌC
                </p>
                <Checkbox
                  style={{ color: "#808080", marginTop: "5px" }}
                  value={"online"}
                  checked={checkedValues.hinhThucHoc.includes("online")}
                  onChange={() => handleCheckbox("hinhThucHoc", "online")}
                >
                  Online
                </Checkbox>
                <br />

                <Checkbox
                  style={{ color: "#808080", marginTop: "5px" }}
                  value={"offline"}
                  checked={checkedValues.hinhThucHoc.includes("offline")}
                  onChange={() => handleCheckbox("hinhThucHoc", "offline")}
                >
                  Offline
                </Checkbox>
              </div>
              <div className="trinhDo">
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    marginTop: "10px",
                  }}
                >
                  TRÌNH ĐỘ
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    style={{ color: "#808080", marginTop: "5px" }}
                    value="de"
                    checked={checkedValues.trinhDo.includes("de")}
                    onChange={() => handleCheckbox("trinhDo", "de")}
                  >
                    Dễ
                  </Checkbox>
                  <img
                    style={{ width: "60px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Levels/1/ant-icon-01.webp"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    style={{ color: "#808080", marginTop: "5px" }}
                    value="trungBinh"
                    checked={checkedValues.trinhDo.includes("trungBinh")}
                    onChange={() => handleCheckbox("trinhDo", "trungBinh")}
                  >
                    Trung bình
                  </Checkbox>
                  <img
                    style={{ width: "60px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    value="kho"
                    style={{ color: "#808080", marginTop: "5px" }}
                    checked={checkedValues.trinhDo.includes("kho")}
                    onChange={() => handleCheckbox("trinhDo", "kho")}
                  >
                    Khó
                  </Checkbox>
                  <img
                    style={{ width: "60px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    value="cucKho"
                    style={{ color: "#808080", marginTop: "5px" }}
                    checked={checkedValues.trinhDo.includes("cucKho")}
                    onChange={() => handleCheckbox("trinhDo", "cucKho")}
                  >
                    Cực khó
                  </Checkbox>
                  <img
                    style={{ width: "60px", height: "50px" }}
                    src="https://bsmart.edu.vn/files/Levels/1/ant-icon-04.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="linhVuc">
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    marginTop: "10px",
                  }}
                >
                  LĨNH VỰC
                </p>
                <Checkbox
                  value="backend"
                  style={{ color: "#808080", marginTop: "5px" }}
                  checked={checkedValues.linhVuc.includes("backend")}
                  onChange={() => handleCheckbox("linhVuc", "backend")}
                >
                  Back-End
                </Checkbox>
                <br />
                <Checkbox
                  value="frontend"
                  style={{ color: "#808080", marginTop: "5px" }}
                  checked={checkedValues.linhVuc.includes("frontend")}
                  onChange={() => handleCheckbox("linhVuc", "frontend")}
                >
                  Front-End
                </Checkbox>
                <br />
                <Checkbox
                  value="database"
                  style={{ color: "#808080", marginTop: "5px" }}
                  checked={checkedValues.linhVuc.includes("database")}
                  onChange={() => handleCheckbox("linhVuc", "database")}
                >
                  Database
                </Checkbox>
                <br />
                <Checkbox
                  value="capToc"
                  style={{ color: "#808080", marginTop: "5px" }}
                  checked={checkedValues.linhVuc.includes("capToc")}
                  onChange={() => handleCheckbox("linhVuc", "capToc")}
                >
                  Cấp tốc
                </Checkbox>
                <br />
                <Checkbox
                  value="other"
                  style={{ color: "#808080", marginTop: "5px" }}
                  checked={checkedValues.linhVuc.includes("other")}
                  onChange={() => handleCheckbox("linhVuc", "other")}
                >
                  Other
                </Checkbox>
                <br />
                <Checkbox
                  value="stem"
                  style={{ color: "#808080", marginTop: "5px" }}
                  checked={checkedValues.linhVuc.includes("stem")}
                  onChange={() => handleCheckbox("linhVuc", "stem")}
                >
                  STEM
                </Checkbox>
              </div>
            </div>
            <div className="filter-mobile">
              <Collapse>
                <Panel header="Khoảng giá" key="1">
                  <p style={{ fontSize: "16px", color: "#808080" }}>Từ giá</p>
                  <InputNumber
                    addonAfter="VND"
                    defaultValue={0}
                    max={10000000}
                    min={0}
                  />
                  <p style={{ fontSize: "16px", color: "#808080" }}>Đến giá</p>
                  <InputNumber
                    addonAfter="VND"
                    defaultValue={"10.000.000"}
                    max={10000000}
                  />
                </Panel>
                <Panel header="Hình thức học" key="2">
                  <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                    Online
                  </Checkbox>
                  <br />
                  <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                    Offline
                  </Checkbox>
                </Panel>
                <Panel header="Trình độ" key="3">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                      Dễ
                    </Checkbox>
                    <img
                      style={{ width: "60px", height: "50px" }}
                      src="https://bsmart.edu.vn/files/Levels/1/ant-icon-01.webp"
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                      Trung bình
                    </Checkbox>
                    <img
                      style={{ width: "60px", height: "50px" }}
                      src="https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp"
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                      Khó
                    </Checkbox>
                    <img
                      style={{ width: "60px", height: "50px" }}
                      src="https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp"
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                      Cực khó
                    </Checkbox>
                    <img
                      style={{ width: "60px", height: "50px" }}
                      src="https://bsmart.edu.vn/files/Levels/1/ant-icon-04.webp"
                      alt=""
                    />
                  </div>
                </Panel>
                <Panel header="Lĩnh vực" key="4">
                  <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                    Back-End
                  </Checkbox>
                  <br />
                  <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                    Front-End
                  </Checkbox>
                  <br />
                  <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                    Database
                  </Checkbox>
                  <br />
                  <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                    Cấp tốc
                  </Checkbox>
                  <br />
                  <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                    Other
                  </Checkbox>
                  <br />
                  <Checkbox style={{ color: "#808080", marginTop: "5px" }}>
                    STEM
                  </Checkbox>
                </Panel>
              </Collapse>
            </div>
            <button
              type="button"
              className="buttontype"
              onClick={handleSearchValue}
            >
              Tìm kiếm
            </button>
          </Col>
          <Col
            span={20}
            xl={20}
            lg={16}
            md={14}
            sm={14}
            xs={24}
            className="item-khaohoc"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <p
                className="soKhoaHoc"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                {dataKhoahoc.length} Khóa học
              </p>
              <Select
                style={{ width: "230px" }}
                placeholder={"Sắp xếp theo"}
                onChange={handleSort}
              >
                <Option>Sắp xếp khóa học</Option>
                <Option>Khóa học mới nhất</Option>
                <Option value="soHocVien">Khóa học nhiều người học</Option>
                <Option value="az">A-Z</Option>
                <Option value="za">Z-A</Option>
              </Select>
            </div>
            <Row gutter={[32, 32]} style={{ textAlign: "center" }}>
              {combineData.map((khoaHoc) => {
                const path = generatePath(PATH.CourseDetail, {
                  id: khoaHoc.id,
                });
                return (
                  <Col
                    span={8}
                    xl={8}
                    lg={12}
                    md={24}
                    sm={24}
                    xs={24}
                    key={khoaHoc.id}
                  >
                    <Card
                      style={{
                        padding: "0px",
                        boxShadow: "0 0 5px #8e8c8c",
                        position: "relative",
                      }}
                      title={
                        <div>
                          <img
                            style={{
                              width: "100%",
                              height: "200px",
                            }}
                            src={khoaHoc.banne}
                            alt=""
                            className="img-title"
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
                            src={khoaHoc.avatar}
                          ></Avatar>
                        }
                      ></Card.Meta>
                      <div style={{ textAlign: "left", marginTop: "5px" }}>
                        <div
                          style={{
                            textAlign: "right",
                            position: "absolute",
                            top: "39%",
                            right: "-10px",
                          }}
                        >
                          <img
                            style={{ width: "70px" }}
                            src={khoaHoc.imgTrinhDo}
                            alt=""
                          />
                        </div>
                        <h2 style={{ fontSize: "24px", height: "70px" }}>
                          {khoaHoc.tenKhoaHoc}
                        </h2>
                        <p style={{ color: "#999", marginTop: "5px" }}>
                          Mentor{" "}
                          <span
                            style={{
                              color: "#ff630e ",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            {khoaHoc.ten}
                          </span>
                        </p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <i class="fa-solid fa-user-tie"></i>
                          <p
                            style={{
                              marginLeft: "4px",
                              fontSize: "16px",
                              marginBottom: "2px",
                              marginTop: "2px",
                            }}
                          >
                            {khoaHoc.soLuongHocVien} Học viên
                          </p>
                        </div>
                        <Rate allowHalf defaultValue={5} />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p
                            style={{
                              color: "#B22222",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            {khoaHoc.giaTien.toLocaleString()} VND
                          </p>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <i class="fa-solid fa-calendar-days"></i>
                            <p style={{ fontSize: "16px" }}>
                              {khoaHoc.soBuoiHoc} Buổi học
                            </p>
                          </div>
                        </div>
                        <p style={{ marginBottom: "10px" }}>
                          {khoaHoc.noiDung}
                        </p>
                      </div>
                      <hr />
                      <button
                        onClick={() => {
                          navigate(path);
                        }}
                        className="buttontype"
                      >
                        XEM CHI TIẾT
                      </button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Pagination
              style={{ marginTop: "20px" }}
              current={currenPage}
              pageSize={pageSize}
              total={dataSort.length}
              onChange={(page) => setCurrenPage(page)}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default KhoaHocTemplate;
