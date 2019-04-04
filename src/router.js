import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/meterdata",
      name: "meterdata",
      component: () => import("./views/MeterData.vue")
    },
    {
      path: "/loggerconfig",
      name: "loggerconfig",
      component: () => import("./views/LoggerConfig.vue")
    },
    {
      path: "/allsensor",
      name: "allsensor",
      component: () => import("./views/AllSensor.vue")
    },
    {
      path: "/allmeter",
      name: "allmeter",
      component: () => import("./views/AllMeter.vue")
    }
  ]
});
