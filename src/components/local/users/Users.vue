<template>
  <div class="users-page">
    <HelperButtons>
      <template #add-btn>
        <button
          type="button"
          id="addUse"
          class="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addUser"
        >
          Add User
        </button>
      </template>
    </HelperButtons>
    <AddUser @resetUser="item = {}" :user="item"></AddUser>
    <UserTable @editUser="editUser($event)"></UserTable>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelperButtons from "@/reusables/content_buttons/HelperButtons.vue";
import AddUser from "./AddUser.vue";
import UserTable from "./UserTable.vue";
const item = ref({});

const editUser = (e) => {
  item.value = e;
  document.querySelector("#addUse").click();
};
</script>

<style lang="scss" scoped></style>
