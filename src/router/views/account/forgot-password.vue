<script>
import axios from "axios";

import Layout from "../../layouts/auth";
import { authMethods } from "@/state/helpers";
import appConfig from "@/app.config";

import { required, email } from "vuelidate/lib/validators";

/**
 * Forgot Password component
 */
export default {
  page: {
    title: "Forgot Password",
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
      email: "",
      submitted: false,
      error: null,
      tryingToReset: false,
      isResetError: false,
      ResetPassword: appConfig.ResetPassword,
      title: appConfig.title,
      emailLabel: appConfig.memberCode,
      placeholderMember: appConfig.placeholderMember,
      RememberIt: appConfig.RememberIt,
      CreateWith: appConfig.CreateWith,
      footerDesign: appConfig.footerDesign,   
      SignInhere: appConfig.SignInhere,   
      Rememberforgetmenot: appConfig.Rememberforgetmenot,
      ForgetMeNot: appConfig.ForgetMeNot,
      titleImage: appConfig.title,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    ...authMethods,
    tryToReset() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
        if(this.email != null)       {
        axios.get(`${process.env.VUE_APP_ENDPOINT}` + "/user/forgotpassword/"+ this.email)
        .then((response) => {
          if(response.data.messagesboxs == 'Success'){
              this.$router.push('/')
          }else{
              this.$swal({
                icon: "error",
                title: "ไม่พบข้อมูลในระบบ",
                text: response.data.messagesboxs,
                allowOutsideClick: false,
              });
              this.$router.go()
          }
        })
        .catch(error => {
          this.$swal({
                icon: "error",
                title: "ไม่พบข้อมูลในระบบ",
                text: 'กรุณาติดต่อเจ้าหน้าที่ : '+ error,
                allowOutsideClick: false,
              });
         this.$router.go()
        })  
        }else{
        this.$swal({
              icon: "error",
              title: "ไม่พบข้อมูลในระบบ",
              text: 'กรุณาติดต่อเจ้าหน้าที่ : ',
              allowOutsideClick: false,
            });
        this.$router.go()
        }
    
    },
  },
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
                  <h5 class="text-primary">{{ResetPassword}}</h5>
                  <p>{{title}}.</p>
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

            <div class="p-2">
              <b-alert
                v-model="isResetError"
                class="mb-4"
                variant="danger"
                dismissible
                >{{ error }}</b-alert
              >
              <form @submit.prevent="tryToReset">
                <div class="mb-3">
                  <label for="useremail">{{emailLabel}}</label>
                  <input
                    type="text"
                    v-model="email"
                    class="form-control"
                    id="useremail"
                    :placeholder="placeholderMember"
                    :class="{ 'is-invalid': submitted && $v.email.$error }"
                  />
                  <div
                    v-if="submitted && $v.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.email.required">{{placeholderMember}}.</span>
                    <span v-if="!$v.email.email"
                      >{{placeholderMember}}.</span
                    >
                  </div>
                </div>
                <div class="mb-3 row mb-0">
                  <div class="col-12 text-end">
                    <button class="btn btn-primary w-md" type="submit">
                      {{ForgetMeNot}}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-5 text-center">
          <p>
            {{Rememberforgetmenot}}
            <router-link
              tag="a"
              to="/login"
              class="fw-medium text-primary"
              >{{SignInhere}}</router-link
            >
          </p>
          <p>
            © {{ new Date().getFullYear() }} YFHS. {{CreateWith}}
            <i class="mdi mdi-heart text-danger"></i> by {{footerDesign}}
          </p>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>

<style lang="scss" module></style>
