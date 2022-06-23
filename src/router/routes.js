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
    name: "logout",
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
    name: "questionnaire",
    component: () => import("./views/questionnaire"),
  },{
    path: "/poll/:id",
    name: "poll",
    component: () => import("./views/poll"),
  },{
    path: "/poll",
    name: "poll",
    component: () => import("./views/poll"),
  },
];
