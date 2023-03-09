const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "compare",
        name: "comparanator",
        component: () => import("pages/ComparanatorPage.vue"),
      },
      {
        path: "compare-alt1",
        name: "comparanatorAlt1",
        component: () => import("pages/ComparanatorAlt1.vue"),
      },
      {
        path: "pwr-simulator",
        name: "pwrSim",
        component: () => import("pages/PWRSim.vue"),
      },
      {
        path: "decay-chains",
        name: "decayChains",
        component: () => import("pages/DecayChains.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
