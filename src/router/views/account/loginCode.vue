<script>
import axios from "axios";

import Layout from "../../layouts/auth";
import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";
import { mapState } from "vuex";

import appConfig from "@/app.config";
import { required, email } from "vuelidate/lib/validators";

export default {
  page: {
    title: "Login",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
  },
  data() {
    return {
      email: null,
      password: null,
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      Themesbrand: appConfig.websiteName,
      logointitle: appConfig.logointitle,
      titleHeader: appConfig.title,
      ForgotYourPassword: appConfig.ForgotYourPassword,
      Signup: appConfig.Signup,
      CreateWith: appConfig.CreateWith,
      footerDesign: appConfig.footerDesign,
      DonAccount: appConfig.DonAccount,
      Login: appConfig.Login,
      titleImage: appConfig.title,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    tryToLogIn() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
         if (process.env.VUE_APP_DEFAULT_AUTH === "authapi") {
          axios
            .post("http://127.0.0.1:8000/api/login", {
              email: this.email,
              password: this.password,
            })
            .then((res) => {
              return res;
            });
        }
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-soft bg-primary">
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-4">
                  <h5 class="text-primary">{{logointitle}}</h5>
                  <p>{{titleHeader}}.</p>
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img
                  src="@/assets/images/profile-img.png"
                  :alt="titleImage"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div>
              <router-link tag="a" to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title rounded-circle bg-light">
                    <img src="@/assets/images/rh_anamai.png" :alt="titleImage" height="80" />
                  </span>
                </div>
              </router-link>
            </div>
            <b-alert
              v-model="isAuthError"
              variant="danger"
              class="mt-3"
              dismissible
              >{{ authError }}</b-alert
            >
            <div
              v-if="notification.message"
              :class="'alert ' + notification.type"
            >
              {{ notification.message }}
            </div>

            <b-form class="p-2" @submit.prevent="tryToLogIn">
                <b-form-group
                class="mb-3"
                id="input-group-2"
                label="Password"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="password"
                  type="password"
                  placeholder="Enter password"
                  :class="{ 'is-invalid': submitted && $v.password.$error }"
                ></b-form-input>
                <div
                  v-if="submitted && !$v.password.required"
                  class="invalid-feedback"
                >
                  Password is required.
                </div>
              </b-form-group>
                <router-link tag="a" to="/forgot-password" class="text-muted">
                  <i class="mdi mdi-lock me-1"></i> {{ForgotYourPassword}}
                </router-link>
              <div class="mt-3 d-grid">
                <b-button type="submit" variant="primary" class="btn-block">{{Login}}</b-button>
              </div>
            </b-form>
          </div>
        </div>

        <div class="mt-5 text-center">
          <p>
            {{DonAccount}}
            <router-link
              tag="a"
              to="/register"
              class="fw-medium text-primary"
              >{{Signup}}</router-link
            >
          </p>
          <p>
            © {{ new Date().getFullYear() }} YFHS. {{CreateWith}}
            <i class="mdi mdi-heart text-danger"></i> by {{footerDesign}}
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" module></style>
