import { defineStore } from "pinia";
import { mainStore } from "../mainStore";
import axiosInstance from "../axios_instance";

export const sliderStore = defineStore("sliders", {
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
    allSliders: [],
    singleSlide: [],
    suspendedSliders: [],
    slider: [],
    headerSlider: [],
    testimonialSlider: [],
    successMetrics: [],
    achievementsSliders: [],
    partnerSliders: [],
    mainResources: [],
  }),

  actions: {
    // all sliders
    async getAllSliders() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/slider/all`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.allSliders = res.data.data;
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
    // all sliders by type
    async getAllSlidersTypes() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/slider/showSlidersTypes`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.headerSlider = res.data.data.header_slider;
          this.testimonialSlider = res.data.data.testimonials;
          this.successMetrics = res.data.data.success_metrics;
          this.achievementsSliders = res.data.data.achievements;
          this.partnerSliders = res.data.data.partners;
          this.mainResources = res.data.data.main_resources;
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
    // get slider by type
    async getSingleSliderType(type) {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/slider/show?slider_type=${type}`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.slider = res.data.data;
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
    // suspended slider
    async getSuspendedSliders() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/slider/trashed`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.suspendedSliders = res.data.data;
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

    // sliders
    async getSlide(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/slider/one`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
            flag: "all",
          },
        })
        .then((res) => {
          this.singleSlide = res.data.data;
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
    // destroy slider
    async destroySlider(id) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/slider/destroy`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("item suspended suuccessfully", 1);
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
    // restore slider
    async restoreSlider(id, type) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/slider/restore`, id, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          this.getAllSliders();
          this.getSingleSliderType(type);
          mainStore().showAlert("item restored suuccessfully", 1);
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

    // add slider
    async addslider(data, type) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/slider/store`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("item created suuccessfully", 1);
          this.getAllSliders();
          this.getSingleSliderType(type);
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

    // update slider
    async updateSlider(data, type) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/slider/update`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("item updated suuccessfully", 1);
          this.getAllSliders();
          this.getSingleSliderType(type);
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
    // delete slider
    async deleteSlider(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/slider/forceDelete`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          mainStore().showAlert("item deleted suuccessfully", 1);
          this.getAllSliders();
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
