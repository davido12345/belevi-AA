import React from "react";
import img1 from "../assets/images/product-threads/img-1.png";
import img2 from "../assets/images/product-threads/img-2.png";
import img3 from "../assets/images/product-threads/img-3.png";

import certifications from "../assets/images/our-mission/certifications.png";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1192,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        infinite: true,
        dots: true,
      },
    },
  ],
};
export default function ProductThreads() {
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
                      Now experience a facelift
                      <br />
                      with safe and effective threads.
                    </h2>
                    <p className="font-18 mb-3 ">
                      Lorem ipsum dolor sit amet, mono regeneration <br />{" "}
                      threads. Nulla tellus, vestibulum, orci fusce. Molestie{" "}
                      <br /> cras condimentum semper sapien.
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
      <div className="container-xl">
        <div className="container-fluid">
          <div className="pt-sec-2 ">
            <p className="font-18 font-weight-normal my-5">
              {" "}
              Regeneration threads
            </p>
            <div className="row g-5 d-none d-md-flex">
              <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                <div className="prod-thread">
                  <img src={img2} className="img-fluid" />
                  <div className="prod-thread-text mt-4">
                    <p>PDO carving</p>
                    <p>Hilos Mono de regeneración</p>
                    <p>Measurements(Gauge/mm) : 19/100</p>
                    <p>Needle type: W-Cannula, L -Cannul</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                <div className="prod-thread">
                  <img src={img2} className="img-fluid" />
                  <div className="prod-thread-text mt-4">
                    <p>PDO carving</p>
                    <p>Hilos Mono de regeneración</p>
                    <p>Measurements(Gauge/mm) : 19/100</p>
                    <p>Needle type: W-Cannula, L -Cannul</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                <div className="prod-thread">
                  <img src={img2} className="img-fluid" />
                  <div className="prod-thread-text mt-4">
                    <p>PDO carving</p>
                    <p>Hilos Mono de regeneración</p>
                    <p>Measurements(Gauge/mm) : 19/100</p>
                    <p>Needle type: W-Cannula, L -Cannul</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none py-5 px-2">
              <Slider {...settings}>
                <div>
                  <div className="row g-5">
                    <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                      <div className="prod-thread">
                        <img src={img2} className="img-fluid" />
                        <div className="prod-thread-text mt-4">
                          <p>PDO carving</p>
                          <p>Hilos Mono de regeneración</p>
                          <p>Measurements(Gauge/mm) : 19/100</p>
                          <p>Needle type: W-Cannula, L -Cannul</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row g-5">
                    <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                      <div className="prod-thread">
                        <img src={img2} className="img-fluid" />
                        <div className="prod-thread-text mt-4">
                          <p>PDO carving</p>
                          <p>Hilos Mono de regeneración</p>
                          <p>Measurements(Gauge/mm) : 19/100</p>
                          <p>Needle type: W-Cannula, L -Cannul</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row g-5">
                    <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                      <div className="prod-thread">
                        <img src={img2} className="img-fluid" />
                        <div className="prod-thread-text mt-4">
                          <p>PDO carving</p>
                          <p>Hilos Mono de regeneración</p>
                          <p>Measurements(Gauge/mm) : 19/100</p>
                          <p>Needle type: W-Cannula, L -Cannul</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="pt-sec-3 py-7">
            <div className="custom-table-container">
              <table className="table-custom " style={{ minWidth: 1200 }}>
                <thead>
                  <th style={{ width: 300 }}>
                    <span className="font-18 font-weight-500">Comparison</span>
                  </th>
                  <th className="border-dark">pdo</th>
                  <th>Plla</th>
                  <th>pcl</th>
                  <th>P(la/cl)</th>
                </thead>
                <tbody>
                  <tr>
                    <td>duracion</td> <td>6 meses</td> <td>6 meses</td>{" "}
                    <td>6 meses</td> <td>6 meses</td>
                  </tr>
                  <tr>
                    <td>punto de fusion</td> <td>110 ~ 115 C</td>{" "}
                    <td>110 ~ 115 C</td> <td>110 ~ 115 C</td>{" "}
                    <td>110 ~ 115 C</td>
                  </tr>
                  <tr>
                    <td>Ventajas</td> <td>Tightening Brightening</td>{" "}
                    <td>Seguro Gran Efecto</td>{" "}
                    <td>
                      <span className="d-block mb-3">Toque Suave y facil</span>{" "}
                      <span className="d-block ">Larga Duracion</span>
                    </td>{" "}
                    <td rowspan="2">
                      <span className="mb-3 d-block">
                        Tightening Brightening
                      </span>{" "}
                      <span className="d-block mb-3">Seguro Gran Efecto</span>
                      <span className="d-block mb-3">Muy Flexible</span>{" "}
                      <span className="d-block">Debil al color</span>
                    </td>
                  </tr>
                  <tr>
                    <td>desventajas</td> <td>Corta duration</td>{" "}
                    <td>Irritacion Fragilidad</td>{" "}
                    <td>
                      <span className="d-block mb-3">Muy Flexible</span>{" "}
                      <span className="d-block">Debil al color</span>{" "}
                    </td>{" "}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-sec-4 bg-light py-7 text-center">
        <div className="container-xl">
          <div className="container-fluid">
            <p className="font-18 mb-4"> Forma dentada tallada en el hilo </p>
            <h2 className="font-48 mb-5">Carving Cog (Esculpido)</h2>
            <img src={img3} className="img-fluid-2 mb-5" />
            <p className="font-18">
              Forma de tallado, se eliminan las partes innecesarias sin calor
              <br />
              Esta hecho para mantener las caracterfsticas originales de la
              sutura.
            </p>
            <div className="row pt-7 ">
              <div className="col-12 col-md-4 text-center">
                <p className="font-18">
                  Cutting Cog <br />
                  Se forma el diente cortando el <br /> hilo en forma de espina{" "}
                </p>
              </div>
              <div className="col-12 col-md-4 text-center">
                <p className="font-18">
                  {" "}
                  Molding Cog <br />
                  Se da forma con presi6n y calor{" "}
                </p>
              </div>
              <div className="col-12 col-md-4 text-center">
                <p className="font-18">
                  Carving Cog <br />
                  Se da la forma tallando el hilo <br /> eliminando las partes
                  innecesarias{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-sec-4 bg-light pb-7 text-center">
        <div className="container-xl">
          <div className="container-fluid">
            <div className="py-5">
              <h2 className="font-42 text-center">
                Want to ask the questions directly,
                <br />
                <span className="border-bottom-dark">Get in touch.</span>
              </h2>
            </div>
            <p className="font-24 text-center"> myemailbeleviemail@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
