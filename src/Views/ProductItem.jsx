import React from "react";
import img1 from "../assets/images/product-item/img-1.png";
import img2 from "../assets/images/product-item/img-2.png";
import img3 from "../assets/images/product-item/img-3.png";
import img4 from "../assets/images/product-item/img-4.png";

import img5a from "../assets/images/product-item/img-5-a.png";
import img5b from "../assets/images/product-item/img-5-b.png";

import img6a from "../assets/images/product-item/img-6-a.png";
import img6b from "../assets/images/product-item/img-6-b.png";

import soft from "../assets/images/others/soft.png";
import hard from "../assets/images/others/hard.png";

import { Link } from "react-router-dom";

import certifications from "../assets/images/our-mission/certifications.png";

export default function CoursePage() {
  return (
    <div className="bg-light" style={{ overflow: "hidden" }}>
      <div className="p-0 px-md-5   bg-default">
        <div className="container-xl">
          <div className="container-fluid">
            <div className="pt-sec-1 py-7">
              <div className="row gx-5 flex-md-row-reverse flex-row">
                <div className="col-12 col-lg-4 text-center">
                  <img src={img1} className="img-fluid" />
                </div>
                <div className="col-12 col-lg-8">
                  <div className="h-100 w-100 d-flex justify-content-center  flex-column ">
                    <h2 className="section-heading-normal">
                      {" "}
                      Hermosa <br />
                      Hyaluronic Acid Dermal Filler
                    </h2>
                    <p className="font-18 mb-3 ">
                      The HERMOSA is one of the leading product of anti-aging{" "}
                      <br /> specification hyaluronic acid dermal filler.
                    </p>
                    <ul>
                      <li>duration</li>
                      <li>tension force</li>
                      <li>lifting force</li>
                      <li>anchor force</li>
                    </ul>
                    <div className="about-certifications">
                      <p className="font-12 text-uppercase mb-3">
                        Certifications
                      </p>
                      <img src={certifications} className="img-fluid-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container-xl">
          <div className="container-fluid">
            <div className="pi-sec-2 py-5">
              <div className="row gx-5 flex-md-row-reverse flex-row">
                <div className="col-12 col-lg-5 text-center">
                  <img src={img2} className="img-fluid" />
                </div>
                <div className="col-12 col-lg-7 d-flex align-items-center">
                  <div>
                    <h3 className="section-heading-normal font-weight-400 mb-3">
                      Thin-wall Needle
                    </h3>
                    <p className="font-18">
                      Thin-wall needle enables smooth injection which reduces
                      patient’s discomfort during the procedure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pi-sec-3 py-5">
              <div className="custom-table-container">
                <table className="table-custom text-start">
                  <thead>
                    <th style={{ width: 350 }}></th>
                    <th className="pe-2">
                      {" "}
                      <img src={img4} />{" "}
                    </th>
                    <th className="ps-2">
                      {" "}
                      <img src={img4} />{" "}
                    </th>
                  </thead>
                  <thead>
                    <th className="font-18 font-weight-500">Specifications</th>
                    <th className="border-dark"> Soft </th>
                    <th> Hard </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>apariencia</td>
                      <td>Gel transperente y claro</td>
                      <td>Gel transperente y claro</td>
                    </tr>
                    <tr>
                      <td>Contenido</td>
                      <td>Acido Hialuronico reticulado </td>
                      <td>Acido Hialuronico reticulado </td>
                    </tr>
                    <tr>
                      <td>Concentracion</td>
                      <td>24 mg/ ml </td>
                      <td>24 mg/ ml </td>
                    </tr>
                    <tr>
                      <td>Lidocaina</td>
                      <td>3 %</td>
                      <td>3 %</td>
                    </tr>
                    <tr>
                      <td>Volumen</td>
                      <td>1.0 ml</td>
                      <td>1.0 ml</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pi-sec-4 py-5">
              <div className="row gx-5 flex-md-row-reverse flex-row">
                <div className="col-12 col-lg-8 text-center">
                  <img src={img3} className="img-fluid-2" />
                </div>
                <div className="col-12 col-lg-4 ">
                  <h3 className="font-72 font-weight-300 mb-3 white-space-nowrap my-4">
                    Application zones
                  </h3>

                  <div className="d-flex flex-column justify-content-start align-items-start my-4">
                    <img src={soft} />
                    <ul className="ul-list my-4">
                      <li>Labios</li>
                      <li>Ojeras</li>
                      <li>Líneas finas</li>
                    </ul>
                    <img src={hard} />
                    <ul className="ul-list my-4">
                      <li>Rinomodelación</li>
                      <li> Pómulos</li>
                      <li> Mentón</li>
                      <li> Delineado mandibular</li>
                      <li>Surco nasogeniano</li>
                      <li>Labios</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pi-sec-5 py-7">
              <h3 className="font-48 text-center mb-5">Clinical Cases</h3>
              <div className="scroll-content  ps-5">

                <div className="row gy-5  mb-3 ">
                  <div className="col-6 text-center">
                    <img src={img5a} className="img-fluid" />
                    <p className=" mt-2">ojeras despues (product used)</p>
                  </div>
                  <div className="col-6 text-center">
                    <img src={img5b} className="img-fluid" />
                    <p className=" mt-2">ojeras despues (product used)</p>
                  </div>
                </div>
                <div className="row gy-5 mb-3 ">
                  <div className="col-6 text-center">
                    <img src={img6a} className="img-fluid" />
                    <p className=" mt-2">ojeras despues (product used)</p>
                  </div>
                  <div className="col-6 text-center">
                    <img src={img6b} className="img-fluid" />
                    <p className=" mt-2">ojeras despues (product used)</p>
                  </div>
                </div>

                <div className="row gy-5  mb-3 ">
                  <div className="col-6 text-center">
                    <img src={img5a} className="img-fluid" />
                    <p className=" mt-2">ojeras despues (product used)</p>
                  </div>
                  <div className="col-6 text-center">
                    <img src={img5b} className="img-fluid" />
                    <p className=" mt-2">ojeras despues (product used)</p>
                  </div>
                </div>
                <div className="row gy-5 mb-3 ">
                  <div className="col-6 text-center">
                    <img src={img6a} className="img-fluid" />
                    <p className=" mt-2">ojeras despues (product used)</p>
                  </div>
                  <div className="col-6 text-center">
                    <img src={img6b} className="img-fluid" />
                    <p className=" mt-2">ojeras despues (product used)</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="pt-sec-6 bg-light pb-7 text-center">
              <div className="container-xl">
                <div className="container-fluid">
                  <div className="py-5">
                    <h2 className="font-42 text-center">
                      Want to ask the questions directly,
                      <br />
                      <Link to="/contact" className="linkName">
                        <span className="border-bottom-dark">Get in touch.</span>
                      </Link>
                    </h2>
                  </div>
                  <p className="font-24 text-center"> myemailbeleviemail@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
