import React from "react";
import "./style.scss";
import { Logo } from "../../assets/img/index";
import { Ambulance, Phone, Search } from "../../assets/svg/index";
import { Input } from "antd";

function Nav() {
  return (
    <section className="nav">
      <div className="container">
        <div className="warp-nav-top">
          <img className="img" src={Logo} alt="Logo" />
          <ul>
            <li>
              <div className="icon">
                <Ambulance />
              </div>
              Cấp cứu: 1999 247
            </li>
            <li>
              <div className="icon">
                <Phone />
              </div>
              1900 8888
            </li>
            <li>
              <div className="icon">
                <Search />
              </div>
              <Input placeholder="Từ khóa..." />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Nav;
