<script>
import axios from "axios";

import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";
import Layout from "../../layouts/auth";
import appConfig from "@/app.config";
import { mapState } from "vuex";

import { required, email } from "vuelidate/lib/validators";

/**
 * Register component
 */
export default {
  page: {
    title: "Register",
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
        firstName: null,
        lastName: null,
        email: null,
        password: null,
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
      titleImage: appConfig.title,
      titleRegster: appConfig.titleRegster,
      titleDescription: appConfig.description,
      labelUsername: appConfig.labelUsername,
      Signup: appConfig.Signup,
      CreateWith: appConfig.CreateWith,
      footerDesign: appConfig.footerDesign,
      DonAccount: appConfig.DonAccount,
      Login: appConfig.Login,
      Themesbrand: appConfig.websiteName,
      logointitle: appConfig.logointitle,
      titleHeader: appConfig.title,
      ForgotYourPassword: appConfig.ForgotYourPassword,
      loginAccount: appConfig.loginAccount,
      agreeAccount: appConfig.agreeAccount,
      TermsofUse: appConfig.TermsofUse,
      Register: appConfig.Register,
    };
  },
  validations: {
    user: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  computed: {},
  methods: {
    tryToRegisterIn() {
      this.submitted = true;
      if(this.firstName != null && this.lastName != null && this.email != null){
        let payload = {
          f_firstName: this.firstName,
          f_lastName: this.lastName,
          f_email: this.email,
          f_remark: this.password,
        };
        axios.post(`${process.env.VUE_APP_ENDPOINT}` + "/user/register", payload)
        .then((response) => {
          if(response.data.messagesboxs == 'Success'){
              this.$router.push('/logincode')
          }else{
              this.$swal({
                icon: "error",
                title: "ไม่สามารถลงทะเบียนระบบได้",
                text: response.data.messagesboxs,
                allowOutsideClick: false,
              });
              this.$router.push('/logincode');
          }
        })
        .catch(error => {
          this.$swal({
                icon: "error",
                title: "ไม่สามารถลงทะเบียนระบบได้",
                text: 'กรุณาติดต่อเจ้าหน้าที่ : '+ error,
                allowOutsideClick: false,
              });
          this.$router.push('/logincode');
        })        
      }else{
        this.$swal({
              icon: "error",
              title: "ไม่สามารถลงทะเบียนระบบได้",
              text: 'กรุณาติดต่อเจ้าหน้าที่ : ',
              allowOutsideClick: false,
            });
        this.$router.push('/logincode');
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
                  <h5 class="text-primary">{{ titleRegster }}</h5>
                  <p>{{ titleDescription }}</p>
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
                    <img
                      src="@/assets/images/rh_anamai.png"
                      :alt="titleImage"
                      class="rounded-circle"
                      height="80"
                    />
                  </span>
                </div>
              </router-link>
            </div>

            <b-alert
              v-model="registerSuccess"
              class="mt-3"
              variant="success"
              dismissible
              >Registration successfull.</b-alert
            >

            <b-alert
              v-model="isRegisterError"
              class="mt-3"
              variant="danger"
              dismissible
              >{{ regError }}</b-alert
            >

            <b-form class="p-2" @submit.prevent="tryToRegisterIn">
              <b-form-group
                class="mb-3"
                id="email-group"
                :label="labelUsername"
                :label-for="labelUsername"
              >
                <b-form-input
                  id="username"
                  name="username"
                  class="mb-3"
                  v-model="firstName"
                  type="text"
                  placeholder="Enter firstName"
                  :class="{
                    'is-invalid': submitted && $v.user.firstName.$error,
                  }"
                ></b-form-input>
                <div
                  v-if="submitted && !$v.user.firstName.required"
                  class="invalid-feedback"
                >
                  firstName is required.
                </div>
                <b-form-input
                  id="lastname"
                  name="lastname"
                  v-model="lastName"
                  type="text"
                  placeholder="Enter lastName"
                  :class="{
                    'is-invalid': submitted && $v.user.lastName.$error,
                  }"
                ></b-form-input>

                <div
                  v-if="submitted && !$v.user.lastName.required"
                  class="invalid-feedback"
                >
                  lastName is required.
                </div>
              </b-form-group>

              <b-form-group
                class="mb-3"
                id="fullname-group"
                label="Email"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="Enter email"
                  :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                ></b-form-input>
                <div
                  v-if="submitted && $v.user.email.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.email.required">Email is required.</span>
                  <span v-if="!$v.user.email.email"
                    >Please enter valid email.</span
                  >
                </div>
              </b-form-group>

              <b-form-group
                class="mb-3"
                id="password-group"
                label="Password"
                label-for="password"
              >
                <b-form-input
                  id="password"
                  v-model="password"
                  type="password"
                  placeholder="Enter password"
                  :class="{
                    'is-invalid': submitted && $v.user.password.$error,
                  }"
                ></b-form-input>
                <div
                  v-if="submitted && !$v.user.password.required"
                  class="invalid-feedback"
                >
                  Password is required.
                </div>
              </b-form-group>

              <div class="mt-4 d-grid">
                <b-button type="submit" variant="primary" class="btn-block">{{
                  Register
                }}</b-button>
              </div>

              <div class="mt-4 text-center">
                <p class="mb-0">
                  {{ agreeAccount }}
                  <a
                    href="javascript: void(0);"
                    class="text-primary"
                    v-b-modal.modal-standard
                    >{{ TermsofUse }}</a
                  >
                  <b-modal
                    id="modal-standard"
                    title="Privacy Policy & Terms of Service"
                    title-class="font-18"
                  >
                    <h5>นโยบายความเป็นส่วนตัวและเงื่อนไขการให้บริการ</h5>
                    <p>
                      นโยบายความเป็นส่วนตัว ข้อกำหนด และเงื่อนไขในการใช้งานระบบ
                      YFHS ฉบับนี้
                      ได้ระบุถึงข้อกำหนดและเงื่อนไขในการใช้งานและบริการต่าง ๆ
                      ของระบบ YFHS แก่ผู้ใช้บริการ (โดยแต่ละรายเรียกว่า “ผู้ใช้”
                      หรือ “ผู้ใช้รายต่าง ๆ” ขึ้นอยู่กับเนื้อหา).
                    </p>
                    <h4>1. คำนิยาม</h4>
                    <p>
                      คำและข้อความดังต่อไปนี้ให้มีความหมายตามที่ได้กำหนดไว้ด้านล่างเมื่อมีการใช้ในข้อกำหนดและเงื่อนไขฯ
                      ฉบับนี้
                    </p>
                    <p>
                      1.1“เนื้อหา” หมายถึง ข้อมูลต่าง ๆ เช่น ข้อความ รูปภาพ ไฟล์
                      รหัสคอมพิวเตอร์ และข้อมูลอื่น ๆ
                    </p>
                    <p>
                      1.2“เนื้อหาหลัก” หมายถึง
                      เนื้อหาที่สามารถเข้าถึงได้ผ่านทางบริการฯ
                    </p>
                    <p>
                      1.3“เนื้อหาจากผู้ใช้” หมายถึง เนื้อหาที่ผู้ใช้ได้ส่ง
                      ส่งผ่าน หรือ อัปโหลดบนระบบการให้บริการฯ
                    </p>
                    <p>1.4“ระบบ” หมายถึง เว็บไซต์ YFHS.</p>
                    <h4>2. การตกลงยอมรับข้อกำหนดและเงื่อนไขฯ ฉบับนี้</h4>
                    <p>
                      2.1 ผู้ใช้ทุกรายที่ต้องการใช้บริการต่าง ๆ ของระบบ
                      ต้องอ่านและรับทราบข้อกำหนดและเงื่อนไขฯ ฉบับนี้ก่อน
                      จึงจะสามารถใช้บริการฯ.
                    </p>
                    <p>
                      2.2
                      กรณีที่ผู้ใช้เป็นผู้เยาว์จะถือว่าได้รับความยินยอมจากบิดา
                      มารดา หรือผู้แทนโดยชอบกฎหมาย.
                    </p>
                    <p>
                      2.3 หากมีข้อกำหนดและเงื่อนไขฯ เพิ่มเติมใด ๆ
                      ซึ่งเกี่ยวข้องกับการให้บริการฯ
                      ผู้ใช้จะต้องปฏิบัติตามข้อกำหนดและเงื่อนไขฯ
                      เพิ่มเติมดังกล่าวเช่นเดียวกับข้อกำหนดและเงื่อนไขฯ
                      ในการใช้งานฉบับนี้
                    </p>
                    <h4>3. การแก้ไขข้อกำหนดและเงื่อนไขฯ ฉบับนี้</h4>
                    <p>
                      ระบบอาจเปลี่ยนแปลงแก้ไขข้อกำหนดและเงื่อนไขฯ
                      ฉบับนี้ได้ตลอดเวลาตามที่เห็นสมควรซึ่งจะอยู่ภายใต้ขอบวัตถุประสงค์ของข้อกำหนดและเงื่อนไขฯ
                      ฉบับนี้ ในกรณีดังกล่าว
                      ระบบจะแจ้งเนื้อหาของข้อกำหนดฉบับแก้ไข
                      รวมถึงวันที่มีผลบังคับใช้บนเว็บไซต์ของระบบหรืออาจแจ้งให้ผู้ใช้ทราบด้วยวิธีการอื่นใดตามที่ระบบกำหนด
                      ทั้งนี้ ข้อกำหนดและเงื่อนไขฯ
                      ฉบับแก้ไขจะมีผลบังคับใช้ตามวันที่กำหนดต่อไป
                    </p>
                  </b-modal>
                </p>
              </div>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="mt-5 text-center">
          <p>
            {{ loginAccount }}
            <router-link tag="a" to="/login" class="fw-medium text-primary">{{
              Login
            }}</router-link>
          </p>

          <p>
            © {{ new Date().getFullYear() }} YFHS. {{ CreateWith }}
            <i class="mdi mdi-heart text-danger"></i> by {{ footerDesign }}
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" module></style>
