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
      path: "/jobs",
      name: "Jobs",
      component: () => import("@/components/local/Jobs/Jobs.vue"),
      meta: {
        title: "Jobs",
        requiresAuth: true,
      },
    },
    {
      path: "/job/:id",
      name: "JobInfo",
      component: () => import("@/components/local/Jobs/JobInfo.vue"),
      meta: {
        title: "Job Info",
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
      path: "/CustomerReview",
      name: "customer",
      component: () =>
        import("@/components/local/customerReview/CustomerReview.vue"),
      meta: {
        title: "Customer Review",
        requiresAuth: true,
      },
    },
    {
      path: "/customer/:id",
      name: "customerInfo",
      component: () =>
        import("@/components/local/customerReview/CustomerReviewInfo.vue"),
      meta: {
        title: "Customer Info",
        requiresAuth: true,
      },
    },

    {
      path: "/mainSlider",
      name: "MainSlider",
      component: () => import("@/components/local/mainSlider/MainSlider.vue"),
      meta: {
        title: "Main Slider",
        requiresAuth: true,
      },
    },
    {
      path: "/slider/:id",
      name: "SliderInfo",
      component: () =>
        import("@/components/local/mainSlider/MainSliderInfo.vue"),
      meta: {
        title: "Slider Info",
        requiresAuth: true,
      },
    },
    {
      path: "/mainResources",
      name: "MainResources",
      component: () =>
        import("@/components/local/mainResources/MainResource.vue"),
      meta: {
        title: "Main Resources",
        requiresAuth: true,
      },
    },
    {
      path: "/resource/:id",
      name: "ResourceInfo",
      component: () =>
        import("@/components/local/mainResources/MainResourceInfo.vue"),
      meta: {
        title: "Resource Info",
        requiresAuth: true,
      },
    },

    {
      path: "/Service",
      name: "servicePage",
      component: () => import("@/components/local/services/Services.vue"),
      meta: {
        title: "Services",
        requiresAuth: true,
      },
    },
    {
      path: "/service/:id",
      name: "serviceInfo",
      component: () => import("@/components/local/services/ServicesInfo.vue"),
      meta: {
        title: "Service Details",
        requiresAuth: true,
      },
    },

    {
      path: "/packages",
      name: "packagePage",
      component: () => import("@/components/local/packages/Package.vue"),
      meta: {
        title: "Packages",
        requiresAuth: true,
      },
    },
    {
      path: "/package/:id",
      name: "packageInfo",
      component: () => import("@/components/local/packages/PackesInfo.vue"),
      meta: {
        title: "Package Details",
        requiresAuth: true,
      },
    },

    {
      path: "/contact-us",
      name: "ContactUs",
      component: () => import("@/components/local/contact_us/ContactUs.vue"),
      meta: {
        title: "Contact Us",
        requiresAuth: true,
      },
    },
    {
      path: "/contactMessage/:id",
      name: "MessageInfo",
      component: () =>
        import("@/components/local/contact_us/ContactUsInfo.vue"),
      meta: {
        title: "Contact Us Info",
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
      path: "/about_us",
      name: "aboutUs",
      component: () => import("@/components/local/about_us/AboutUs.vue"),
      meta: {
        title: "About Us",
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
