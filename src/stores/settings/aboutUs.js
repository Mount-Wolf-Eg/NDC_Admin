import { defineStore } from "pinia";
import { mainStore } from "../mainStore";
import axiosInstance from "../axios_instance";

export const aboutUsStore = defineStore("aboutUs", {
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
    aboutUs: [],
    ourGoals: [],
    ourMission: [],
    ourVission: [],
  }),

  actions: {
    async getAllAboutUs() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/StaticPages/all`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.aboutUs = res.data.data.find((e) => e.id == 1);
          this.ourVission = res.data.data.find((e) => e.id == 4);
          this.ourMission = res.data.data.find((e) => e.id == 5);
          this.ourGoals = res.data.data.find((e) => e.id == 6);
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
    async updateAllAbout(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/StaticPages/update`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
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
  },
});
