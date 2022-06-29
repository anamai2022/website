<template>
  <div class="row">
    <p>ลักษณะสำคัญขององค์กร</p>
    <div v-if="dataSet !== 'null'">
      <div class="col-12"  v-for="(items, index) in dataSet" :key="index">
        <p>{{vision}}</p>
        <textarea id="f_vision" name="f_vision" v-model="items.f_vision" rows="4" cols="50">{{items.f_vision}}</textarea>
        <p>{{mission}}</p>
        <textarea id="f_mistion" name="f_mistion" v-model="items.f_mistion" rows="4" cols="50">{{items.f_mistion}}</textarea>
        <p>{{goal}}</p>
        <textarea id="f_gotoKnow" name="f_gotoKnow" v-model="items.f_gotoKnow" rows="4" cols="50">{{items.f_gotoKnow}}</textarea>
        <p>{{policy}}</p>
        <textarea id="f_policy" name="f_policy" v-model="items.f_policy" rows="4" cols="50">{{items.f_policy}}</textarea>
      </div>
    </div>
    <div v-else>
        <p>{{vision}}</p>
        <textarea id="f_vision" name="f_vision" v-model="f_vision" rows="4" cols="50"></textarea>
        <p>{{mission}}</p>
        <textarea id="f_mistion" name="f_mistion" v-model="f_mistion" rows="4" cols="50"></textarea>
        <p>{{goal}}</p>
        <textarea id="f_gotoKnow" name="f_gotoKnow" v-model="f_gotoKnow" rows="4" cols="50"></textarea>
        <p>{{policy}}</p>
        <textarea id="f_policy" name="f_policy" v-model="f_policy" rows="4" cols="50"></textarea>      
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
  props: ["form", "mode", "dataSet",  ],
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
      f_vision:null,
      f_mistion:null,
      f_gotoKnow:null,
      f_policy:null,
      Remark: appConfig.Remark,
      vision: appConfig.vision,
      mission: appConfig.mission,
      goal: appConfig.goal,
      policy: appConfig.policy,      
    };
  },
  computed: {},
  methods: {
    handleReset() {
      const dataSet = []
    },
    async handleSave() {  
      let profielCode = await profileService.getProfileByCode()
      if (profielCode.result === "null") {
        console.log("profielCode Create : ",profielCode)
        let Organizational = {
          visionData: this.f_vision,
          missionData: this.f_mistion,
          policyData: this.f_gotoKnow,
          goalData: this.f_policy,
          f_status: 1,
        };
        await profileService.getSaveByCode(Organizational);        
      } else {
          console.log("profielCode Update : ",profielCode)
        let Organizational = {
          visionData: this.f_vision,
          missionData: this.f_mistion,
          policyData: this.f_gotoKnow,
          goalData: this.f_policy,
        }
        await profileService.getUpdateAll(localStorage.getItem("profile"),Organizational)
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
