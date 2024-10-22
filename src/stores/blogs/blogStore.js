import { defineStore } from "pinia";
import { mainStore } from "../mainStore";
import axiosInstance from "../axios_instance";

export const useBlogStore = defineStore("blogStore", {
  state: () => ({
    checkToken: document.cookie
      .split(";")
      .map((coki) => coki.split("="))
      .reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key.trim()]: decodeURIComponent(val),
        }),
        {}
      )["Admin"],
    allCategories: [],
    activeCategories: [],
    susbendedCategories: [],
    category: [],
  }),

  actions: {
    async getAllCategPosts() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Categories/all`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.allCategories = res.data.data;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
        });
    },
    async getActiveCategoryPosts() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Categories/show`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.activeCategories = res.data.data;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
        });
    },
    async getSuspendedCategoryPosts() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Categories/trashed`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.susbendedCategories = res.data.data;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
        });
    },
    async getCategPost(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/Categories/one`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
            flag: "all",
          },
        })
        .then((res) => {
          this.category = res.data.data;
          result = res;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    async destroyCategoryPost(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/Categories/destroy`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("Category suspended suuccessfully", 1);
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    async restoreCategoryPost(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/Categories/restore`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("Category restored suuccessfully", 1);
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    async deleteCategoryPost(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/Categories/forceDelete`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          mainStore().showAlert("Category deleted suuccessfully", 1);
          result = res;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    async addCategoryPost(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/Categories/store`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("Category created suuccessfully", 1);
          this.getAllCategPosts();
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
    async updateCategoryPost(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/Categories/update`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("Category updated suuccessfully", 1);
          this.getAllCategPosts();
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
  },
});
