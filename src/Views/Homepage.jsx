import React, { useEffect, useRef } from "react";
import DNAView from './DNAView'
import bigLogo from "../assets/images/homepage/logo-big.png";
import img2 from "../assets/images/homepage/img-2.png";
import circleAcid from "../assets/images/homepage/circle-acid.png";
import needle1 from "../assets/images/homepage/needle-1.png";
import pexelsMaria from "../assets/images/homepage/pexels-maria.png";
import testimonial from "../assets/images/our-mission/testimonial.png";
import { Link } from "react-router-dom";

export default function Homepage() {

  useEffect(() => {
    window.addEventListener("resize", () => {
      var dnaView = document.getElementById("desktopDnaView")
      if (window.innerWidth > 980) {
        dnaView.style.opacity = 1
      }
      else {
        dnaView.style.opacity = 0
      }
    })
  }, [])

  return (
    <>
      <div id="desktopDnaView" style={{ opacity: window.innerWidth > 980 ? 1 : 0 }}><DNAView view="desktop" /></div>
      <div className="bg-default" style={{ overflow: "hidden" }}>
        <div className="container-fluid">
          <div className="home-sec-1 d-flex flex-column align-items-center justify-content-center py-7">
            <img src={bigLogo} className=" big-logo" style={{ zIndex: 1 }} />
            <h1 className="font-very-large" style={{ zIndex: 1 }}>Belevi</h1>
            <h2 className="slogan-title" style={{ zIndex: 1 }}>belezza nelle vita</h2>
            <p className="font-24 text-center my-3" style={{ zIndex: 1 }}>
              {" "}
              Highest Quality Anti-aging Products <br />
              Carefully Tailored for Your Age
            </p>
            <Link to="/product2" className="linkName">
              <a className="explore-btn my-5" style={{ zIndex: 1 }}>Explore</a>
            </Link>
          </div>
          <div className="home-sec-2 py-5">
            <div className="sec-2-sub">
              <div className="sec-sub-container ">
                <img src={img2} />
                <p className="font-42">
                  Products Made for skin revitilization
                  <br />
                  designed by professional
                  <br />
                  made for consumers.
                </p>
              </div>
            </div>
            <div className="row justify-content-center color-default ">
              <div className="col-12 col-md-4"></div>
              <div className="col-12 col-md-4 py-7">
                <p className="font-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  tellus, vestibulum, orci fusce. Molestie cras condimentum
                  semper sapien, tempor faucibus in nibh aliquam. Pretium eget
                  libero mi malesuada.
                </p>
                <div className="mt-3">
                  <Link to="/product2" className="linkName" style={{ color: '#000000' }}>
                    <p className="border-bottom-dark pb-1 mt-1 mb-2 font-weight-500">
                      Products for proffessionals
                    </p>
                  </Link>
                  <Link to="/product2" className="linkName" style={{ color: '#000000' }}>
                    <p className="border-bottom-dark pb-1 mt-1 mb-2 font-weight-500">
                      Products for proffessionals
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light bg-light py-7">
        <div className="d-flex jsutify-content-center align-items-center flex-column">
          <img src={circleAcid} className="img-fluid-2" />
          <img src={needle1} className="img-fluid-2" />

          <h3 className="section-heading">HYALURONIC ACID</h3>
          <p className="home-sec-2-text text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui ipsum
            eu, tortor rhoncus, malesuada nulla at tortor. Neque, dignissim nec
            in vulputate eleifend sed purus. Felis, accumsan gravida quis
            maecenas
          </p>
          <Link to="/product2" style={{ color: '#000000' }}>
            <h5 className="color-default-light my-5 border-bottom-dark pb-2 font-weight-400">
              Explore the product.
            </h5>
          </Link>
        </div>
      </div>
      <div className="py-7 home-sec-2 container-fluid" style={{ overflow: "hidden" }}>
        <div className="row g-5 justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="h-100 w-100 d-flex justify-content-center  flex-column align-items-start ">
              <h2 className="font-42 mb-4">
                Belevi Focuses on making your Customers happy so that You can
                have greater returns.
              </h2>
              <p className="font-18 mb-3 font-weight-300 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus, vestibulum, orci fusce. Molestie cras condimentum semper sapien, tempor faucibus in nibh aliquam. Pretium eget libero mi malesuada.
              </p>
              <Link to="/product2" class="link-class">
                <a className="btn-custom rounded-pill d-inline">Contact Us</a>
              </Link>
            </div>
          </div>
          <div className="col-12  col-lg-4 text-center">
            <img src={pexelsMaria} className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="p-5 home-sec-5 ">
        <div className="container-xl px-3 px-md-0">
          <div className="row g-5">
            <div className="col-12 col-sm-6 col-lg-4">
              <figure className="text-center">
                <img
                  src={testimonial}
                  alt="testimonial"
                  style={{ height: "auto" }}
                />
                <figcaption className="font-24 mt-3 mb-4">
                  “Belevi have provided a carreer changing training and their
                  products are Stellar”
                </figcaption>
                <p className="font-12 mb-2">Company </p>

                <p className="font-12">Name Lastname</p>
              </figure>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <figure className="text-center">
                <img
                  src={testimonial}
                  alt="testimonial"
                  style={{ height: "auto" }}
                />
                <figcaption className="font-24 mt-3 mb-4">
                  “Belevi have provided a carreer changing training and their
                  products are Stellar”
                </figcaption>
                <p className="font-12 mb-2">Company </p>
                <p className="font-12">Name Lastname</p>
              </figure>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <figure className="text-center">
                <img
                  src={testimonial}
                  alt="testimonial"
                  style={{ height: "auto" }}
                />
                <figcaption className="font-24 mt-3 mb-4">
                  “Belevi have provided a carreer changing training and their
                  products are Stellar”
                </figcaption>
                <p className="font-12 mb-2">Company </p>
                <p className="font-12">Name Lastname</p>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
