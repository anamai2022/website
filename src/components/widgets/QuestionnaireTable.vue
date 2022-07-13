<template>
  <div class="table-responsive">
    <div class="row">
      <div class="col-6 titleScore">{{ title }}</div>
      <div class="col-6 score">
        {{ score }}&nbsp;&nbsp;:&nbsp;&nbsp;{{ GScore }}
      </div>
    </div>
    <table class="table table-nowrap table-hover mb-0">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">
            {{ AssessmentCriteria }}&nbsp;&nbsp;:&nbsp;&nbsp;{{ GData }}
          </th>
          <th scope="col subScore">{{ score }}</th>
          <th scope="col">{{ Assessment }}</th>
          <th scope="col">{{ score }}</th>
          <th scope="col">{{ AssessmentDetail }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(values, index) in QuestionnaireData" :key="index">
          <th></th>
          <td v-if="values.f_hadertitle == 0">
            <p class="ex1">{{ values.f_title }}</p>
          </td>
          <td v-else>
            <b color="red">{{ values.f_title }}</b>
          </td>
          <td class="subScore" v-if="values.f_hadertitle == 1">
            {{ values.f_questionWtMain }}
          </td>
          <td class="subScoreBack" v-else>{{ShowScoreWT}}</td>
          <td
            class="subScoreBack"
            v-if="values.f_hadertitle == 0"
            v-bind:id="`${values.f_code}data`"
            v-bind:name="`${values.f_code}data`"
          >
            {{ totalScore }}
          </td>
          <td
            class="score"
            v-else
            v-bind:id="`${values.f_section}-${values.f_question_group}sum`"
            v-bind:name="`${values.f_section}-${values.f_question_group}sum`"
          ></td>
          <td v-if="values.f_hadertitle == 0">
            <b-button
              variant="primary"
              v-bind:id="`${values.f_code}Score`"
              v-bind:name="`${values.f_code}Score`"
              v-for="(value, index) in ScoreData"
              :key="index"
              @click="
                voteScore(
                  value.f_score,
                  index,
                  values.f_code,
                  values.f_question_group,
                  values.f_section,
                  values.f_title,
                  values.f_question,
                  values.f_sequence,
                  values
                )
              "
            >
              <i class="font-size-16 align-middle me-2"></i>
              {{ value.f_score }}</b-button
            >&nbsp;&nbsp;
          </td>
          <td v-else></td>
          <td>           
            <b-button
              variant="secondary"
              v-if="values.f_description == '1'"
              @click="
                rightDrawerDescription(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              "
            >
              <i class="fas fa-file-alt font-size-16 align-middle me-2"></i>
              {{ evidenceExplanation }}</b-button
            >&nbsp;&nbsp;
            <b-button
              variant="info"
              v-if="values.f_upload_file == '1'"
              @click="
                rightDrawerUploadFile(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail,
                  values.f_upload_image,
                  values.f_upload_file,
                  values.f_address_url,
                  values.f_additional_message,
                )
              "
            >
              <i class="fas fa-file-upload font-size-16 align-middle me-2"></i>
              {{ uploadfile }}</b-button
            >&nbsp;&nbsp;
            <b-button
              variant="success"
              v-if="values.f_total == '1'"
              @click="
                rightDrawerYearTotal(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              "
            >
              <i class="fas fa-file-invoice font-size-16 align-middle me-2"></i>
              {{ fillInInformationYear }}</b-button
            >&nbsp;&nbsp;
            <b-button
              variant="warning"
              v-if="values.f_yeartotal == '1'"
              @click="
                rightDrawerFormTotal(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              "
            >
              <i class="fas fa-file-code font-size-16 align-middle me-2"></i>
              {{ fillInInformation }}</b-button
            >&nbsp;&nbsp;
            <b-button
              variant="warning"
              v-if="values.f_yeartotal == '2'"
              @click="
                rightDrawerFormTotal(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              "
            >
              <i class="fas fa-file-code font-size-16 align-middle me-2"></i>
              {{ fillInInformation }}</b-button
            ></td>
        </tr>
      </tbody>
    </table>
    <Drawer
      @close="rightDrawerDescription"
      :align="'right'"
      :closeable="true"
      :maskClosable="true"
      :zIndex="1002"
    >
      <div v-if="openRightDrawer">
        <DrawerEvidenceExplanation :GData="QuestionnaireData" :GroupTab="GData" :code="titleDrawer" :title="DrawerTitle" :detail="DrawerRemark" />
      </div>
    </Drawer>
    <Drawer
      @close="rightDrawerUploadFile"
      :align="'right'"
      :closeable="true"
      :maskClosable="true"
      :zIndex="1002"
    >
      <div v-if="openRightUploadDrawer">
        <DrawerUploadFile :GData="QuestionnaireData" :GroupTab="GData" :code="titleDrawer" :title="DrawerTitle" :detail="DrawerRemark"  :uploadImage="f_upload_image" :uploadFile="f_upload_file" :additionalMessage="f_additional_message" :addressUrl="f_address_url"  />       
      </div>
    </Drawer>
    <Drawer
      @close="rightDrawerYearTotal"
      :align="'right'"
      :closeable="true"
      :maskClosable="true"
      :zIndex="1100"
    >
      <div v-if="openRightYearDrawer">
        <div class="offcanvas-header newspaper">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <font color="#BF490D">{{ fillInInformationYear }}</font
            ><br />
            <font color="#020223">{{ DrawerTitle }}</font>
          </h5>
        </div>
        <div class="offcanvas-body ">
          <div class="newspaper">
            <h4>
              <font color="#083FD2">{{ evidenceExplanation }}</font>
            </h4>
            &nbsp;&nbsp;&nbsp;&nbsp;{{ DrawerRemark }}
          </div>
        </div>
        <div class="offcanvas-body ">
          <h4>
            <font color="#083FD2">{{ QuestionsAttachment }}</font>
          </h4>
        </div>
        <div class="offcanvas-body " v-if="showImg === true">
          <Lightbox :form="form" :mode="mode" />
        </div>
      </div>
    </Drawer>
    <Drawer
      @close="rightDrawerFormTotal"
      :align="'right'"
      :closeable="true"
      :maskClosable="true"
      :zIndex="1100"
    >
      <div v-if="openRightFormDrawer">
        <div class="offcanvas-header newspaper">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <font color="#BF490D">{{ fillInInformation }}</font
            ><br />
            <font color="#020223">{{ DrawerTitle }}</font>
          </h5>
        </div>
        <div class="offcanvas-body ">
          <div class="newspaper">
            <h4>
              <font color="#083FD2">{{ evidenceExplanation }}</font>
            </h4>
            &nbsp;&nbsp;&nbsp;&nbsp;{{ DrawerRemark }}
          </div>
        </div>
        <div class="offcanvas-body ">
          <h4>
            <font color="#083FD2">{{ QuestionsAttachment }}</font>
          </h4>
        </div>
        <div class="offcanvas-body " v-if="showImg === true">
          <Lightbox :form="form" :mode="mode" />
        </div>
      </div>
    </Drawer>
  </div>
</template>

<script>
import appConfig from "@/app.config";
import Config from "@/config.json";
import Drawer from "vue-simple-drawer";
import { MasterService, QuestionnaireService } from "@/api/index.js";
import Lightbox from "@/components/widgets/profile/Lightbox.vue";
import QuestionnaireUpload from "@/components/widgets/questionnaire/QuestionnaireUpload.vue";
import Satisfaction from "@/components/widgets/questionnaire/Satisfaction.vue";
import TopForm from "@/components/widgets/questionnaire/TopForm.vue";
import DrawerEvidenceExplanation from "@/components/widgets/questionnaire/DrawerEvidenceExplanation.vue";
import DrawerUploadFile from "@/components/widgets/questionnaire/DrawerUploadFile.vue";

export default {
  name: "QuestionnaireTable",
  props: [
    "form",
    "mode",
    "questionnaire",
    "budgetYear",
    "GData",
    "title",
    "GScore",
  ],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Drawer, Lightbox, QuestionnaireUpload, Satisfaction, TopForm ,DrawerEvidenceExplanation, DrawerUploadFile,},
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
      evidenceExplanation: appConfig.evidenceExplanation,
      uploadfile: appConfig.uploadfile,
      fillInInformation: appConfig.fillInInformation,
      fillInInformationYear: appConfig.fillInInformationYear,
      evidenceExplanation: appConfig.evidenceExplanation,
      G: this.GData,
      totalScore: 0,
      YearData: [],
      ScoreData: [],
      ZoneAreaData: [],
      QuestionnaireData: [],
      f_description: 0,
      f_upload_file: 0,
      f_upload_image: 0,
      f_address_url: 0,
      f_additional_message:0,
      openRightDrawer: false,
      openRightUploadDrawer: false,
      openRightYearDrawer: false,
      openRightFormDrawer: false,
      titleDrawer: null,
      DrawerCode: null,
      DrawerTitle: null,
      DrawerRemark: null,
      showImg: false,
      showFile: false,
      Sum: [],
      scoreTotal:[],
      DataCaculator: 0,
      titleG1WT: appConfig.titleG1WT,
      titleG2WT: appConfig.titleG2WT,
      titleG3WT: appConfig.titleG3WT,
      titleG4WT: appConfig.titleG4WT,
      titleG5WT: appConfig.titleG5WT,
      ShowScoreWT: Config.ShowScoreWT,
      score: appConfig.score,
      fieldsFile: [{ idFile: 1 }],
      fieldsImage: [{ idImage: 1 }],
    };
  },
  computed: {},
  methods: {
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
    async getQuestionnaireAll() {
      const results = await QuestionnaireService.getQuestionnaireTabAll(
        this.GData
      );
      this.QuestionnaireData = results.result;
    },
    rightDrawerDescription(index, f_code, f_title, f_detail ,f_address_url, f_additional_message) {
      this.openRightDrawer = !this.openRightDrawer;
      this.titleDrawer = index;
      this.DrawerCode = f_code;
      this.DrawerTitle = f_title;
      this.DrawerRemark = f_detail;
    },
    rightDrawerUploadFile(
      index,
      f_code,
      f_title,
      f_detail,
      f_upload_image,
      f_upload_file,
      f_address_url,
      f_additional_message
    ) {
      this.openRightUploadDrawer = !this.openRightUploadDrawer;
      console.log("Upload : ", index, f_code, f_title);
      console.log("type : ", f_upload_image, f_upload_file);
      this.titleDrawer = index;
      this.DrawerCode = f_code;
      this.DrawerTitle = f_title;
      this.DrawerRemark = f_detail;
      this.f_upload_image = f_upload_image;
      this.f_upload_file = f_upload_file;
      this.f_address_url = f_address_url;
      this.f_additional_message =f_additional_message
    },
    rightDrawerYearTotal(index, f_code, f_title, f_detail) {
      this.openRightYearDrawer = !this.openRightYearDrawer;
      console.log("Desc : ", index, f_code);
      this.titleDrawer = index;
      this.DrawerCode = f_code;
      this.DrawerTitle = f_title;
      this.DrawerRemark = f_detail;
    },
    rightDrawerFormTotal(index, f_code, f_title, f_detail) {
      this.openRightFormDrawer = !this.openRightFormDrawer;
      console.log("Desc : ", index, f_code);
      this.titleDrawer = index;
      this.DrawerCode = f_code;
      this.DrawerTitle = f_title;
      this.DrawerRemark = f_detail;
    },
    voteScore(event, i, f_code, f_question_group, f_section,f_title,f_question, f_sequence, dataSet) {
      let IdCodes = f_code + "data";
      console.log('Data question : => ',dataSet)      
      document.getElementById(IdCodes).innerText = event;
      let dataScore = {
        code: f_code,
        score: event,
        group: f_question_group,
        tab: f_section,
      };
      this.Sum.push(dataScore);
      var result = [];
      this.Sum.reduce(function(res, value) {
        if (!res[value.tab]) {
          if (!res[value.group]) {
            res[value.group] = { group: value.group, score: 0, tab: f_section };
            result.push(res[value.group]);
          }
          res[value.group].score += value.score;
          return res;
        }
      }, {});
      this.scoreTotal = result
      console.log('map data : ',this.scoreTotal);
      let payScore = {
        group : result,
        f_docrunning: localStorage.getItem("f_docrunning"),
        f_userCode: localStorage.getItem("f_code"),                
        f_hospitalCode: localStorage.getItem("profile"),        
      }
      console.log('Score Total By Group : ',payScore)
      for (let index = 0; index < result.length; index++) {
        const element = result[index];
         if (f_question_group == element.group) {
            let IdSum = f_section+'-'+f_question_group + "sum";
            console.log("ById : ", IdSum);
            let count = element.score / dataSet.f_questionWtSub * dataSet.f_questionWtMain
            document.getElementById(IdSum).innerHTML = count;
          }
      }
        let yearData = new Date().getFullYear() + 543;          
        const payload={
                f_section: f_section,
                f_docrunning: localStorage.getItem("f_docrunning"),
                f_userCode: localStorage.getItem("f_code"),                
                f_hospitalCode: localStorage.getItem("profile"),
                f_year: yearData,                               
                f_score: event,
                f_title: f_title,
                f_codetitle: f_code,
                f_status: 1,
                f_question:f_question,
                f_sequence:f_sequence,
                f_question_group:f_question_group,
            };
            console.log( payload)      

    },
    handlerClick(f_code, index) {
      console.log("value f_code : " + f_code, "Number : ", index);
    },

  },
  beforeCreate() {},
  created() {
    this.getYear();
    this.getScoreAll();
    this.getZoneAreaAll();
    this.getQuestionnaireAll();
  },
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
.newspaper {
  width: 300px;
}
.score {
  color: #f52909;
  font-size: 14px;
}
.titleScore {
  font-weight: bold;
  color: #f52909;
  font-size: 14px;
}
.subScore {
  text-align: center;
  font-weight: bold;
  color: #0ba934;
  font-size: 12px;
}
.subScoreBack {
  text-align: center;
  color: #040404;
  font-size: 12px;
}
</style>
