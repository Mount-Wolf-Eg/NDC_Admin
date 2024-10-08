<template>
  <div class="main-layout">
    <NavBar></NavBar>
    <div class="layout-body row" style="flex: 1">
      <SideBar></SideBar>
      <main class="content col">
        <div class="content-title">
          {{ route.params.name || "Admin Dashboard" }}
        </div>
        <div class="p-5 m-4 content-body" style="border-radius: 1.2rem">
          <slot></slot>
        </div>
      </main>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import FooterBar from "./FooterBar.vue";
import SideBar from "./SideBar.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
