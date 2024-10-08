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
        style="margin-block-end: 2rem; cursor: pointer"
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
      <button class="icon d-inline mb-auto mx-auto nav-item-btn">logout</button>
      <button class="res d-none mb-auto mx-auto nav-item-btn">lOut</button>
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
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
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
