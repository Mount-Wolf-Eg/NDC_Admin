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
        class="nav nav-pills flex-column mb-auto mb-0 align-items-center align-items-sm-start gap-3"
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
        <li>
          <a href="#" class="nav-link px-0 align-middle">
            <span class="icon d-inline nav-item-btn">Menu</span>
            <span class="res d-none nav-item-btn">dddddddd</span>
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

<style lang="scss" scoped></style>
