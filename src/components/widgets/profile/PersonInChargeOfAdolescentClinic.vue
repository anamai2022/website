<template>
  <div class="row">
    <p>ลักษณะสำคัญขององค์กร</p>
    <div class="col-lg-12">
            <b-form>
              <b-form-group
                class="mb-3"
                label="ชื่อ-นามสกุล:"
                label-for="horizontal-firstname-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-firstname-input"
                  type="text"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="mb-4"
                label="ตำแหน่ง:"
                label-for="horizontal-email-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-email-input"
                  type="text"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="mb-4"
                label="เบอร์โทรศัพท์:"
                label-for="horizontal-password-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-password-input"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="mb-4"
                label="Email:"
                label-for="horizontal-password-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-password-input"
                  type="email"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="mb-4"
                label="ชื่อผู้อำนวยการ:"
                label-for="horizontal-password-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-password-input"
                  type="text"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="mb-4"
                label="ชื่อแพทย์ผู้รับผิดชอบ:"
                label-for="horizontal-password-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-password-input"
                  type="text"
                ></b-form-input>
              </b-form-group>                            
              <div class="row justify-content-end">
                <div class="col-sm-9">
                  <div>
                    <b-button variant="success" class="btn-label">
                      <i class="bx bx-save label-icon"></i>
                        บันทึกข้อมูล
                    </b-button>
                  </div>
                </div>
              </div>
            </b-form>
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";
export default {
  name: "PersonInChargeOfAdolescentClinic",
  props: ["form", "mode", "questionnaire", ],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {},
  data() {
    return {
      title: appConfig.description,
      DataPollSet: this.poll,
      Statement: appConfig.Statement,
      Remark: appConfig.Remark,
    };
  },
  computed: {},
  methods: {
    handleReset() {
      location.reload();
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
<style scoped>
.centered {
  text-align: center;
  font-size: 20px;
}
.ex1 {
  margin-left: 30px;
}
</style>
