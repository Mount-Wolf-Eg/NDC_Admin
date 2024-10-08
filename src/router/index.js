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
  const { isLoggedin } = storeToRefs(useAuthStore());
  const isAuthenticated = isLoggedin.value;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else if (!to.meta.requiresAuth && isAuthenticated && to.path === "/login") {
    next("/");
  } else {
    next();
  }
});
export default router;
