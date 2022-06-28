<template>
  <div class="row">
    <p>ลักษณะสำคัญขององค์กร</p>
    <div class="col-12">
      <p>วิสัยทัศน์</p>
      <textarea id="f_vision" name="f_vision" v-model="visionData" rows="4" cols="50">{{visionData}}</textarea>
      <p>พันธกิจ</p>
      <textarea id="f_mistion" name="f_mistion" v-model="missionData" rows="4" cols="50">{{missionData}}</textarea>
      <p>เป้าประสงค์</p>
      <textarea id="f_gotoKnow" name="f_gotoKnow" v-model="goalData" rows="4" cols="50">{{goalData}}</textarea>
      <p>นโยบาย</p>
      <textarea id="f_policy" name="f_policy" v-model="policyData" rows="4" cols="50">{{policyData}}</textarea>
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
import  { profileService } from "@/api/index.js";
export default {
  name: "Organizational",
  props: ["form", "mode", "visionData", "missionData", "goalData", "policyData" ],
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
    async handleSave() {
  console.log(localStorage.getItem("profile"))
      if (localStorage.getItem("profile") == null) {
        let Organizational = {
          visionData: this.visionData,
          missionData: this.missionData,
          policyData: this.policyData,
          goalData: this.goalData,
          f_status: 1,
        };
        await profileService.getSaveByCode(Organizational);        
      } else {
        let Organizational = {
          visionData: this.visionData,
          missionData: this.missionData,
          policyData: this.policyData,
          goalData: this.goalData,
        }
        await profileService.getUpdateAll(this.hospitalData.f_code,Organizational)
      }
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
