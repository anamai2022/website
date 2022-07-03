<template>
  <div class="table-responsive">
    <b
      ><font color="#083FD2">{{ title }}</font></b
    >
    <table class="table table-nowrap table-hover mb-0">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">
            {{ AssessmentCriteria }}&nbsp;&nbsp;:&nbsp;&nbsp;{{ GData }}
          </th>
          <th scope="col">{{ Assessment }}</th>
          <th scope="col">{{ AssessmentDetail }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(values, index) in QuestionnaireData" :key="index">
          <th></th>
          <td v-if="values.f_hadertitle ==0">
            <p class="ex1">{{ values.f_title }}</p>
          </td>
          <td v-else><b color="red">{{ values.f_title }}</b></td>
          <td v-if="values.f_hadertitle ==0">{{ totalScore }}</td>
          <td v-else></td>
          <td v-if="values.f_hadertitle ==0">
            <b-button
              variant="primary"
              v-for="(values, index) in ScoreData"
              :key="index"
              @click="voteScore(values.f_score, index)"
            >
              <i class="font-size-16 align-middle me-2"></i>
              {{ values.f_score }}</b-button
            >&nbsp;&nbsp;
            <b-button variant="secondary" v-if="values.f_description == '1'" @click="rightDrawerDescription(index, values.f_code, values.f_title, values.f_detail)">
              <i class="fas fa-file-alt font-size-16 align-middle me-2"></i>
              {{ evidenceExplanation }}</b-button
            >&nbsp;&nbsp;
            <b-button variant="info" v-if="values.f_upload_file == '1' || values.f_upload_image == '1'" @click="rightDrawerUploadFile(index, values.f_code, values.f_title, values.f_detail, values.f_upload_image, values.f_upload_file)">
              <i class="fas fa-file-upload font-size-16 align-middle me-2"></i>
              {{ uploadfile }}</b-button
            >&nbsp;&nbsp;
            <b-button variant="success" v-if="values.f_total == '1'">
              <i class="fas fa-file-invoice font-size-16 align-middle me-2"></i>
              {{ fillInInformationYear }}</b-button
            >&nbsp;&nbsp;
            <b-button variant="warning" v-if="values.f_address_url == '1'">
              <i class="fas fa-file-code font-size-16 align-middle me-2"></i>
              {{ fillInInformation }}</b-button
            >
          </td>
          <td v-else></td>
        </tr>
      </tbody>
    </table>
      <!-- <Drawer
        @close="rightDrawerDescription"
        :align="'right'"
        :closeable="true"
        :maskClosable="true"
        :zIndex="1002"
      >
        <div v-if="openRightDrawer">
          <div class="offcanvas-header newspaper">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              <font color="#020223">{{DrawerTitle}}</font>
            </h5>
          </div>
          <div class="offcanvas-body ">
            <div class="newspaper">
              <h4><font color="#083FD2">{{evidenceExplanation}}</font></h4>
              &nbsp;&nbsp;&nbsp;&nbsp;{{DrawerRemark}}
            </div>
          </div>
          <div class="offcanvas-body ">
            <h4><font color="#083FD2">{{QuestionsAttachment}}</font></h4>
          </div>
        <div class="offcanvas-body " v-if="showImg === true">
          <Lightbox :form="form" :mode="mode" />
        </div>
        </div>
      </Drawer> -->
      <Drawer
        @close="rightDrawerUploadFile"
        :align="'right'"
        :closeable="true"
        :maskClosable="true"
        :zIndex="1002"
      >
      <div v-if="openRightUploadDrawer">
          <div class="offcanvas-header newspaper">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              <font color="#020223">{{DrawerTitle}}</font>
            </h5>
          </div>
          <div class="offcanvas-body ">
            <div class="newspaper">
              <h4><font color="#083FD2">{{evidenceExplanation}}</font></h4>
              &nbsp;&nbsp;&nbsp;&nbsp;{{DrawerRemark}}
            </div>
          </div>
          <div class="offcanvas-body ">
            <h4><font color="#083FD2">{{QuestionsAttachment}}</font></h4>
          </div>
        <div class="offcanvas-body " v-if="showImg === true">
          File Image
        </div>
        <div class="offcanvas-body " v-if="showFile === true">
          File upload
        </div>
        </div>
      </Drawer>
  </div>
</template>

<script>
import appConfig from "@/app.config";
import Drawer from "vue-simple-drawer";
import { MasterService, QuestionnaireService } from "@/api/index.js";
import Lightbox from "@/components/widgets/profile/Lightbox.vue";
import QuestionnaireUpload from "@/components/widgets/questionnaire/QuestionnaireUpload.vue"
export default {
  name: "QuestionnaireTable",
  props: ["form", "mode", "questionnaire", "budgetYear", "GData", "title"],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Drawer, Lightbox, QuestionnaireUpload},
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
      openRightDrawer: false,
      openRightDrawerUpload: false,
      titleDrawer: null,
      DrawerCode: null,
      DrawerTitle: null,
      DrawerRemark: null,
      showImg: false,
      showFile: false,
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
    rightDrawerDescription(index, f_code, f_title, f_detail){
      this.openRightDrawer = !this.openRightDrawer;
      console.log(index,f_code)
      this.titleDrawer = index
      this.DrawerCode = f_code
      this.DrawerTitle = f_title
      this.DrawerRemark = f_detail
    },
    rightDrawerUploadFile(index, f_code, f_title, f_detail,f_upload_image,f_upload_file){
      this.openRightUploadDrawer = !this.openRightUploadDrawer;
      console.log(index,f_code)
      this.titleDrawer = index
      this.DrawerCode = f_code
      this.DrawerTitle = f_title
      this.DrawerRemark = f_detail
      console.log(index,f_upload_image)
      console.log(index,f_upload_file)
    },
    voteScore(event, i) {
      console.log("target value: " + event, "Number : ", i);
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
</style>
