<template>
  <div class="row">
    <QuestionnaireHeader :form="form" :mode="mode" :profile="ProfileData"/>
    <QuestionnaireTabs :form="form" :mode="mode" />
    <div class="col-12">
      <div class="mb-3">
        <button class="ex1 btn btn-primary" type="submit" @click="SaveItem()">
          {{ SubmitForm }}
        </button>
        &nbsp;&nbsp;
        <button class="ex1 btn btn-primary" type="submit" @click="ResetItem()">
          {{ ResetForm }}
        </button>        
      </div>
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";
import  { MasterService, HospitalService } from "@/api/index.js";
import QuestionnaireHeader from "@/components/widgets/QuestionnaireHeader.vue";
import QuestionnaireTabs from "@/components/widgets/QuestionnaireTabs.vue";

export default {
  name: "QuestionnaireComponents",
  props: ["form", "mode", "profile"],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { QuestionnaireHeader, QuestionnaireTabs, },
  data() {
    return {
      title: appConfig.description,
      SubmitForm: appConfig.SubmitForm,
      ResetForm: appConfig.ResetForm,
      ProfileData: null,
      YearData: null,
    };
  },
  computed: {},
  methods: {
    SaveItem() {
      console.log("Save");
    },
    ResetItem() {
      console.log("Reset");
    },
    async getYear(){
      const results = await MasterService.getYearAll();
      this.YearData = results.result      
      return results
    }, 
      async getProfile(){
      const results = await HospitalService.getHospitalByCode();
      this.ProfileData = results.result      
      return results
    }, 
  },
  mounted() {
    this.getProfile();
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
