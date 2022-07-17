<template>
  <section class="bg-white" id="Lightbox">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <h4 class="card-title">{{ historyProfile }}</h4>
              <p class="card-title-desc">
                {{ historyProfiles }}&nbsp;&nbsp;:&nbsp;&nbsp;<font color='#DF06E6'>{{ budgetYear }}</font>
              </p>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col-6">
                  <h4 class="font-size-15">
                    {{ budgetYearName }} <font color='#DF06E6'>{{ budgetYear }}</font>
                  </h4>
                </div>
                <div class="col-6">
                  <h4 class="font-size-15">
                    {{ selfAssessmentResults }}
                    <font color='#DF06E6'>{{ statusSelfAssessmentResults }}</font>
                  </h4>
                </div>
              </div>
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
                &nbsp;&nbsp;:&nbsp;&nbsp;<font color='#DF06E6'>{{ totalG1 }}</font>
              </template>
              <DataTable GData="G1" />
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-inline-block d-sm-none">
                  <i class="far fa-user"></i>
                </span>
                <span class="d-none d-sm-inline-block">G2</span>
                &nbsp;&nbsp;:&nbsp;&nbsp;<font color='#DF06E6'>{{ totalG2 }}</font>
              </template>
              <DataTable GData="G2" />
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-inline-block d-sm-none">
                  <i class="far fa-envelope"></i>
                </span>
                <span class="d-none d-sm-inline-block">G3</span>
                &nbsp;&nbsp;:&nbsp;&nbsp;<font color='#DF06E6'>{{ totalG3 }}</font>
              </template>
              <DataTable GData="G3" />
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-inline-block d-sm-none">
                  <i class="fas fa-cog"></i>
                </span>
                <span class="d-none d-sm-inline-block">G4</span>
                &nbsp;&nbsp;:&nbsp;&nbsp;<font color='#DF06E6'>{{ totalG4 }}</font>
              </template>
              <DataTable GData="G4" />
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-inline-block d-sm-none">
                  <i class="fas fa-cog"></i>
                </span>
                <span class="d-none d-sm-inline-block">G5</span>
                &nbsp;&nbsp;:&nbsp;&nbsp;<font color='#DF06E6'>{{ totalG5 }}</font>
              </template>
              <DataTable GData="G5" />
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import appConfig from "@/app.config";
import Config from "@/config.json";
import { MasterService, QuestionnaireService ,ScoreService } from "@/api/index.js";
import DataTable from "@/components/widgets/profile/DataTable.vue";
export default {
  name: "HistoryProfileWidgets",
  props: ["form", "mode", "questionnaire", "budgetYear"],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { DataTable },
  data() {
    return {
      OrganizationalCharacteristics: appConfig.OrganizationalCharacteristics,
      statusSelfAssessmentResults: null,
      vision: appConfig.vision,
      mission: appConfig.mission,
      selfAssessmentResults: appConfig.selfAssessmentResults,
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
      budgetYearName: appConfig.budgetYear,
      GData: null,
      totalG1:0,
      totalG2:0,
      totalG3:0,
      totalG4:0,
      totalG5:0,
    };
  },
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {
    this.statusSelfAssessmentResults ='ไม่ผ่าน'
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
</style>
