import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/our-mission/banner1.png";
import aboutRect1 from "../assets/images/our-mission/about-rect-1.png";
import certifications from "../assets/images/our-mission/certifications.png";
import section4 from "../assets/images/our-mission/section-4.png";
import testimonial from "../assets/images/our-mission/testimonial.png";
import circle from "../assets/images/our-mission/circle.png";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="bg-default " style={{ overflow: "hidden" }}>
      <div className="home-sec-1  px-md-5 py-7 ">
        <div className={`container-xl px-3 px-md-0  py-3 overflow-hidden d-flex justify-content-center align-items-center flex-column  `}>
          <img src={aboutImg} className="img-fluid" />
          <h2 className="section-heading text-center">Our Mission</h2>
          <p className="font-24 text-center">
            Our purpose is to be the ideal partner for aesthetic and <br />{" "}
            reconstructive solutions that help healthcare professionals make a{" "}
            <br /> real and lasting difference to the well-being of patients.{" "}
          </p>
        </div>
      </div>
      <div className="p-5 home-sec-2 bg-white">
        <div className="row gx-5">
          <div className="col-12 offset-lg-2 col-lg-4 text-center">
            <img src={aboutRect1} className="img-fluid" />
          </div>
          <div className="col-12 col-lg-4">
            <div className="h-100 w-100 d-flex justify-content-center  flex-column ">
              <h2 className="section-heading-normal">
                {" "}
                Global certified products <br /> brought to you by Belevi{" "}
              </h2>
              <p className="font-18 mb-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Luctus hac sed tortor molestie nulla sagittis sed id.
                <br /> Quam purus pellentesque.
              </p>
              <div className="about-certifications">
                <p className="font-12 text-uppercase mb-3">Certifications</p>
                <img src={certifications} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 home-sec-3 text-center bg-white">
        <p className="font-24 text-center mb-5">
          Belevi sells products that are manufactured in Korea and certified
          <br />
          globally in accordance with European Union standards.
          <br />
          <br />
          CE 0000 certified line of dermal fillers certified line of dermal
          fillers
          <br />
          made from cross-linked biotechnological hyaluronic acid
          <br />
          <br />
          CE 0000 certified line of bio revitalizing products containing
          <br />
          biocompatible reabsorbable, linear hyaluronic acid of non-animal
          origin.
          <br />
          <br />
          Therefore Belevi products have received highest standards of the
          modern
          <br /> pharmaceutical industry confirmed by certificates:
        </p>
        <a className="btn-custom rounded-pill">download all</a>
      </div>
      <div className="p-5 home-sec-4 bg-white ">
        <h2 className="section-heading text-center mb-3">
          Belevi Provides <br />
          Intense and proffessional courses made to
          <br />
          educate professionals on using Industry
          <br />
          standard products
        </h2>
        <div className="row gx-3 gy-4 justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
            <motion.button
              whileHover={{ scale: 1.1, zIndex: 999999 }}
              whileTap={{ scale: 0.9, zIndex: 2 }}
              class="card p-0  text-start"
            >
              <Link to="/courses-desktop" className="linkName">
                <img src={section4} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <h5 class="card-title font-24 mb-4">
                    Hilos tensores de traccion con canula
                  </h5>
                  <p class="card-text">
                    <div className="d-flex justify-content-between flex-wrap font-weight-normal font-18">
                      <p>cejas foxy eyes</p> <p>linea de mandibula</p>
                    </div>
                    <p className="m-0 text-normal-sky">$399.000</p>
                  </p>
                </div>
              </Link>
            </motion.button>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
            <motion.button
              whileHover={{ scale: 1.1, zIndex: 999999 }}
              whileTap={{ scale: 0.9, zIndex: 2 }}
              class="card p-0  text-start"
            >
              <Link to="/courses-desktop" className="linkName">
                <img src={section4} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <h5 class="card-title font-24 mb-4">
                    Hilos tensores de traccion con canula
                  </h5>
                  <p class="card-text">
                    <div className="d-flex justify-content-between flex-wrap font-weight-normal font-18">
                      <p>cejas foxy eyes</p> <p>linea de mandibula</p>
                    </div>
                    <p className="m-0 text-normal-sky">$399.000</p>
                  </p>
                </div>
              </Link>
            </motion.button>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
            <motion.button
              whileHover={{ scale: 1.1, zIndex: 999999 }}
              whileTap={{ scale: 0.9, zIndex: 2 }}
              class="card p-0  text-start"
            >
              <Link to="/courses-desktop" className="linkName">
                <img src={section4} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <h5 class="card-title font-24 mb-4">
                    Hilos tensores de traccion con canula
                  </h5>
                  <p class="card-text">
                    <div className="d-flex justify-content-between flex-wrap font-weight-normal font-18">
                      <p>cejas foxy eyes</p> <p>linea de mandibula</p>
                    </div>
                    <p className="m-0 text-normal-sky">$399.000</p>
                  </p>
                </div>
              </Link>
            </motion.button>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center my-5">
          <Link to="/courses-desktop" className="linkName">
            <a className="btn-custom rounded-pill mx-auto">view courses</a>
          </Link>
        </div>
      </div>

      <div className="p-5 home-sec-5 bg-white ">
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

      <div className="p-5 home-sec-5 text-center border-top bg-white">
        <p className="font-18 mb-5">Industry Facts</p>
        <div className="row g-5 my-5">
          <div className="col-12 col-md-6">
            <figure>
              <img src={circle} alt="circle" className="h-auto" />
              <figcaption className="font-30 mt-3">+000b growth this year</figcaption>
            </figure>
          </div>
          <div className="col-12 col-md-6">
            <figure>
              <img src={circle} alt="circle" className="h-auto" />
              <figcaption className="font-30 mt-3">0000 new surgeries</figcaption>
            </figure>
          </div>
        </div>
      </div>

    </div>
  );
}
