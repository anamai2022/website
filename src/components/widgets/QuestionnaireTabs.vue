<template>
 <section class="bg-white" id="Lightbox">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-6 ">
                <h4 class="card-title">เลขที่เอกสาร&nbsp;&nbsp;:&nbsp;&nbsp;<font color="red">{{toDayDataFormat}}</font></h4>
                <p class="card-title-desc">การประเมินตนเองตามมาตราฐานบริการสุขภาพที่เป็นมิตรสำหรับวัยรุ่น</p>                
              </div>
              <div class="col-6 rightButton">
                <button class="btn btn-success" type="submit" @click="SaveItem()">
                    {{ SubmitForm }}
                </button>
                &nbsp;&nbsp;
                <button class="btn btn-warning" type="submit" @click="ResetItem()">
                    {{ ResetForm }}
                </button>
                &nbsp;&nbsp;
                <button class="btn btn-danger" type="submit" @click="calculator()">
                    {{ calculatorForm }}
                </button>                
              </div>
            </div>  
            <b-tabs justified nav-class="nav-tabs-custom" content-class="p-3 text-muted">
              <b-tab active>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G1</span>
                    <p id="totalG1" name="totalG1" class="text-muted mb-2">
                        {{totalScore}}: <font color="red">{{ totalG1 }}</font>
                    </p>
                    <input type="number" id="G1PassTotal" name="G1PassTotal" v-model="G1PassTotal" readonly>                  
                </template>
                <QuestionnaireTable :GData="G1" :title="titleG1" :GScore="GScore1"/>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G2</span>
                    <p id="totalG2" name="totalG2" class="text-muted mb-2">
                        {{totalScore}}: <font color="red">{{ totalG2 }}</font>
                    </p> 
                    <input type="number" id="G2PassTotal" name="G2PassTotal" v-model="G2PassTotal" readonly>                                      
                </template>
                <QuestionnaireTable :GData="G2" :title="titleG2" :GScore="GScore2"/>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G3</span>
                    <p id="totalG3" name="totalG3" class="text-muted mb-2">
                        {{totalScore}}: <font color="red">{{ totalG3 }}</font>
                    </p>  
                    <input type="number" id="G3PassTotal" name="G3PassTotal" v-model="G3PassTotal" readonly>                                     
                </template>
                <QuestionnaireTable :GData="G3" :title="titleG3" :GScore="GScore3"/>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G4</span>
                    <p id="totalG4" name="totalG4" class="text-muted mb-2">
                        {{totalScore}}: <font color="red">{{ totalG4 }}</font>
                    </p>
                    <input type="number" id="G4PassTotal" name="G4PassTotal" v-model="G4PassTotal" readonly>                  
                </template>
                <QuestionnaireTable :GData="G4" :title="titleG4" :GScore="GScore4"/>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">G5</span>
                    <p id="totalG5" name="totalG5" class="text-muted mb-2">
                        {{totalScore}}: <font color="red">{{ totalG5 }}</font>
                    </p>
                    <input type="number" id="G5PassTotal" name="G5PassTotal" v-model="G5PassTotal" readonly>                  
                </template>
                 <QuestionnaireTable :GData="G5" :title="titleG5" :GScore="GScore5"/>
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
  props: ["form","mode","questionnaire","budgetYear","GScore"],  
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
      toDayDataFormat:null,
      totalG1:0,
      totalG2:0,
      totalG3:0,
      totalG4:0,
      totalG5:0,
      G1:"G1",
      G2:"G2",
      G3:"G3",
      G4:"G4",
      G5:"G5",
      G1PassTotal:20,
      G2PassTotal:10,
      G3PassTotal:20,
      G4PassTotal:10,
      G5PassTotal:10,
      titleG1: appConfig.titleG1,
      titleG2: appConfig.titleG2,
      titleG3: appConfig.titleG3,
      titleG4: appConfig.titleG4,
      titleG5: appConfig.titleG5,
      GScore1:appConfig.titleG1WT,
      GScore2:appConfig.titleG2WT,
      GScore3:appConfig.titleG3WT,
      GScore4:appConfig.titleG4WT,
      GScore5:appConfig.titleG5WT,   
      totalScore:appConfig.totalScore, 
      score:appConfig.score,  
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
    calculator(){
      this.sumTotal = this.G1PassTotal + this.G2PassTotal + this.G3PassTotal + this.G4PassTotal + this.G5PassTotal
      console.log('calculator',this.sumTotal)
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
.rightButton{
  text-align:right
}
</style>