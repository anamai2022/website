<template>
  <div class="table-responsive">
    <div class="row">
      <div class="col-6 titleScore">{{ title }}</div>
      <div class="col-6 score">
        {{ score }}&nbsp;&nbsp;:&nbsp;&nbsp;{{ GScore }}
        <div class="row" v-if="G1!=0">{{G1}}</div>
        <div class="row" v-if="G2!=0">{{G2}}</div>
        <div class="row" v-if="G3!=0">{{G3}}</div>
        <div class="row" v-if="G4!=0">{{G4}}</div>
        <div class="row" v-if="G5!=0">{{G5}}</div>
      </div>
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
          <th scope="col">{{ score }}</th>
          <th scope="col">{{ AssessmentDetail }}</th>
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
            <div v-if="ShowScoreWT ==1">{{ values.f_questionWtMain }}</div>
            <div v-else></div>
          </td>
          <td class="subScoreBack" v-else></td>
          <td class="subScoreBack" v-if="values.f_hadertitle == 0" v-bind:id="`${values.f_code}data`"
            v-bind:name="`${values.f_code}data`">
            <div v-for="row in GetScoreByRunning" :key="GetScoreByRunning.f_code">
              <p v-if="row.f_codetitle == values.f_code">
                <font color="#D22F19">{{ row.f_score }}</font>
              </p>
            </div>
          </td>
          <td class="score" v-else v-bind:id="`${values.f_section}-${values.f_question_group}sum`"
            v-bind:name="`${values.f_section}-${values.f_question_group}sum`"></td>
          <td v-if="values.f_hadertitle == 0">
            <b-button variant="primary" v-bind:id="`${index}-${values.f_code}-Score`"
              v-bind:name="`${index}-${values.f_code}-Score`" v-for="(value, index) in ScoreData" :key="index" @click="
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
              ">
              <i class="font-size-16 align-middle me-2"></i>
              {{ value.f_score }}</b-button>&nbsp;&nbsp;
          </td>
          <td v-else v-bind:id="`${values.f_section}-${values.f_question_group}title`"
            v-bind:name="`${values.f_section}-${values.f_question_group}title`"></td>
          <td>
            <b-button variant="secondary" v-if="values.f_description == '1'" @click="
                rightDrawerDescription(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              ">
              <i class="fas fa-file-alt font-size-16 align-middle me-2"></i>
              {{ evidenceExplanation }}</b-button>&nbsp;&nbsp;
            <b-button variant="info" v-if="values.f_upload_file == '1'" @click="
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
              ">
              <i class="fas fa-file-upload font-size-16 align-middle me-2"></i>
              {{ uploadfile }}</b-button>&nbsp;&nbsp;
            <b-button variant="success" v-if="values.f_total == '1'" @click="
                rightDrawerYearTotal(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              ">
              <i class="fas fa-file-invoice font-size-16 align-middle me-2"></i>
              {{ fillInInformationYear }}</b-button>&nbsp;&nbsp;
            <b-button variant="warning" v-if="values.f_yeartotal == '1'" @click="
                rightDrawerFormTotal(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              ">
              <i class="fas fa-file-code font-size-16 align-middle me-2"></i>
              {{ fillInInformation }}</b-button>&nbsp;&nbsp;
            <b-button variant="warning" v-if="values.f_yeartotal == '2'" @click="
                rightDrawerFormTotal(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              ">
              <i class="fas fa-file-code font-size-16 align-middle me-2"></i>
              {{ fillInInformation }}</b-button>
          </td>
        </tr>
      </tbody>
    </table>
    <Drawer @close="rightDrawerDescription" :align="'right'" :closeable="true" :maskClosable="true" :zIndex="1002">
      <div v-if="openRightDrawer">
        <DrawerEvidenceExplanation :GData="QuestionnaireData" :GroupTab="GData" :code="titleDrawer" :title="DrawerTitle"
          :detail="DrawerRemark" />
      </div>
    </Drawer>
    <Drawer @close="rightDrawerUploadFile" :align="'right'" :closeable="true" :maskClosable="true" :zIndex="1002">
      <div v-if="openRightUploadDrawer">
        <DrawerUploadFile :GData="QuestionnaireData" :GroupTab="GData" :code="titleDrawer" :title="DrawerTitle"
          :detail="DrawerRemark" :uploadImage="f_upload_image" :uploadFile="f_upload_file"
          :additionalMessage="f_additional_message" :addressUrl="f_address_url" />
      </div>
    </Drawer>
    <Drawer @close="rightDrawerYearTotal" :align="'right'" :closeable="true" :maskClosable="true" :zIndex="1100">
      <div v-if="openRightYearDrawer">
        <div class="offcanvas-header newspaper">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <font color="#BF490D">{{ fillInInformationYear }}</font><br />
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
    <Drawer @close="rightDrawerFormTotal" :align="'right'" :closeable="true" :maskClosable="true" :zIndex="1100">
      <div v-if="openRightFormDrawer">
        <div class="offcanvas-header newspaper">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <font color="#BF490D">{{ fillInInformation }}</font><br />
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
  import {
    MasterService,
    QuestionnaireService,
    ScoreService,
    FlowAnswerService
  } from "@/api/index.js";
  import Lightbox from "@/components/widgets/profile/Lightbox.vue";
  import QuestionnaireUpload from "@/components/widgets/questionnaire/QuestionnaireUpload.vue";
  import Satisfaction from "@/components/widgets/questionnaire/Satisfaction.vue";
  import TopForm from "@/components/widgets/questionnaire/TopForm.vue";
  import DrawerEvidenceExplanation from "@/components/widgets/questionnaire/DrawerEvidenceExplanation.vue";
  import DrawerUploadFile from "@/components/widgets/questionnaire/DrawerUploadFile.vue";
  import moment from 'moment';
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
      "ModeReset",
    ],
    page: {
      title: appConfig.shortname,
      meta: [{
        name: "description",
        content: appConfig.description,
      }, ],
    },
    components: {
      Drawer,
      Lightbox,
      QuestionnaireUpload,
      Satisfaction,
      TopForm,
      DrawerEvidenceExplanation,
      DrawerUploadFile,
    },
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
        f_additional_message: 0,
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
        scoreTotal: [],
        DataCaculator: 0,
        titleG1WT: appConfig.titleG1WT,
        titleG2WT: appConfig.titleG2WT,
        titleG3WT: appConfig.titleG3WT,
        titleG4WT: appConfig.titleG4WT,
        titleG5WT: appConfig.titleG5WT,
        ShowScoreWT: Config.ShowScoreWT,
        score: appConfig.score,
        HospitalLevel: Config.HospitalLevel,
        wigthScore: appConfig.wigthScore,
        G1:0,
        G2:0,
        G3:0,
        G4:0,
        G5:0,
        GTotal:0,
        fieldsFile: [{
          idFile: 1
        }],
        fieldsImage: [{
          idImage: 1
        }],
        GetScoreByRunning: [],
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
      rightDrawerDescription(index, f_code, f_title, f_detail, f_address_url, f_additional_message) {
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
        this.f_additional_message = f_additional_message
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
      async voteScore(event, i, f_code, f_question_group, f_section, f_title, f_question, f_sequence, dataSet) {
        let IdCodes = f_code + "data";
        let IdScore = i + '-' + f_code + '-' + "Score";
        document.getElementById(IdCodes).innerText = event;
        document.getElementById(IdScore).disabled = true;
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
              res[value.group] = {
                group: value.group,
                score: 0,
                tab: f_section
              };
              result.push(res[value.group]);
            }
            res[value.group].score += value.score;
            return res;
          }
        }, {});
        this.scoreTotal = result
        let payScore = {
          group: result,
          f_docrunning: localStorage.getItem("f_docrunning"),
          f_userCode: localStorage.getItem("f_code"),
          f_hospitalCode: localStorage.getItem("profile"),
        }
        for (let index = 0; index < result.length; index++) {
          const element = result[index];
          if (f_question_group == element.group) {
            let IdSum = f_section + '-' + f_question_group + "sum";
            let IdSumTitle = f_section + '-' + f_question_group + "title";
            console.log('Group G :=> ',element.tab)
            switch(element.tab) {
              case 'G1':               
                this.G1 = element.score / dataSet.f_questionWtSub * dataSet.f_questionWtMain
                console.log('Score G1 :===> ',this.G1)
                break;
              case 'G2':
                this.G2 = element.score / dataSet.f_questionWtSub * dataSet.f_questionWtMain
                console.log('Score G2 :===> ',this.G2)
                break;
              case 'G3':
                this.G3 = element.score / dataSet.f_questionWtSub * dataSet.f_questionWtMain
                console.log('Score G3 :===> ',this.G3)
                break;
              case 'G4':
                this.G4 = element.score / dataSet.f_questionWtSub * dataSet.f_questionWtMain
                console.log('Score G4 :===> ',this.G4)
                break;
              case 'G5':
                this.G5 = element.score / dataSet.f_questionWtSub * dataSet.f_questionWtMain
                console.log('Score G5 :===> ',this.G5)
                break;                                                
              default:
                console.log('Not Case Sum G Tab')
            }
            if (this.ShowScoreWT == 1) {
              document.getElementById(IdSum).innerHTML = element.score / dataSet.f_questionWtSub * dataSet
                .f_questionWtMain
              document.getElementById(IdSumTitle).innerHTML = element.score + '/' + dataSet.f_questionWtSub + '*' +
                dataSet.f_questionWtMain
            } else {
              document.getElementById(IdSum).innerHTML = element.score / dataSet.f_questionWtSub * dataSet
                .f_questionWtMain
            }
          }
        }
        let yearData = new Date().getFullYear() + 543;
        const payload = {
          f_section: f_section,
          f_docrunning: localStorage.getItem("f_docrunning"),
          f_userCode: localStorage.getItem("f_code"),
          f_hospitalCode: localStorage.getItem("profile"),
          f_year: yearData,
          f_score: event,
          f_title: f_title,
          f_codetitle: f_code,
          f_status: 1,
          f_question: f_question,
          f_sequence: f_sequence,
          f_question_group: f_question_group,
          f_createdate: moment(this.toDay).format('YYYY-MM-DD HH:mm:ss'),
          f_province: '-',
          f_hospitalLevel: this.HospitalLevel
        };
        await ScoreService.SaveScore(payload)
        const pay = {
          f_running: localStorage.getItem("f_docrunning"),
          f_g1: 0,
          f_g2: 0,
          f_g3: 0,
          f_g4: 0,
          f_g5: 0,
          f_Total: 0,
          f_levelOne: localStorage.getItem("profile"),
          f_levelOneName: localStorage.getItem("f_code"),
          f_appove: 0,
          f_statusAppove: 0,
          f_year: yearData,
          f_hospitalCode: localStorage.getItem("profile"),
          f_createdate: moment(this.toDay).format('YYYY-MM-DD HH:mm:ss'),
          f_createBy: localStorage.getItem("f_code"),
          f_status: 0,
        };
        await FlowAnswerService.SaveData(pay)
      },
      handlerClick(f_code, index) {
        console.log("value f_code : " + f_code, "Number : ", index);
      },
      async getDataQuestionnaire() {
        this.dataDateTime = moment().format("LLLL");
        moment.locale("th");
        let yearData = new Date().getFullYear() + 543;
        let data = await ScoreService.GetScoreById(localStorage.getItem("profile"), localStorage.getItem(
          "f_docrunning"), yearData, this.GData)
        if (data.messagesboxs = 'Success') {
          this.GetScoreByRunning = data.result
        } else {
          this.GetScoreByRunning = null
        }
      },
    },
    beforeCreate() {},
    created() {
      this.getYear();
      this.getScoreAll();
      this.getZoneAreaAll();
      this.getQuestionnaireAll();
      this.getDataQuestionnaire();
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