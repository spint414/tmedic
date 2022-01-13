import React from "react";
import "./style.scss";
import { DoctorBanner } from "../../assets/img";
import { DoctorPicture } from "../../assets/img";
import { Row, Col } from "antd";

function Doctor() {
  return (
    <div>
      <section className={"doctorBanner"}>
        <img src={DoctorBanner} alt="doctor-banner" />
      </section>
      <section className={"doctorProfile"}>
        <div className="container">
          <Row className={"doctorContent"}>
            <Col sm={24} lg={12}>
              <div className={"doctorContent-left"}>
                <div className={"doctorContent-left-image"}>
                  <img src={DoctorPicture} alt="doctorpicture" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis.
                </p>
                <button>Đăng ký khám</button>
              </div>
            </Col>
            <Col sm={24} lg={12}>
              <div className={"doctorContent-right"}>
                <h2>GS. BS. LEE ABC</h2>
                <div className={"doctorContent-right-wrapper"}>
                  <div className={"doctorContent-right-section"}>
                    <h3>Chuyên khoa</h3>
                    <p>Khoa Tiêu hóa - Gan - Mật</p>
                  </div>
                  <div className={"doctorContent-right-section"}>
                    <h3>Ngôn ngữ</h3>
                    <p>Anh</p>
                  </div>
                  <div className={"doctorContent-right-section"}>
                    <h3>Học vấn</h3>
                    <ul>
                      <li>
                        Tốt nghiệp cử nhân Đại học Y Hà Nội chuyên ngành Bác sĩ
                        đa khoa (2007)
                      </li>
                      <li>
                        Tốt nghiệp thạc sĩ Đại học Y Hà Nội chuyên ngành Nội
                        tiêu hóa (2019)
                      </li>
                    </ul>
                  </div>
                  <div className={"doctorContent-right-section"}>
                    <h3>Hoạt động chuyên ngành</h3>
                    <ul>
                      <li>
                        Tốt nghiệp cử nhân Đại học Y Hà Nội chuyên ngành Bác sĩ
                        đa khoa (2007)
                      </li>
                      <li>
                        Tốt nghiệp thạc sĩ Đại học Y Hà Nội chuyên ngành Nội
                        tiêu hóa (2019)
                      </li>
                    </ul>
                  </div>
                  <div className={"doctorContent-right-section"}>
                    <h3>Chuyên khoa</h3>
                    <ul>
                      <li>
                        Tốt nghiệp cử nhân Đại học Y Hà Nội chuyên ngành Bác sĩ
                        đa khoa (2007)
                      </li>
                      <li>
                        Tốt nghiệp thạc sĩ Đại học Y Hà Nội chuyên ngành Nội
                        tiêu hóa (2019)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default Doctor;
