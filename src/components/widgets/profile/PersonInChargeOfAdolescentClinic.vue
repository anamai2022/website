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
          <b-form-input id="horizontal-email-input" type="text"></b-form-input>
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
        <div class="col-6">
          ชื่อผู้อำนวยการ :
        </div>
        <div class="col-6">
          <el-select v-model="form.profile.f_director" filterable :placeholder="placeholderSelect">
            <el-option
              v-for="item in ContactData"
              :key="item.f_contactId"
              :label="item.f_firstName +' '+item.f_lastName"
              :value="item.f_contactId"
            >
            </el-option>
          </el-select>          
        </div>

        <div class="col-6">
          ชื่อแพทย์ผู้รับผิดชอบ :
        </div>
        <div class="col-6">
          <el-select v-model="form.profile.f_physician" filterable :placeholder="placeholderSelect">
            <el-option
              v-for="item in ContactData"
              :key="item.f_contactId"
              :label="item.f_firstName +' '+item.f_lastName"
              :value="item.f_contactId"
            >
            </el-option>
          </el-select>          
        </div>
        <br>
      </b-form>
    </div>
    <div class="col-6">
      <b-button variant="danger" class="btn-label" @click="handleReset()">
        <i class="bx bx-trash label-icon"></i>
        ยกเลิก
      </b-button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <b-button variant="success" class="btn-label" @click="handleSave()">
        <i class="bx bx-save label-icon"></i>
        บันทึกข้อมูล
      </b-button>
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";

export default {
  name: "PersonInChargeOfAdolescentClinic",
  props: ["form", "mode", "ContactData"],
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
      placeholderSelect: appConfig.placeholderSelect,
    };
  },
  computed: {},
  methods: {
    handleReset() {
      location.reload();
    },
    handleSave() {
      console.log('test')
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
