import React from "react";
import img1 from "../assets/images/product/img-1.png";
import Slider from "react-slick";

export default function Product() {
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
          arrows: false,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-light" style={{ overflow: "hidden" }}>
        <div className="container-xl">
          <div className="container-fluid">
            <div className="row py-7 product-main">
              <div className="col-12 col-md-6 product-main-slider">
                <Slider {...settings}>
                  <div>
                    <img src={img1} className="img-fluid" alt="prod-img1" />
                  </div>
                  <div>
                    <img src={img1} className="img-fluid" alt="prod-img2" />
                  </div>
                  <div>
                    <img src={img1} className="img-fluid" alt="prod-img3" />
                  </div>
                </Slider>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="px-0 py-5 py-md-3">
                  <small className="font-12">
                    Hyaloronic acid dermal filler
                  </small>
                  <h3 className="my-4">Hermosa Soft</h3>
                  <p>
                    Excellent traction and lixation oy carved-cog. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Magnis
                    malesuada sollicitudin eu diam ut scelerisque vitae rhoncus
                    aliquam. Nisi, suspendisse rhoncus libero adipiscing diam.
                  </p>
                  <div className="d-flex my-4 flex-wrap ">
                      <a className="btn-custom-filled mb-4 me-4" role="button">Cheeks</a>
                      <a className="btn-custom-filled mb-4 me-4" role="button">Eye bags</a>
                      <a className="btn-custom-filled mb-4 me-4" role="button">Bone part</a>

                  </div>
                  <div className="row gy-4 my-3">
                      <div className="col-6 color-default-light"><p className="white-space-wrap">Measurement(Gauge/mm)</p> </div>
                      <div className="col-6 color-default-light"><p className="white-space-wrap">19/100mm</p></div>

                      <div className="col-6 color-default-light"><p className="white-space-wrap">Packing</p> </div>

                      <div className="col-6 color-default-light"><p className="white-space-wrap">20ea/pouch</p> </div>

                  </div>
                  <h4 className="font-30 my-5">Base Price: $456</h4>

                  <a className="btn-custom" role="button"> Inquire</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
