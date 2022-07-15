<template>
  <div class="row">
    <QuestionnaireHeader :form="form" :mode="mode" :profile="ProfileData"/>
    <QuestionnaireTabs :form="form" :mode="mode" /> 
  </div>
</template>
<script>
import appConfig from "@/app.config";
import  { MasterService, HospitalService,ScoreService } from "@/api/index.js";
import QuestionnaireHeader from "@/components/widgets/QuestionnaireHeader.vue";
import QuestionnaireTabs from "@/components/widgets/QuestionnaireTabs.vue";
import moment from 'moment';

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
      calculatorForm: appConfig.calculatorForm,
      ProfileData: null,
      YearData: null,
      sumTotal:100,
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
    async getDataQuestionnaire(){
      this.dataDateTime = moment().format("LLLL");
      moment.locale("th");
      let yearData = new Date().getFullYear() + 543;      
      let result = await ScoreService.GetScoreById(localStorage.getItem("profile"),localStorage.getItem("f_docrunning"),yearData)    
    },
    calculator(){
      console.log('calculator',this.sumTotal)
                 this.$swal({
                  icon: "success",
                  title: "ผลคำนวณ",
                  text: this.sumTotal,
                  allowOutsideClick: false,
                });      
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
  created() {
    this.getDataQuestionnaire()
  },
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
