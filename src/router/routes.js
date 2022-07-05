import store from "@/state/store";

export default [
  {
    path: "/",
    name: "website",
    component: () => import("./views/website/index"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./views/about/index"),
  },
  {
    path: "/social",
    name: "social",
    component: () => import("./views/social/index"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("./views/contact/index"),
  },
  {
    path: "/information",
    name: "information",
    component: () => import("./views/information/index"),
  },
  {
    path: "/informations",
    name: "informations",
    component: () => import("./views/information/information"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/account/login"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters["auth/loggedIn"]) {
          next({ name: "website" });
        } else {
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./views/account/register"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters["auth/loggedIn"]) {
          next({ name: "website" });
        } else {
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("./views/account/forgot-password"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters["auth/loggedIn"]) {
          next({ name: "website" });
        } else {
          next();
        }
      },
    },
  },
  {
    path: "/logout",
    name: "logouts",
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        store.dispatch("authfack/logout");
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        next(
          authRequiredOnPreviousRoute ? { name: "website" } : { ...routeFrom }
        );
      },
    },
  },
  {
    path: "/404",
    name: "404",
    component: require("./views/utility/404").default,
  },
  {
    path: "*",
    redirect: "404",
  },
  {
    path: "/logincode",
    name: "logincode",
    component: () => import("./views/account/loginCode"),
  },{
    path: "/questionnaire",
    name: "questionnaire",
    component: () => import("./views/questionnaire"),
  },{
    path: "/questionnaire/:id",
    name: "questionnaireId",
    component: () => import("./views/questionnaire"),
  },{
    path: "/poll/:id",
    name: "pollId",
    component: () => import("./views/poll"),
  },{
    path: "/poll",
    name: "poll",
    component: () => import("./views/poll"),
  },{
    path: "/profile",
    name: "profile",
    component: () => import("./views/profile"),
  },{
    path: "/logout",
    name: "logout",
    component: () => import("./views/website"),
  },{
    path: "/summary",
    name: "summary",
    component: () => import("./views/summary/index"),
  },{
    path: "/manual",
    name: "manual",
    component: () => import("./views/manual/index"),
  },{
    path: "/dashbord",
    name: "dashbord",
    component: () => import("./views/dashbord/index"),
  },{ 
    path: "/appove",
    name: "appove",
    component: () => import("./views/appove/index"),
  },{ 
    path: "/appove/:id",
    name: "appoveId",
    component: () => import("./views/appove/index"),
  },{ 
    path: "/appove/inbox",
    name: "appoveInbox",
    component: () => import("./views/appove/index"),
  },{ 
    path: "/appove/nextlevel",
    name: "appoveNextlevel",
    component: () => import("./views/appove/nextlevel"),
  },{ 
    path: "/appove/waiting",
    name: "appoveWaiting",
    component: () => import("./views/appove/waiting"),
  },{ 
    path: "/appove/backlog",
    name: "appoveBacklog",
    component: () => import("./views/appove/backlog"),
  },{ 
    path: "/appove/appove",
    name: "appoveAuto",
    component: () => import("./views/appove/appove"),
  }
];
