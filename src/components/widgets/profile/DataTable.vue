<template>
  <div class="table-responsive">
    <div class="col-12 center">
      <qrcode :background="background" :size="size" :cls="qrCls" :value="qrText"></qrcode>
    </div>
    <table class="table table-nowrap table-hover mb-0">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">
            {{ AssessmentCriteria }}&nbsp;&nbsp;:&nbsp;&nbsp;{{ GData }}
          </th>
          <th scope="col subScore">{{ wigthScore }}</th>
          <th scope="col">{{ Assessment }}</th>
          <th scope="col">{{ AssessmentDetail }}</th>
          <th scope="col">...</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(values, index) in QuestionnaireData" :key="index">
          <td></td>
          <td v-if="values.f_hadertitle == 0">
            <p class="ex1">{{ values.f_title }}</p>
          </td>
          <td v-else>
            <b color="red">{{ values.f_title }}</b>
          </td>
          <td class="subScore" v-if="values.f_hadertitle == 1">
            <div v-if="ShowScoreWT == 1">{{ values.f_questionWtMain }}</div>
            <div v-else>{{ values.f_questionWtMain }}</div>
          </td> 
          <td>{{ values.f_questionWtSub }}</td>         
          <td
            class="subScoreBack"
            v-if="values.f_hadertitle == 0"
            v-bind:id="`${values.f_code}data`"
            v-bind:name="`${values.f_code}data`"
          >
            <font color="#D22F19">{{ values.f_score }}</font>            
          </td>
          <td class="subScoreBack" v-else>{{ QuestionsAnswers }}</td>
          <td
            class="score"
            v-else
            v-bind:id="`${values.f_section}-${values.f_question_group}sum`"
            v-bind:name="`${values.f_section}-${values.f_question_group}sum`"
          ></td>

          <td v-if="values.f_hadertitle == 0">
            <i
              class="fas fa-file-word align-middle me-2 btn-info font-size-18"
              @click="handleViewWord(index, G)"
            ></i>
            <i
              class="fas fa-file-image align-middle me-2 btn-primary font-size-18"
              @click="handleViewImg(index, G)"
            ></i>
            <i
              class="fas fa-file-excel align-middle me-2 btn-success font-size-18"
              @click="handleViewExcel(index, G)"
            ></i>
            <i
              class="fas fa-file-pdf align-middle me-2 btn-danger font-size-18"
              @click="handleViewPdf(index, G)"
            ></i>
          </td>
          <td v-else></td>
          <td v-if="values.f_hadertitle == 0">
            <b-dropdown
              class="card-drop"
              variant="white"
              right
              toggle-class="p-0"
              menu-class="dropdown-menu-end"
            >
              <template v-slot:button-content>
                <i class="mdi mdi-dots-horizontal font-size-18"></i>
              </template>

              <b-dropdown-item>
                <i
                  class="fas fa-pencil-alt text-success me-1"
                  @click="handleEdit(i, G)"
                ></i>
                Edit
              </b-dropdown-item>

              <b-dropdown-item>
                <i
                  class="fas fa-trash-alt text-danger me-1"
                  @click="handleEdit(i, G)"
                ></i>
                Delete
              </b-dropdown-item>
            </b-dropdown>
          </td>
          <td v-else></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import appConfig from "@/app.config";
