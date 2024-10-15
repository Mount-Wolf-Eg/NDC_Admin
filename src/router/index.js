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
      path: "/user/:id",
      name: "user-data",
      component: () => import("@/components/local/users/UserInfo.vue"),
      meta: {
        title: "Profile",
        requiresAuth: true,
      },
    },

    {
      path: "/partner",
      name: "partners",
      component: () => import("@/components/local/partners/Partners.vue"),
      meta: {
        title: "Partners",
        requiresAuth: true,
      },
    },
    {
      path: "/partner/:id",
      name: "partner-data",
      component: () => import("@/components/local/partners/PartnerInfo.vue"),
      meta: {
        title: "partner",
        requiresAuth: true,
      },
    },
    {
      path: "/successMetrics",
      name: "success-metrics",
      component: () =>
        import("@/components/local/success_metrics/SuccessMetrics.vue"),
      meta: {
        title: "Success Metrics",
        requiresAuth: true,
      },
    },
    {
      path: "/success-metrics/:id",
      name: "SuccessInfo",
      component: () =>
        import("@/components/local/success_metrics/SuccessMetricsInfo.vue"),
      meta: {
        title: "Success Metrics",
        requiresAuth: true,
      },
    },
    {
      path: "/achievements",
      name: "achievement",
      component: () =>
        import("@/components/local/achievements/Achievement.vue"),
      meta: {
        title: "Achievements",
        requiresAuth: true,
      },
    },
    {
      path: "/achievement/:id",
      name: "achievementInfo",
      component: () =>
        import("@/components/local/achievements/AchievementInfo.vue"),
      meta: {
        title: "Achievements Info",
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
