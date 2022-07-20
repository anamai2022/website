<template>
  <section class="bg-white" id="Lightbox">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-6 ">
              <h4 class="card-title">
                เลขที่เอกสาร&nbsp;&nbsp;:&nbsp;&nbsp;<font color="red">{{
                  toDayDataFormat
                }}</font>
              </h4>
              <p class="card-title-desc">
                การประเมินตนเองตามมาตราฐานบริการสุขภาพที่เป็นมิตรสำหรับวัยรุ่น
              </p>
            </div>
            <div class="col-6 rightButton">
              <button class="btn btn-success" type="submit" @click="SaveItem()">
                {{ SubmitForm }}
              </button>
              &nbsp;&nbsp;
              <button
                class="btn btn-warning"
                type="submit"
                @click="ResetItem()"
              >
                {{ ResetForm }}
              </button>
              &nbsp;&nbsp;
              <button
                class="btn btn-danger"
                type="submit"
                @click="calculator()"
              >
                {{ calculatorForm }}
              </button>
            </div>
          </div>
          <b-tabs
            justified
            nav-class="nav-tabs-custom"
            content-class="p-3 text-muted"
          >
            <b-tab active>
              <template v-slot:title>
                <span class="d-inline-block d-sm-none">
                  <i class="fas fa-home"></i>
                </span>
                <span class="d-none d-sm-inline-block">G1</span>
                <div v-if="ShowScoreWT ==1">
                <input
                  type="number"
                  id="G1PassTotal"
                  name="G1PassTotal"
                  v-model="G1PassTotal"
                  disabled
                />                
                </div>                                  
                <p id="totalG1" name="totalG1" class="text-muted mb-2">
                  {{ totalScore }}: <font color="red">{{ totalG1 }}</font>
                </p> 
              </template>
              <QuestionnaireTable
                :GData="G1"
                :title="titleG1"
                :GScore="GScore1"
                :ModeReset="modeReset"
              />
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-inline-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>
                <span class="d-none d-sm-inline-block">G2</span>
                <div v-if="ShowScoreWT ==1">
                <input
                  type="number"
                  id="G2PassTotal"
                  name="G2PassTotal"
                  v-model="G2PassTotal"
                  disabled
                />                
                </div>  
                <p id="totalG2" name="totalG2" class="text-muted mb-2">
                  {{ totalScore }}: <font color="red">{{ totalG2 }}</font>
                </p>                
              </template>
              <QuestionnaireTable
                :GData="G2"
                :title="titleG2"
                :GScore="GScore2"
                :ModeReset="modeReset"
              />
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-inline-block d-sm-none">
                  <i class="far fa-envelope"></i>
                </span>
                <span class="d-none d-sm-inline-block">G3</span>
                <div v-if="ShowScoreWT ==1">
                <input
                  type="number"
                  id="G3PassTotal"
                  name="G3PassTotal"
                  v-model="G3PassTotal"
                  disabled
                />                
                </div>  
                <p id="totalG3" name="totalG3" class="text-muted mb-2">
                  {{ totalScore }}: <font color="red">{{ totalG3 }}</font>
                </p>                
              </template>
              <QuestionnaireTable
                :GData="G3"
                :title="titleG3"
                :GScore="GScore3"
                :ModeReset="modeReset"
              />
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-inline-block d-sm-none">
                  <i class="fas fa-cog"></i>
                </span>
                <span class="d-none d-sm-inline-block">G4</span>
                <div v-if="ShowScoreWT ==1">
                <input
                  type="number"
                  id="G4PassTotal"
                  name="G4PassTotal"
                  v-model="G4PassTotal"
                  disabled
                />                  
                </div>  
                <p id="totalG4" name="totalG4" class="text-muted mb-2">
                  {{ totalScore }}: <font color="red">{{ totalG4 }}</font>
                </p>
                
              </template>
              <QuestionnaireTable
                :GData="G4"
                :title="titleG4"
                :GScore="GScore4"
                :ModeReset="modeReset"
              />
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-inline-block d-sm-none">
                  <i class="fas fa-cog"></i>
                </span>
                <span class="d-none d-sm-inline-block">G5</span>
                <div v-if="ShowScoreWT ==1">                
                <input
                  type="number"
                  id="G5PassTotal"
                  name="G5PassTotal"
                  v-model="G5PassTotal"
                  disabled
                />                
                </div>  
                <p id="totalG5" name="totalG5" class="text-muted mb-2">
                  {{ totalScore }}: <font color="red">{{ totalG5 }}</font>
                </p>                
              </template>
              <QuestionnaireTable
                :GData="G5"
                :title="titleG5"
                :GScore="GScore5"
                :ModeReset="modeReset"
                :G5PassTotal="G5PassTotal"
              />
            </b-tab>
          </b-tabs>
          <div class="row">
            <div class="col-6 ">
              <h4 class="card-title">
                <font color="red">{{ remarkTitle }}</font>
              </h4>
              <p class="card-title-desc">{{ remarkDetail }}</p>
            </div>
            <div class="col-6 rightButton">
              <button class="btn btn-success" type="submit" @click="SaveItem()">
                {{ SubmitForm }}
              </button>
              &nbsp;&nbsp;
              <button
                class="btn btn-warning"
                type="submit"
                @click="ResetItem()"
              >
                {{ ResetForm }}
              </button>
              &nbsp;&nbsp;
              <button
                class="btn btn-danger"
                type="submit"
                @click="calculator()"
              >
                {{ calculatorForm }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import appConfig from "@/app.config";
import Config from "@/config.json";
import QuestionnaireTable from "@/components/widgets/QuestionnaireTable.vue";
import {
  MasterService,
  QuestionnaireService,
  ScoreService,
  FlowAnswerService,
} from "@/api/index.js";
import moment from "moment";
export default {
  name: "QuestionnaireTabs",
  props: ["form", "mode", "questionnaire", "budgetYear", "GScore"],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { QuestionnaireTable },
  data() {
    return {
      remarkTitle: appConfig.remarkTitle,
      remarkDetail: appConfig.remarkDetail,
      SubmitForm: appConfig.SubmitForm,
      ResetForm: appConfig.ResetForm,
      calculatorForm: appConfig.calculatorForm,
      OrganizationalCharacteristics: appConfig.OrganizationalCharacteristics,
      assessmentStatus: appConfig.assessmentStatus,
      historyProfile: appConfig.historyProfile,
      historyProfiles: appConfig.historyProfiles,
      Questions: appConfig.Questions,
      QuestionsScore: appConfig.QuestionsScore,
      QuestionsDescription: appConfig.QuestionsDescription,
      QuestionsAction: appConfig.QuestionsAction,
      QuestionsAttachment: appConfig.QuestionsAttachment,
      QuestionsGroup: appConfig.QuestionsGroup,
      toDayDataFormat: null,
      totalG1: 0,
      totalG2: 0,
      totalG3: 0,
      totalG4: 0,
      totalG5: 0,
      G1: "G1",
      G2: "G2",
      G3: "G3",
      G4: "G4",
      G5: "G5",
      G1PassTotal: 20,
      G2PassTotal: 10,
      G3PassTotal: 20,
      G4PassTotal: 10,
      G5PassTotal: 10,
      titleG1: appConfig.titleG1,
      titleG2: appConfig.titleG2,
      titleG3: appConfig.titleG3,
      titleG4: appConfig.titleG4,
      titleG5: appConfig.titleG5,
      GScore1: appConfig.titleG1WT,
      GScore2: appConfig.titleG2WT,
      GScore3: appConfig.titleG3WT,
      GScore4: appConfig.titleG4WT,
      GScore5: appConfig.titleG5WT,
      totalScore: appConfig.totalScore,
      ShowScoreWT: Config.ShowScoreWT,
      score: appConfig.score,
      titleSendAppoveLevel1: appConfig.titleSendAppoveLevel1,
      titleSendMessageLevel: appConfig.titleSendMessageLevel,
      modeReset:false,
    };
  },
  computed: {},
  methods: {
    SaveItem() {
      console.log("Save");
      this.$swal({
        icon: "success",
        title: this.titleSendAppoveLevel1,
        text: this.titleSendMessageLevel,
        allowOutsideClick: false,
      });
    },
    ResetItem() {
      console.log("Reset");
     toDayDataFormat: null,
      this.totalG1= 0
      this.totalG2= 0
      this.totalG3= 0
      this.totalG4= 0
      this.totalG5= 0
      this.G1= "G1"
      this.G2= "G2"
      this.G3= "G3"
      this.G4= "G4"
      this.G5= "G5"
      this.G1PassTotal= 20
      this.G2PassTotal= 10
      this.G3PassTotal= 20
      this.G4PassTotal= 10
      this.G5PassTotal= 10
      this.GScore1= appConfig.titleG1WT
      this.GScore2= appConfig.titleG2WT
      this.GScore3= appConfig.titleG3WT
      this.GScore4= appConfig.titleG4WT
      this.GScore5= appConfig.titleG5WT
      this.totalScore= appConfig.totalScore
      this.score = appConfig.score    
      this.sumTotal = 0
      this.$swal({
        icon: "warning",
        title: this.titleSendAppoveLevel1,
        text: this.titleSendMessageLevel,
        allowOutsideClick: false,
      }); 
      this.$router.go()       
    },
  async  calculator() {
      let f_hadertitle = 0
      let f_section = 1
      const resCountQuestion = await QuestionnaireService.getCountQuestion(
        f_hadertitle,
        f_section,
        f_question_group
      );
      const resSumScore = await ScoreService.GetSumScore(
        f_hospitalCode,
        f_docrunning,
        yearData,
        f_section,
        f_question_group
      );
      const resCountScore = await ScoreService.GetSumScore(
        f_hospitalCode,
        f_docrunning,
        yearData,
        f_section,
        f_question_group
      );      
      this.sumTotal =
        this.G1PassTotal +
        this.G2PassTotal +
        this.G3PassTotal +
        this.G4PassTotal +
        this.G5PassTotal;
      console.log("calculator", this.sumTotal);
      this.$swal({
        icon: "success",
        title: "ผลคำนวณ",
        text: this.sumTotal,
        allowOutsideClick: false,
      });
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    const toDayData = new Date();
    let date = moment(toDayData, "DD/MM/YYYY");
    moment.locale("th");
    this.dataDateTime = moment().format("LLLL");
    if (date.isValid()) {
      date.add(543, "years");
      let runnigYear = date.format("YYYY");
      let runnigMonth = date.format("MM");
      let runnigDay = date.format("DD");
      let runningTime = date.format("hhmmss");
      this.toDayDataFormat = localStorage.getItem("f_docrunning");
      let d = date.format("YYYY");
    }
    this.year = date.format("YYYY");
  },
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
.rightButton {
  text-align: right;
}
</style>
