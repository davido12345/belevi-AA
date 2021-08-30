import Homepage from "./Views/Homepage";
import OurMission from "./Views/OurMission";
import CoursePage from "./Views/CoursePage";
import Contact from "./Views/Contact";
import CoursesDesktop from "./Views/CoursesDesktop";
import ProductThreads from "./Views/ProductThreads";
import ProductItem from "./Views/ProductItem";
import Product from "./Views/Product";
import Product2 from "./Views/Product2";


const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/our-mission",
    name: "Our Mission",
    component: OurMission,
  },
  {
    path: "/course",
    name: "Course",
    component: CoursePage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/product2",
    name: "Products",
    component: Product2,
  },
  {
    path: "/courses-desktop",
    name: "Course Desktop",
    component: CoursesDesktop,
  },
  {
    path: "/product/threads",
    name: "Product Threads",
    component: ProductThreads,
  },
  {
    path: "/product/item",
    name: "Product Item",
    component: ProductItem,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  }
];

export default dashboardRoutes;
