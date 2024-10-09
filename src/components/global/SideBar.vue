<template>
  <div class="side-bar">
    <div
      class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-white min-vh-100 p-5"
      style="justify-content: space-between !important"
    >
      <!-- brand logo -->
      <li
        to="/"
        class="d-flex align-items-center pb-3 me-md-auto text-white text-decoration-none w-100"
        style="margin-block-end: 1rem; cursor: pointer"
        @click="handlRes()"
      >
        <div class="icon d-inline center-row justify-content-center w-100">
          <div
            class="center-row align-items-center justify-content-center nav-btn"
          >
            <div>NAVIGATION</div>
            <svg
              style="width: 1.6rem; height: 1.4rem; margin-inline-start: auto"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.64465 11.4958L2.9309 6.78206L7.64465 2.06832C8.11845 1.59452 8.11845 0.829141 7.64465 0.355337C7.17084 -0.118467 6.40547 -0.118467 5.93166 0.355337L0.355354 5.93165C-0.118451 6.40545 -0.118451 7.17083 0.355354 7.64463L5.93166 13.2209C6.40547 13.6947 7.17084 13.6947 7.64465 13.2209C8.1063 12.7471 8.11845 11.9696 7.64465 11.4958Z"
                fill="#464A61"
              />
              <path
                d="M15.6446 11.4958L10.9309 6.78206L15.6446 2.06832C16.1185 1.59452 16.1185 0.829141 15.6446 0.355337C15.1708 -0.118467 14.4055 -0.118467 13.9317 0.355337L8.35535 5.93165C7.88155 6.40545 7.88155 7.17083 8.35535 7.64463L13.9317 13.2209C14.4055 13.6947 15.1708 13.6947 15.6446 13.2209C16.1063 12.7471 16.1185 11.9696 15.6446 11.4958Z"
                fill="#464A61"
              />
            </svg>
          </div>
        </div>
        <svg
          class="res d-none"
          style="
            width: 1.6rem;
            height: 1.4rem;
            transform: scaleX(-1);
            margin-inline-start: auto;
          "
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.64465 11.4958L2.9309 6.78206L7.64465 2.06832C8.11845 1.59452 8.11845 0.829141 7.64465 0.355337C7.17084 -0.118467 6.40547 -0.118467 5.93166 0.355337L0.355354 5.93165C-0.118451 6.40545 -0.118451 7.17083 0.355354 7.64463L5.93166 13.2209C6.40547 13.6947 7.17084 13.6947 7.64465 13.2209C8.1063 12.7471 8.11845 11.9696 7.64465 11.4958Z"
            fill="#464A61"
          />
          <path
            d="M15.6446 11.4958L10.9309 6.78206L15.6446 2.06832C16.1185 1.59452 16.1185 0.829141 15.6446 0.355337C15.1708 -0.118467 14.4055 -0.118467 13.9317 0.355337L8.35535 5.93165C7.88155 6.40545 7.88155 7.17083 8.35535 7.64463L13.9317 13.2209C14.4055 13.6947 15.1708 13.6947 15.6446 13.2209C16.1063 12.7471 16.1185 11.9696 15.6446 11.4958Z"
            fill="#464A61"
          />
        </svg>
      </li>

      <!-- sidebar list start -->
      <ul
        class="w-100 nav nav-pills flex-column mb-auto mb-0 align-items-center align-items-sm-start gap-3"
        id="menu"
      >
        <!-- item -->
        <li>
          <a href="#" class="nav-link align-middle px-0">
            <span class="icon d-inline nav-item-btn">Menus</span>
            <span class="res d-none nav-item-btn">dddddddd</span>
          </a>
        </li>
        <!-- dropdown list -->
        <li>
          <a
            href="#submenu1"
            data-bs-toggle="collapse"
            class="nav-link px-0 align-middle"
          >
            <span class="icon d-inline nav-item-btn">Dashboard</span>
            <span class="res d-none nav-item-btn">ddd</span>
          </a>
          <ul
            class="collapse nav flex-column mx-2"
            id="submenu1"
            data-bs-parent="#menu"
          >
            <li class="w-100">
              <a href="#" class="nav-link px-0">
                <span class="mx-2 icon d-inline nav-item-btn-sub">item</span>
                <span class="mx-2 res d-none nav-item-btn-sub">dddddddd</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-0">
                <span class="mx-2 icon d-inline nav-item-btn-sub">item2</span>
                <span class="mx-2 res d-none nav-item-btn-sub">dddddddd</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- item -->
        <li>
          <a href="#" class="nav-link px-0 align-middle">
            <i class="fs-4 bi-table"></i>
            <span class="icon d-inline nav-item-btn">Order</span>
            <span class="res d-none nav-item-btn">dddddddd</span>
          </a>
        </li>
        <!-- dropdown list -->
        <li>
          <a
            href="#submenu2"
            data-bs-toggle="collapse"
            class="nav-link px-0 align-middle"
          >
            <span class="icon d-inline nav-item-btn">dropdown</span>
            <span class="res d-none nav-item-btn">dddddddd</span>
          </a>
          <ul
            class="collapse nav flex-column mx-2"
            id="submenu2"
            data-bs-parent="#menu"
          >
            <li class="w-100">
              <a href="#" class="nav-link px-0">
                <span class="icon d-inline nav-item-btn-sub">Menu</span>
                <span class="res d-none nav-item-btn-sub">dddddddd</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-0">
                <span class="icon d-inline nav-item-btn-sub">Menu</span>
                <span class="res d-none nav-item-btn-sub">dddddddd</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- item -->
        <li
          @click="router.push({ name: 'settings' })"
          class="d-flex justify-content-center align-items-center"
        >
          <a href="#" class="nav-link px-0 align-middle">
            <span class="icon d-inline nav-item-btn">
              <svg
                style="width: 1.6rem; height: 1.7rem"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.466 3.1297C13.478 3.27949 13.407 3.44459 13.3599 3.61501C13.0274 4.81864 13.7089 5.94438 14.9279 6.20933C15.5245 6.33915 15.7953 6.60078 15.8935 7.19593C16.0335 8.04407 16.0434 8.89553 15.8756 9.74232C15.7588 10.3308 15.498 10.5845 14.9213 10.697C14.0089 10.8761 13.4382 11.4432 13.2378 12.3546C13.1555 12.7281 13.2278 13.0809 13.3406 13.4324C13.5284 14.0163 13.4328 14.3664 12.957 14.7519C12.3691 15.2285 11.7281 15.6187 11.0253 15.9023C10.4944 16.116 10.1261 16.0301 9.74523 15.6067C8.71731 14.4643 7.41334 14.4909 6.42458 15.6739C6.09809 16.0647 5.71054 16.1859 5.24005 16.0154C4.40126 15.7105 3.6368 15.2692 2.95263 14.694C2.56044 14.3644 2.48943 13.9717 2.69316 13.4005C3.10791 12.2375 2.55181 11.0445 1.42502 10.6903C1.26775 10.6411 1.10251 10.6158 0.93993 10.5845C0.471429 10.4939 0.188072 10.1997 0.109767 9.74499C-0.050824 8.80832 -0.0382156 7.86765 0.1675 6.93697C0.253768 6.54752 0.51589 6.30187 0.900777 6.19935C1.0607 6.15674 1.22727 6.1421 1.38653 6.09816C2.50868 5.78926 3.13379 4.6329 2.78938 3.51049C2.56442 2.7762 2.66197 2.47929 3.27182 2.0226C3.84251 1.59521 4.46165 1.25635 5.12525 1.00005C5.6621 0.793011 6.02244 0.877558 6.40865 1.29497C7.36025 2.32484 8.64166 2.32417 9.59393 1.29363C9.97218 0.884215 10.3332 0.795008 10.8468 0.988734C11.6504 1.2923 12.3804 1.72436 13.046 2.26825C13.3094 2.48328 13.4667 2.74824 13.4647 3.1297H13.466ZM7.98669 11.1217C9.39219 11.139 10.6106 9.93073 10.6305 8.49942C10.6504 7.08809 9.44196 5.86249 8.01788 5.84785C6.60508 5.83387 5.39202 7.03616 5.37344 8.4688C5.35552 9.87813 6.56327 11.1044 7.98669 11.1217Z"
                  fill="#464A61"
                />
              </svg>
              Settings
            </span>
            <span class="res d-none nav-item-btn">
              <svg
                style="width: 2rem; height: 2rem"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.466 3.1297C13.478 3.27949 13.407 3.44459 13.3599 3.61501C13.0274 4.81864 13.7089 5.94438 14.9279 6.20933C15.5245 6.33915 15.7953 6.60078 15.8935 7.19593C16.0335 8.04407 16.0434 8.89553 15.8756 9.74232C15.7588 10.3308 15.498 10.5845 14.9213 10.697C14.0089 10.8761 13.4382 11.4432 13.2378 12.3546C13.1555 12.7281 13.2278 13.0809 13.3406 13.4324C13.5284 14.0163 13.4328 14.3664 12.957 14.7519C12.3691 15.2285 11.7281 15.6187 11.0253 15.9023C10.4944 16.116 10.1261 16.0301 9.74523 15.6067C8.71731 14.4643 7.41334 14.4909 6.42458 15.6739C6.09809 16.0647 5.71054 16.1859 5.24005 16.0154C4.40126 15.7105 3.6368 15.2692 2.95263 14.694C2.56044 14.3644 2.48943 13.9717 2.69316 13.4005C3.10791 12.2375 2.55181 11.0445 1.42502 10.6903C1.26775 10.6411 1.10251 10.6158 0.93993 10.5845C0.471429 10.4939 0.188072 10.1997 0.109767 9.74499C-0.050824 8.80832 -0.0382156 7.86765 0.1675 6.93697C0.253768 6.54752 0.51589 6.30187 0.900777 6.19935C1.0607 6.15674 1.22727 6.1421 1.38653 6.09816C2.50868 5.78926 3.13379 4.6329 2.78938 3.51049C2.56442 2.7762 2.66197 2.47929 3.27182 2.0226C3.84251 1.59521 4.46165 1.25635 5.12525 1.00005C5.6621 0.793011 6.02244 0.877558 6.40865 1.29497C7.36025 2.32484 8.64166 2.32417 9.59393 1.29363C9.97218 0.884215 10.3332 0.795008 10.8468 0.988734C11.6504 1.2923 12.3804 1.72436 13.046 2.26825C13.3094 2.48328 13.4667 2.74824 13.4647 3.1297H13.466ZM7.98669 11.1217C9.39219 11.139 10.6106 9.93073 10.6305 8.49942C10.6504 7.08809 9.44196 5.86249 8.01788 5.84785C6.60508 5.83387 5.39202 7.03616 5.37344 8.4688C5.35552 9.87813 6.56327 11.1044 7.98669 11.1217Z"
                  fill="#464A61"
                />
              </svg>
            </span>
          </a>
        </li>
      </ul>
      <!-- sidebar list end -->

      <!-- logout button -->
      <button
        @click="useAuthStore().logOut()"
        class="icon d-inline mb-auto mx-auto nav-item-btn"
        style="
          background-color: var(--col-bg);
          border-radius: 50%;
          padding: 2rem;
        "
      >
        <svg
          style="
            width: 2.4rem;
            height: 2.4rem;
            min-width: 12px;
            min-height: 12px;
          "
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.01247 2.69991C3.66436 2.69991 3.3305 2.8382 3.08435 3.08435C2.8382 3.3305 2.69991 3.66436 2.69991 4.01247V19.9875C2.69991 20.3356 2.8382 20.6695 3.08435 20.9156C3.3305 21.1618 3.66436 21.3001 4.01247 21.3001H10.6687C11.4143 21.3001 12.0187 21.9045 12.0187 22.65C12.0187 23.3956 11.4143 24 10.6687 24H4.01247C2.94829 24 1.92771 23.5773 1.17522 22.8248C0.422741 22.0723 0 21.0517 0 19.9875V4.01247C0 2.9483 0.422741 1.92771 1.17522 1.17522C1.92771 0.422741 2.9483 0 4.01247 0H10.6687C11.4143 0 12.0187 0.604397 12.0187 1.34996C12.0187 2.09552 11.4143 2.69991 10.6687 2.69991H4.01247ZM16.3705 5.72042C16.8976 5.19322 17.7524 5.19322 18.2796 5.72042L23.6046 11.0454C24.1318 11.5726 24.1318 12.4274 23.6046 12.9546L18.2796 18.2796C17.7524 18.8068 16.8976 18.8068 16.3705 18.2796C15.8433 17.7524 15.8433 16.8976 16.3705 16.3705L19.391 13.35H9.33749C8.59193 13.35 7.98753 12.7456 7.98753 12C7.98753 11.2544 8.59193 10.65 9.33749 10.65H19.391L16.3705 7.62954C15.8433 7.10235 15.8433 6.24761 16.3705 5.72042Z"
            fill="#464A61"
          />
        </svg>
      </button>
      <button
        @click="useAuthStore().logOut()"
        class="res d-none mb-auto mx-auto nav-item-btn"
        style="
          background-color: var(--col-bg);
          border-radius: 50%;
          padding: 1rem;
        "
      >
        <svg
          style="
            width: 2.4rem;
            height: 2.4rem;
            min-width: 12px;
            min-height: 12px;
          "
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.01247 2.69991C3.66436 2.69991 3.3305 2.8382 3.08435 3.08435C2.8382 3.3305 2.69991 3.66436 2.69991 4.01247V19.9875C2.69991 20.3356 2.8382 20.6695 3.08435 20.9156C3.3305 21.1618 3.66436 21.3001 4.01247 21.3001H10.6687C11.4143 21.3001 12.0187 21.9045 12.0187 22.65C12.0187 23.3956 11.4143 24 10.6687 24H4.01247C2.94829 24 1.92771 23.5773 1.17522 22.8248C0.422741 22.0723 0 21.0517 0 19.9875V4.01247C0 2.9483 0.422741 1.92771 1.17522 1.17522C1.92771 0.422741 2.9483 0 4.01247 0H10.6687C11.4143 0 12.0187 0.604397 12.0187 1.34996C12.0187 2.09552 11.4143 2.69991 10.6687 2.69991H4.01247ZM16.3705 5.72042C16.8976 5.19322 17.7524 5.19322 18.2796 5.72042L23.6046 11.0454C24.1318 11.5726 24.1318 12.4274 23.6046 12.9546L18.2796 18.2796C17.7524 18.8068 16.8976 18.8068 16.3705 18.2796C15.8433 17.7524 15.8433 16.8976 16.3705 16.3705L19.391 13.35H9.33749C8.59193 13.35 7.98753 12.7456 7.98753 12C7.98753 11.2544 8.59193 10.65 9.33749 10.65H19.391L16.3705 7.62954C15.8433 7.10235 15.8433 6.24761 16.3705 5.72042Z"
            fill="#464A61"
          />
        </svg>
      </button>
      <!-- logout button -->

      <!-- dropdown menu start-->
      <div class="dropdown pb-4 mx-auto">
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            style="width: 3rem; height: 3rem"
            class="rounded-circle"
          />
          <span class="d-none d-sm-inline">loser</span>
          <span class="icon d-inline mx-1">loser</span>
          <span class="res d-none mx-1">los</span>
        </a>
        <ul
          class="dropdown-menu text-small shadow"
          style="background-color: var(--col-bg)"
        >
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
      <!-- dropdown menu end-->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth/auth";

