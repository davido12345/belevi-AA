import React from "react";
import ellipse from "../assets/images/others/ellipse.png";
import img1 from "../assets/images/product/img-1.png";
import { Link } from "react-router-dom";


import img2 from "../assets/images/product/img-2.png";
export default function Product2() {
  return (
    <div className="bg-light product-page-2" style={{ overflow: "hidden" }}>
      <div className="container-xl">
        <div className="container-fluid">
          <div className="top-bar">
            <div class="sub-product-container">
              <span className="title">Select Product:</span>
              <p className="sub-product active">Hermorsa</p>
            </div>
            <div className="main-product-title-container">
              <div>
                {" "}
                <img src={ellipse} /> Hydrolic acid
              </div>
            </div>
          </div>
          <div className="top-bar-second">
            <p>Botox</p>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container-xl">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-12 col-sm-6 col-lg-4 prod-main-container">
                <Link to="/product/item" className="linkName">
                  <div className="col-prod-contain prod-desc">
                    <img src={img2} className="img-fluid-2" />
                    <h2>Hermosa</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                      ipsum eu, tortor rhoncus, malesuada nulla at tortor. Neque,
                      dignissim nec in vulputate eleifend sed purus. Felis,
                      accumsan gravida quis maecenas
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 prod-main-container">
                <div className="col-prod-contain">
                  <img src={img1} className="img-fluid-2" />
                  <h2>Hermosa Soft</h2>
                  <p>Product category</p>
                  <Link to="/product/item" className="linkName">
                    <a className="btn-custom">Explore</a>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 prod-main-container">
                <div className="col-prod-contain">
                  <img src={img1} className="img-fluid-2" />
                  <h2>Hermosa Soft</h2>
                  <p>Product category</p>
                  <Link to="/product/item" className="linkName">
                    <a className="btn-custom">Explore</a>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 prod-main-container">
                <div className="col-prod-contain">
                  <img src={img1} className="img-fluid-2" />
                  <h2>Hermosa Soft</h2>
                  <p>Product category</p>
                  <Link to="/product/item" className="linkName">
                    <a className="btn-custom">Explore</a>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 prod-main-container">
                <div className="col-prod-contain">
                  <img src={img1} className="img-fluid-2" />
                  <h2>Hermosa Soft</h2>
                  <p>Product category</p>
                  <Link to="/product/item" className="linkName">
                    <a className="btn-custom">Explore</a>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 prod-main-container">
                <div className="col-prod-contain">
                  <img src={img1} className="img-fluid-2" />
                  <h2>Hermosa Soft</h2>
                  <p>Product category</p>
                  <Link to="/product/item" className="linkName">
                    <a className="btn-custom">Explore</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
