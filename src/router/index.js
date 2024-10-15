import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/local/auth/SignIn.vue"),
      meta: {
        title: "login",
        requiresAuth: false,
      },
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        title: "Home",
        requiresAuth: true,
      },
    },
    {
      path: "/users",
      name: "users",
      component: () => import("@/components/local/users/Users.vue"),
      meta: {
        title: "Users",
        requiresAuth: true,
      },
    },
    {
      path: "/Faq",
      name: "FAQ",
      component: () => import("@/components/local/FAQ/Faq.vue"),
      meta: {
        title: "FAQ",
        requiresAuth: true,
      },
    },
    {
      path: "/faq/:id",
      name: "faq-data",
      component: () => import("@/components/local/FAQ/FaqInfo.vue"),
      meta: {
        title: "FAQ Details",
        requiresAuth: true,
      },
    },
    {
      path: "/user/:id",
      name: "user-data",
      component: () => import("@/components/local/users/UserInfo.vue"),
      meta: {
        title: "Profile",
        requiresAuth: true,
      },
    },
    {
      path: "/roles",
      name: "roles",
      component: () => import("@/components/local/roles/Roles.vue"),
      meta: {
        title: "Roles",
        requiresAuth: true,
      },
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/components/local/settings/SystemSettings.vue"),
      meta: {
        title: "Settings",
        requiresAuth: true,
      },
    },
    {
      path: "/contact-settings",
      name: "contactSettings",
      component: () =>
        import("@/components/local/settings/ContactSettings.vue"),
      meta: {
        title: "Contacts Setting",
        requiresAuth: true,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: "Not Found",
        requiresAuth: true,
      },
    },
  ],
});

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "NDC Admin Panel";
  next();
});

router.beforeEach((to, from, next) => {
  let checkToken = document.cookie
    .split(";")
    .map((coki) => coki.split("="))
    .reduce(
      (acc, [key, val]) => ({
        ...acc,
        [key.trim()]: decodeURIComponent(val),
      }),
      {}
    )["Admin"];

  const isAuthenticated = JSON.parse(checkToken)["token"];
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else if (!to.meta.requiresAuth && isAuthenticated && to.path === "/login") {
    next("/");
  } else {
    next();
  }
});
export default router;