const router = useRouter();

const fullEL = ref([]);
const resEl = ref([]);

const handleResponse = () => {
  let sideRes = document.querySelector(".side-bar");

  if (window.innerWidth <= 576) {
    // res
    fullEL.value.forEach((e) => {
      e.classList.remove("d-inline");
      e.classList.add("d-none");
    });
    resEl.value.forEach((e) => {
      e.classList.add("d-inline");
      e.classList.remove("d-none");
    });
    sideRes.classList.add("col-1");
    sideRes.classList.remove("col-2");
  } else {
    // full
    fullEL.value.forEach((e) => {
      e.classList.add("d-inline");
      e.classList.remove("d-none");
    });
    resEl.value.forEach((e) => {
      e.classList.remove("d-inline");
      e.classList.add("d-none");
    });
    sideRes.classList.add("col-2");
    sideRes.classList.remove("col-1");
  }
};

onMounted(() => {
  fullEL.value = document.querySelectorAll(".icon");
  resEl.value = document.querySelectorAll(".res");
  handleResponse();
  window.onresize = () => {
    handleResponse();
  };
});
const handlRes = () => {
  if (window.innerWidth <= 576) return;
  let sideRes = document.querySelector(".side-bar");

  sideRes.classList.toggle("col-2");
  sideRes.classList.toggle("col-1");

  fullEL.value.forEach((e) => {
    e.classList.toggle("d-none");
    e.classList.toggle("d-inline");
  });

  resEl.value.forEach((e) => {
    e.classList.toggle("d-none");
    e.classList.toggle("d-inline");
  });
};

const wdth = ref();
</script>

<style lang="scss" scoped>
// li {
//   width: 100%;
//   text-align: center;
// }
</style>
