import { defineStore } from "pinia";
import { mainStore } from "../mainStore";
import axiosInstance from "../axios_instance";

export const contactUsStore = defineStore("contactUs", {
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
    allMessages: [],
    message: [],
    filteredMessages: [],
  }),

  actions: {
    async getAllMessages() {
      await axiosInstance
        .get(`${mainStore().apiLink}/Mail/show`, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.allMessages = res.data.data.reverse();
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

    async getSingleMessage(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/Mail/one`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          this.message = res.data.data;
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

    async sendMessage(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/Mail/SendMessage`, data, {
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

    async replyMessage(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/Mail/reply`, data, {
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

    async filteredMessage(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/Mail/ShowFiltered`, data, {
          headers: {
            Authorization: `Bearer ${
              this.checkToken ? JSON.parse(this.checkToken)["token"] : ""
            }`,
          },
        })
        .then((res) => {
          result = res;
          this.filteredMessages = res.data.data;
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
