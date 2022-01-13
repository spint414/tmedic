import React from "react";
import "./style.scss";
import {
  SpecBanner,
  SpecDoctor,
  SpecDoctor2,
  SpecDoctor3,
  SpecPicture,
  SpecPicture2,
  SpecPicture3,
  SpecPicture4,
} from "../../assets/img";
import { Row, Col } from "antd";

function Spec() {

  return (
    <div>
      <section className={"specBanner"}>
        <img src={SpecBanner} alt="spec-banner" />
      </section>
      <section className={"specContent"}>
        <div className="container">
          <div className={"specContent-section"}>
            <h2>khoa tai - mũi - họng</h2>
            <div className={"specContent-section-text"}>
              <p>
                Khoa Tai Mũi Họng Bệnh viện Đa khoa Hồng Ngọc ngay từ khi mới
                thành lập đã luôn đề ra mục tiêu hoạt động là chăm sóc sức khỏe
                toàn diện các vấn đề về tai mũi họng. Với trang thiết bị máy móc
                hiện đại, đội ngũ bác sĩ giỏi chuyên môn, nhân viên y tế tận
                tình, chu đáo khoa sẵn sàng đáp ứng mọi nhu cầu khám chữa bệnh
                kỹ thuật cao của người bệnh.
              </p>
            </div>
          </div>
          <div className={"specContent-section"}>
            <h2>khoa tai - mũi - họng</h2>
            <div className={"specContent-section-text"}>
              <ol>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
              </ol>
            </div>
          </div>
          <div className={"specContent-section"}>
            <h2>đội ngũ chuyên gia</h2>
            <Row className={"specContent-section-profile"} gutter={50}>
              <Col sm={24} lg={8}>
                <div className={"specContent-section-profile-image"}>
                  <img src={SpecDoctor3} alt="spec-doctor" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col sm={24} lg={8}>
                <div className={"specContent-section-profile-image"}>
                  <img src={SpecDoctor2} alt="spec-doctor" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col sm={24} lg={8}>
                <div className={"specContent-section-profile-image"}>
                  <img src={SpecDoctor} alt="spec-doctor" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </div>
          <div className={"specContent-section"}>
            <h2>Cơ sở vật chất</h2>
            <div className={"specContent-section-picture"}>
              <Row gutter={[20, 20]}>
                <Col lg={10}>
                  <img src={SpecPicture2} alt="spec" />
                </Col>
                <Col lg={14}>
                  <img src={SpecPicture} alt="spec" />
                </Col>
                <Col lg={16}>
                  <img src={SpecPicture3} alt="spec" />
                </Col>
                <Col lg={8}>
                  <img src={SpecPicture4} alt="spec" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Spec;
