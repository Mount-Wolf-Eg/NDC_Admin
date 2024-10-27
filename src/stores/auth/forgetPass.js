import { defineStore } from "pinia";
import { mainStore } from "@/stores/mainStore";
import axios_instance from "@/stores/axios_instance";

export const forgetPassStore = defineStore("forgetPass", {
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
    newToken: "",
  }),
  getters: {},
  actions: {
    // send email
    async forgetPassword(email) {
      let result;
      await axios_instance
        .post(`${mainStore().apiLink}/user/forget/password`, email)
        .then((res) => {
          result = res;
          mainStore().showAlert("Check your email", 3);
        })
        .catch((err) => {
          let errorMessage = "Something went wrong, please try again";

          if (err.response && err.response.data && err.response.data.errors) {
            const errorArray = Object.values(err.response.data.errors);
            if (errorArray.length > 0 && errorArray[0][0]) {
              errorMessage = errorArray[0][0];
            }
          }
          mainStore().showAlert(errorMessage, 2);
          result = false;
        });
      return result;
    },
    // get OTP
    async sendOtp(data) {
      let result;
      await axios_instance
        .post(`${mainStore().apiLink}/user/change/otp`, data)
        .then((res) => {
          result = true;
          this.newToken = res.data.data;
        })
        .catch((err) => {
          let errorMessage = "Something went wrong, please try again";

          if (err.response && err.response.data && err.response.data.errors) {
            const errorArray = Object.values(err.response.data.errors);
            if (errorArray.length > 0 && errorArray[0][0]) {
              errorMessage = errorArray[0][0];
            }
          }
          mainStore().showAlert(errorMessage, 2);
          result = false;
        });
      return result;
    },
    // change password
    async changePassword(pass, confirm) {
      let result;
      await axios_instance
        .post(`${mainStore().apiLink}/user/change/forget/password`, {
          new_password: pass,
          confirm_password: confirm,
          token: this.newToken,
        })
        .then((res) => {
          result = true;
          mainStore().showAlert("Password Changed Suuccessfully", 1);
        })
        .catch((err) => {
          let errorMessage = "Something went wrong, please try again";

          if (err.response && err.response.data && err.response.data.errors) {
            const errorArray = Object.values(err.response.data.errors);
            if (errorArray.length > 0 && errorArray[0][0]) {
              errorMessage = errorArray[0][0];
            }
          }
          mainStore().showAlert(errorMessage, 2);
          result = false;
        });
      return result;
    },
  },
});
