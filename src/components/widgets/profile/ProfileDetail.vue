<template>
  <section class="section" id="profileDetail">
    <div class="row pageset">
      <div class="col-xl-4">
        <div class="card overflow-hidden">
          <div class="bg-soft bg-primary">
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-3">
                  <h5 class="text-primary">{{ Welcome }}</h5>
                  <p>{{ title }}</p>
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img
                  src="@/assets/images/profile-img.png"
                  alt
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div class="row">
              <div class="col-sm-5">
                <div class="avatar-md profile-user-wid mb-4">
                  <img
                    src="@/assets/images/logobig.png"
                    alt
                    class="img-thumbnail rounded-circle"
                  />
                </div>               
                <h4 class="font-size-14 text-truncate">{{ hospital }}</h4>
                <p class="text-muted mb-0 text-truncate">{{ hospitalData.f_hospitalname }}</p>              
              </div>

              <div class="col-sm-7">
                <div class="pt-4">
                  <div class="row">
                    <div class="col-6">
                      <h5 class="font-size-15">{{ budgetYearName }}</h5>
                      <p class="text-muted mb-0">{{ budgetYear }}</p>
                    </div>
                    <div class="col-6">
                      <h5 class="font-size-15">{{ selfAssessmentResults }}</h5>
                      <p class="text-muted mb-0">
                        {{ statusSelfAssessmentResults }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <b-button v-b-modal.modal-hospital variant="primary" right>
                      <i
                        class="fas fa-hospital-user font-size-16 align-middle me-2"
                      ></i
                      >{{ hospitalProfile }}
                    </b-button>
                    <b-modal
                      id="modal-hospital"
                      :title="hospitalProfile +'  '+titleStatuMode+' : '+ modeHispital"
                      title-class="font-18"
                      hide-footer
                    >
                      <popupProfile
                        :form="form"
                        :mode="modeHispital"
                        :hospitalData="hospitalData"
                      />
                    </b-modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <OrganizationalCharacteristics :mode="modeOrgran" :dataSet="OrganizationalCharacteristicsData"/>
              <b-button v-b-modal.modal-Organizational variant="success">
                <i
                  class="fas fa-address-book font-size-16 align-middle me-2"
                ></i
                >{{ OrganizationalData }}
              </b-button>
              <b-modal
                id="modal-Organizational"
                :title="OrganizationalCharacteristics+'  '+titleStatuMode+' : '+ modeOrgran"
                title-class="font-18"
                hide-footer
              >
                <Organizational
                  :mode="modeOrgran"
                  :dataSet="OrganizationalCharacteristicsData"
                  :policyData="policyData"/></b-modal>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b-button
                v-b-modal.modal-OrganizationalPerson
                variant="danger"
                left
              >
                <i
                  class="fas fa-address-card font-size-16 align-middle me-2"
                ></i
                >{{ PersonInChargeOfAdolescentClinic }}
              </b-button>
              <b-modal
                id="modal-OrganizationalPerson"
                :title="PersonInChargeOfAdolescentClinic+'  '+titleStatuMode+' : '+ modeHispital"
                title-class="font-18"
                hide-footer
                ><PersonInChargeOfAdolescentClinic
                  :form="form"
                  :mode="modeHispital"
                  :ContactData="ContactData"                  
              /></b-modal>            
          </div>
        </div>

        <div class="card">
          <assessmentStatus :form="form" :mode="mode" />
        </div>
      </div>

      <div class="col-xl-8">
        <div class="card">
          <historyProfile :form="form" :mode="mode" :budgetYear="budgetYear" />
        </div>
        <div class="card" v-if="showImg === true">
          <Lightbox :form="form" :mode="mode" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import  { contactService, profileService, HospitalService } from "@/api/index.js";
import Dataquestionnaire from "@/data/questionnaire.json";
import popupProfile from "@/components/widgets/profile/popupProfile.vue";
import Organizational from "@/components/widgets/profile/Organizational.vue";
import Lightbox from "@/components/widgets/profile/Lightbox.vue";
import historyProfile from "@/components/widgets/profile/historyProfile.vue";
import assessmentStatus from "@/components/widgets/profile/assessmentStatus.vue";
import OrganizationalCharacteristics from "@/components/widgets/profile/OrganizationalCharacteristics.vue";
import PersonInChargeOfAdolescentClinic from "@/components/widgets/profile/PersonInChargeOfAdolescentClinic.vue";
import appConfig from "@/app.config";
import moment from "moment";
export default {
  name: "ProfileDetail",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  props: ["form", "mode"],
  components: {
    popupProfile,
    Organizational,
    Lightbox,
    historyProfile,
    assessmentStatus,
    PersonInChargeOfAdolescentClinic,
    OrganizationalCharacteristics,
  },
  data() {
    return {
      DataSetQuestionnaire: Dataquestionnaire,
      titleStatuMode: appConfig.titleStatuMode,
      informationHeader: appConfig.informationHeader,
      informationDetail: appConfig.informationDetail,
      linkeHome: appConfig.linkeHome,
      hospital: appConfig.hospitalname,
      hospitalName: null,
      hospitalProfile: appConfig.hospitalProfile,
      budgetYearName: appConfig.budgetYear,
      selfAssessmentResults: appConfig.selfAssessmentResults,
      gradePoint: appConfig.gradePoint,
      title: appConfig.websiteName,
      Welcome: appConfig.Welcome,
      budgetYear: null,
      statusSelfAssessmentResults: null,
      gradeSelfAssessmentResults: null,
      OrganizationalCharacteristics: appConfig.OrganizationalCharacteristics,
      vision: appConfig.vision,
      mission: appConfig.mission,
      goal: appConfig.goal,
      policy: appConfig.policy,
      visionData: null,
      missionData: null,
      goalData: null,
      policyData: null,
      showImg: false,
      assessmentStatus: appConfig.assessmentStatus,
      historyProfile: appConfig.historyProfile,
      Questions: appConfig.Questions,
      QuestionsScore: appConfig.QuestionsScore,
      QuestionsDescription: appConfig.QuestionsDescription,
      QuestionsAction: appConfig.QuestionsAction,
      QuestionsAttachment: appConfig.QuestionsAttachment,
      QuestionsGroup: appConfig.QuestionsGroup,
      OrganizationalData: appConfig.OrganizationalData,
      PersonInChargeOfAdolescentClinic:
        appConfig.PersonInChargeOfAdolescentClinic,
      ContactData: null,
      hospitalData: null,
      DataSet:null,
      modeHispital:null,
      modeOrgran:null,
      f_hospitalname: null,
      OrganizationalCharacteristicsData: null,      
    };
  },
  created() {
    var username = localStorage.getItem("token");
    if (!username) {
      this.$router.push("/logincode");
    }
    const toDayData = new Date();
    let date = moment(toDayData, "DD/MM/YYYY");
    moment.locale("th");
    date.add(543, "years");
    this.budgetYear = date.format("YYYY");
    if (this.statusSelfAssessmentResults == null) {
      this.statusSelfAssessmentResults = "ไม่ผ่าน";
    }
    if (this.gradeSelfAssessmentResults == null) {
      this.gradeSelfAssessmentResults = "F";
    }
   
    this.getContact();
    this.getProfile();
    this.getHospital();    
  
  },
  methods: {
    async getContact(){
      const results = await contactService.getContactAll();
      if(results.messagesboxs == 'unSuccess' ){
        this.$swal({
              icon: "warning",
              title: appConfig.plaseInputContact ,
              text: appConfig.plaseInputMessageContact ,
              allowOutsideClick: false,
            });
      }else{
        this.ContactData = results.result           
      }
      return results
    },
    async getProfile(){
      const result = await profileService.getProfileByCode();
      if(result.messagesboxs == 'unSuccess' ){
        this.$swal({
              icon: "warning",
              title: appConfig.plaseInputOrgran ,
              text: appConfig.plaseInputMessageOrgran ,
              allowOutsideClick: false,
            });
        this.modeOrgran = 'Create'                 
      }else{
        this.OrganizationalCharacteristicsData = result.result   
        this.visionData = this.OrganizationalCharacteristicsData.f_vision;
        this.goalData = this.OrganizationalCharacteristicsData.f_gotoKnow;
        this.missionData = this.OrganizationalCharacteristicsData.f_mistion;
        this.policyData = this.OrganizationalCharacteristicsData.f_policy;
        this.modeOrgran = 'Update'
      }
      console.log(this.modeOrgran)
      return result
    },
    async getHospital(){
      const resultx = await HospitalService.getHospitalByCode();
      if(resultx.messagesboxs == 'unSuccess' ){
        this.$swal({
              icon: "warning",
              title: appConfig.plaseInputMessage ,
              text: appConfig.plaseInputProfile ,
              allowOutsideClick: false,
            });
        this.modeHispital = 'Create'         
      }else{      
        this.hospitalData = resultx.result[0]
        this.modeHispital = 'Update'        
      }
      return resultx
    }
  },
};
</script>
<style scoped>
.pageset {
  margin-right: 50px;
  margin-left: 50px;
}
</style>
