import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Event from "../views/Event.vue";
import Poland from "../views/Poland.vue";
import Usa from "../views/Usa.vue";
import OtherUniversities from "../views/OtherUniversities.vue";
import Cananda from "../views/Cananda.vue";
import Gallery from "../views/Gallery.vue";
import Test from "../views/Test.vue";
import Modal from "../views/Modal.vue";
import Physical_education_fair from "../views/Physical_education_fair.vue"
import Product from "../components/Product.vue";
import PageNotFound from "../views/PageNotFound.vue";
// import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Product",
    name: "Product",
    component: Product,
  },
  {
    path: "/Physical_education_fair",
    name: "Physical_education_fair",
    component: Physical_education_fair,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/Usa",
    name: "Usa",
    component: Usa,
  },
  {
    path: "/Event",
    name: "Event",
    component: Event,
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/Cananda",
    name: "Cananda",
    component: Cananda,
  },
  {
    path: "/Test",
    name: "Test",
    component: Test,
  },
  {
    path: "/OtherUniversities",
    name: "OtherUniversities",
    component: OtherUniversities,
  },
  {
    path: "/Poland",
    name: "Poland",
    component: Poland,
  },
  {
    path: "/Modal",
    name: "Modal",
    component: Modal,
  },

  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  duplicateNavigationPolicy: "ignore",
  linkActiveClass: "active",
  scrollBehavior: () => ({
    x: 0,
    y: 0,
  }),
});

export default router;
