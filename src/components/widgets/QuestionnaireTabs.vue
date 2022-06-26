<template>
 <section class="bg-white" id="Lightbox">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">เลขที่เอกสาร&nbsp;&nbsp;:&nbsp;&nbsp;<font color="red">{{toDayDataFormat}}</font></h4>
            <p class="card-title-desc">การประเมินตนเองตามมาตราฐานบริการสุขภาพที่เป็นมิตรสำหรับวัยรุ่น</p>
            <b-tabs justified nav-class="nav-tabs-custom" content-class="p-3 text-muted">
              <b-tab active>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G1</span>
                    <p id="totalG1" name="totalG1" class="text-muted mb-2">
                        Total: <font color="red">{{ totalG1 }}</font>
                    </p>                  
                </template>
                <QuestionnaireTable GData="G1"/>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G2</span>
                    <p id="totalG1" name="totalG1" class="text-muted mb-2">
                        Total: <font color="red">{{ totalG2 }}</font>
                    </p>                     
                </template>
                <QuestionnaireTable GData="G2"/>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G3</span>
                    <p id="totalG1" name="totalG1" class="text-muted mb-2">
                        Total: <font color="red">{{ totalG3 }}</font>
                    </p>                     
                </template>
                <QuestionnaireTable GData="G3"/>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G4</span>
                    <p id="totalG1" name="totalG1" class="text-muted mb-2">
                        Total: <font color="red">{{ totalG4 }}</font>
                    </p>                     
                </template>
                <QuestionnaireTable GData="G4"/>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G5</span>
                    <p id="totalG1" name="totalG1" class="text-muted mb-2">
                        Total: <font color="red">{{ totalG5 }}</font>
                    </p>                     
                </template>
                 <QuestionnaireTable GData="G5"/>
              </b-tab>              
            </b-tabs>
          </div>
        </div>
      </div>  
</section>
</template>
<script>import appConfig from "@/app.config";
import QuestionnaireTable from "@/components/widgets/QuestionnaireTable.vue";
import moment from "moment";
export default {
  name: 'QuestionnaireTabs',
  props: ["form","mode","questionnaire","budgetYear"],  
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {QuestionnaireTable, },
  data() {
    return {
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
      toDayDataFormat:null,
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
      this.toDayDataFormat = runnigYear + runnigMonth + runnigDay + runningTime;
      let d = date.format("YYYY");
    }
    this.year =date.format("YYYY");      
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
</style>