import React from "react";
import img1 from "../assets/images/courses-desktop/img-1.png";
import img2 from "../assets/images/courses-desktop/img-2.png";
import { Link } from "react-router-dom";
import img3 from "../assets/images/courses-desktop/img-3.png";
import EllipseIcon from "../assets/icons/Ellipse";



export default function CoursesDesktop() {
  return (
    <div className="bg-light" style={{ overflow: "hidden" }}>
      <div className="container-xl">
        <div className="container-fluid">
          <div className="course-d-sec-1 py-7 text-center">
            <img src={img1} className="img-fluid-2" />
            <h1 className="font-48 my-5">
              Hilos Tensores de
              <br />
              Traccion Con Canula de
              <br />
              Third Generacion
            </h1>
            <div className="d-flex align-items-center justify-content-center flex-wrap">
              <span className="px-5 py-2">Foxy Eyes</span>
              <span className="px-5 py-2">Cuello</span>
              <span className="px-5 py-2">Linea Nasolabial</span>
              <span className="px-5 py-2">Linea mandibula</span>
            </div>
          </div>

          <div className="course-d-sec-2 py-7">
            <div className="row gx-3 flex-md-row-reverse flex-row">
              <div className="col-12 col-lg-6 text-center">
                <img src={img2} alt="product image" className="img-fluid-2" />
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="section-heading-normal">
                  {" "}
                  You will learn how to work with clients, theory of aging,
                  differences between each product, and the mechanism involving
                  the tensioning threads.{" "}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 justify-content-center d-flex">
                <div>
                  <p className="font-20 text-start font-weight-300 mb-3">
                    Going through all the important <br /> stages of anti aging,
                    and legal <br /> aspects with regards of tensioning threads.
                  </p>
                  <Link to="/contact" className="linkName">
                    <a class="btn-custom rounded-pill ">Inquire</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="course-d-sec-3 py-7">
            <div className="row">
              <div className="col-12 col-lg-7">
                <h2 className="font-48 mb-4 font-weight-light">
                  Courses table of contents
                </h2>
                <p className="font-weight-light">
                  Duration - Theoretical part, depending on the state of the{" "}
                  <br /> contingency to date...
                </p>
                <div className="intro-header border-dark-light d-flex  align-items-center justify-content-center py-2 px-3">
                  <EllipseIcon />{" "}
                  <p className="font-24 d-inline">
                    Introduction to aesthetic medicine
                  </p>
                </div>
                <div className="detail-list">
                  <div className="detail-list-item">
                    <p>Legal aspects</p>
                    <p>Duration: TBA</p>
                  </div>
                  <div className="detail-list-item">
                    <p>Theory of aging</p>
                    <p>Duration: TBA</p>
                  </div>{" "}
                  <div className="detail-list-item">
                    <p>Facial anatomy</p>
                    <p>Duration: TBA</p>
                  </div>{" "}
                  <div className="detail-list-item">
                    <p>Beauty canons s</p>
                    <p>Duration: TBA</p>
                  </div>{" "}
                  <div className="detail-list-item">
                    <p>History and clinical file</p>
                    <p>Duration: TBA</p>
                  </div>{" "}
                  <div className="detail-list-item">
                    <p>How to take a case from start to finish</p>
                    <p>Duration: TBA</p>
                  </div>
                </div>

                <div className="intro-header border-dark-light d-flex  align-items-center justify-content-center py-2 px-3 mt-5">
                  <EllipseIcon />{" "}
                  <p className="font-24 d-inline">
                    Theory of tensioning threads
                  </p>
                </div>
                <div className="detail-list">
                  <div className="detail-list-item">
                    <p>What are tension threads?</p>
                    <p>Duration: TBA</p>
                  </div>
                  <div className="detail-list-item">
                    <p>Types of tensioning threads.</p>
                    <p>Duration: TBA</p>
                  </div>{" "}
                  <div className="detail-list-item">
                    <p>Brands and differences between them.</p>
                    <p>Duration: TBA</p>
                  </div>{" "}
                  <div className="detail-list-item">
                    <p>Mechanism of action.</p>
                    <p>Duration: TBA</p>
                  </div>{" "}
                  <div className="detail-list-item">
                    <p>Preparation and storage.</p>
                    <p>Duration: TBA</p>
                  </div>{" "}
                  <div className="detail-list-item">
                    <p>
                      Application of traction threads with cannula (“foxy eyes”
                      eyebrows, neck, jaw line and nasolabial line).
                    </p>
                    <p>Duration: TBA</p>
                  </div>
                  <div className="detail-list-item">
                    <p>
                      Contraindications, complications and how to approach them.
                    </p>
                    <p>Duration: TBA</p>
                  </div>
                </div>
                <Link to="/contact" className="linkName">
                  <a class="btn-custom rounded-pill  mt-5">Sign Up</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="course-d-sec-4 py-7">
            <div className="row g-5 justify-content-center">
              <div className="col-12 col-lg-6 text-center">
                <img src={img3} className="img-fluid-2" />
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="font-48 mb-4">Running the course</h2>

                <p className="mb-3">
                  Theoretical part, depending on the state of the contingency to
                  date, will be via live webinar the day before or in person on
                  the same day as the practical part.
                </p>

                <p className="mb-3">
                  The practice cycle begins with a demonstration of each
                  procedure by Dr. Romina Ferrera (informed consent, patient
                  preparation, clinical analysis, marking, photographic record
                  and execution of treatment)
                </p>

                <p className="mb-3">
                  Each student will apply 5 tension threads on one side of the
                  face (eyebrows "foxy eyes", neck, mandibular line and
                  nasolabial line), according to the needs of the patient.
                </p>
                <p className="mb-3">
                  Closing of the practical cycle, a round table is opened to
                  clarify doubts.
                </p>
                <p className="mb-3">
                  * Aesthetic and Antiaging will be the one who provides all the
                  supplies and implements necessary for the execution of the
                  course, each student will be the one in charge of getting
                  their patient (s) for the course, patients pay $ 50,000 per
                  procedure per transfer prior to the course to ensure their
                  assistance, in case of not having patients or having
                  complications to get notice in advance.
                </p>
              </div>
            </div>
          </div>
          <div className="course-d-sec-5 py-7">
            <div className="row g-5 ">
              <div className="col-12 col-lg-6">
                <h2 className="font-48 mb-4">Continuing education</h2>

                <p className="mb-3">
                  Once the course is finished, if required, all our students
                  have the facility to take their first patients to the Beyou
                  Clinic (prior coordination) to be able to carry out the
                  treatment with the supervision of Dra Romina Ferrera and thus
                  develop the necessary confidence to then to be able to execute
                  the procedures autonomously.
                </p>
                <p className="font-weight-400">
                  The cost per patient will be $ 45,000 for each treatment.
                </p>
              </div>
            </div>
          </div>
          <div className="course-d-sec-6 py-7">
            <div className="row g-5 justify-content-center">
              <div className="col-12 col-lg-6 text-center">
                <img src={img3} className="img-fluid-2" />
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="font-48 mb-4">
                  Dr. Romina Ferrera Course leader
                </h2>

                <p className="mb-3">
                  Dr. Romina Ferrera is the director and founder of a highly acclaimed Clinica BeYou. She is a specialist in facial aesthetics since 2013 and had acclaimed nearly a decade of experience through long term practice. She has finished Universidad Mayor, and got her post title oral ssurgeon in Universidad del Desarrollo (German Clinic)
                </p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
