import React from "react";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import globe from "../assets/images/others/globe.png";
import DNAView from '../Views/DNAView'

import routes from "../routes";

export default function Header() {
  const scrollRef = React.useRef(null);
  const [navClass, setNavClass] = React.useState(null);

  const { x, y } = useWindowScroll(scrollRef);
  let location = useLocation();
  React.useEffect(() => {
    if (y > 85) {
      setNavClass(" nav-sticky");
    } else {
      setNavClass("");
    }
  }, [y]);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      var dnaView = document.getElementById("desktopDnaView")
      if (dnaView) {
        if (window.innerWidth <= 980) {
          dnaView.style.opacity = 1
        }
        else {
          dnaView.style.opacity = 0
        }
      }
    })
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg  px-3 pb-0 pt-0 fixed-top   ${navClass ? navClass : "bg-transparent"
        }  `}
      ref={scrollRef}
    >
      <div className="container-xl p-0 overflow-hidden">
        <div className=" bb bt w-100">
          <div className="navbar py-0">
            <Link to="/" className="navbar-brand">
              {" "}
              <img src={logo} alt="nav-logo" width="auto" />
            </Link>
            <div
              onClick={(e) => {
                var view = document.getElementById("mobileDnaView")
                view.style.opacity = e.target.getAttribute('aria-expanded') == 'true' ? 1 : 0
              }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMain"
              aria-controls="navbarMain"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
            </div>
            <div className="collapse navbar-collapse" id="navbarMain">
              <div id="mobileDnaView" style={{ opacity: window.innerWidth <= 980 ? 1 : 0, pointerEvents: "none" }}>
                <DNAView view="mobile" />
              </div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {routes.slice(0, 5).map((route) => {
                  const active = route.path === location.pathname;
                  return (
                    <li className="nav-item">
                      <Link
                        className={`nav-link nav-link-custom ${active && "active"
                          }`}
                        aria-current="page"
                        to={route.path}
                      >
                        {route.name}
                      </Link>
                    </li>
                  );
                })}

                {/* <li className="nav-item">
                  <Link className="nav-link nav-link-custom" to="/our-mission">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-custom" to="/course">
                    Cursos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-custom" to="#">
                    About-Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-custom" to="#">
                    Contact
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link nav-link-custom" to="#">
                    <img src={globe} /> En
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