import Config from "@/config.json";
import Qrcode from 'v-qrcode/src/index'
import {
  MasterService,
  QuestionnaireService,
  ScoreService,
  FlowAnswerService,
  attachmentProvider,
  AnswerService,
} from "@/api/index.js";
import moment from "moment";
export default {
  name: "ProfileTable",
  props: ["form", "mode", "questionnaire", "budgetYear", "GData" ],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Qrcode },
  data() {
    return {
      OrganizationalCharacteristics: appConfig.OrganizationalCharacteristics,
      vision: appConfig.vision,
      mission: appConfig.mission,
      goal: appConfig.goal,
      policy: appConfig.policy,
      assessmentStatus: appConfig.assessmentStatus,
      historyProfile: appConfig.historyProfile,
      historyProfiles: appConfig.historyProfiles,
      Questions: appConfig.Questions,
      QuestionsScore: appConfig.QuestionsScore,
      QuestionsDescription: appConfig.QuestionsDescription,
      QuestionsAction: appConfig.QuestionsAction,
      QuestionsAttachment: appConfig.QuestionsAttachment,
      QuestionsGroup: appConfig.QuestionsGroup,
      OrganizationalData: appConfig.OrganizationalData,
      AssessmentCriteria: appConfig.AssessmentCriteria,
      Assessment: appConfig.Assessment,
      AssessmentDetail: appConfig.AssessmentDetail,
      G: this.GData,
      ScoreData: 1,
      score: appConfig.score,
      titleG1WT: appConfig.titleG1WT,
      titleG2WT: appConfig.titleG2WT,
      titleG3WT: appConfig.titleG3WT,
      titleG4WT: appConfig.titleG4WT,
      titleG5WT: appConfig.titleG5WT,
      QuestionsAnswers: appConfig.QuestionsAnswers,
      QuestionnaireData: null,
      ShowScoreWT: Config.ShowScoreWT,
      evidenceExplanation: appConfig.evidenceExplanation,
      uploadfile: appConfig.uploadfile,
      fillInInformation: appConfig.fillInInformation,
      fillInInformationYear: appConfig.fillInInformationYear,
      evidenceExplanation: appConfig.evidenceExplanation,
      GetScoreByRunning: [],
      wigthScore: appConfig.wigthScore,      
      setYear: new Date().getFullYear() + 543,    
      qrText : appConfig.qrCodeValueA,  
      qrCls: 'qrcode',
      size: 100,
      background: '#ffffff'         
    };
  },
  computed: {},
  methods: {
    handleViewImg(uuid) {
      alert("open file Image");
      console.log("uuid : ", uuid, GData);
    },
    handleEdit(uuid) {
      alert("open file Edit");
      console.log("uuid", uuid, GData);
    },
    handleViewWord(uuid) {
      alert("open file World");
      console.log("uuid", uuid, GData);
    },
    handleViewExcel(uuid) {
      alert("open file Excel");
      console.log("uuid", uuid, GData);
    },
    handleViewPdf(uuid) {
      alert("open file PDF");
      console.log("uuid", uuid, GData);
    },
    handlerClick(f_code, index) {
      console.log("value f_code : " + f_code, "Number : ", index);
    },
    async getYear() {
      const results = await MasterService.getYearAll();
      this.YearData = results.result;
    },
    async getScoreAll() {
      const results = await MasterService.getScoreAll();
      this.ScoreData = results.result;
    },
    async getZoneAreaAll() {
      const results = await MasterService.getZoneAreaAll();
      this.ZoneAreaData = results.result;
    },
    async getDataQuestionnaire() {
      this.dataDateTime = moment().format("LLLL");
      moment.locale("th");
      let yearData = new Date().getFullYear() + 543;
      let data = await ScoreService.GetScoreById(
        localStorage.getItem("profile"),
        this.CodeDoc,
        this.setYear,
        this.GData
      );
      if ((data.messagesboxs = "Success")) {
        this.GetScoreByRunning = data.result;
      } else {
        this.GetScoreByRunning = null;
      }
    },
    async getScoreGroup(){
      let data = await ScoreService.GetGroupDocumentRunning(localStorage.getItem("profile"),this.setYear)                
      localStorage.setItem("f_docrunning",data.result[0].f_docrunning)
      console.log('Score Group : ',data.result[0].f_docrunning)
    },
    async getScoreData(f_hospitalCode,f_docrunning,f_year,f_section,f_code){
     let dataShow =  await ScoreService.GetScoreByQuestionId(
        f_hospitalCode,
        f_docrunning,
        f_year,
        f_section,
        f_code
      )
      console.log('Score Data : ',dataShow)
    },
    async getQuestion(){
      let data = await AnswerService.getDataAll(localStorage.getItem("f_docrunning"),this.setYear,localStorage.getItem("profile"))
      console.log('Question Data : ',data)
      this.QuestionnaireData = data.results
    }
  },
  beforeCreate() {},
  created() {
    this.getYear();
    this.getScoreAll();
    this.getZoneAreaAll();
    this.getDataQuestionnaire();
    this.getScoreGroup(); 
    this.getQuestion();
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {
    
   // this.getScoreToView();
  },
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
.center {
  text-align: center;
}
</style>
