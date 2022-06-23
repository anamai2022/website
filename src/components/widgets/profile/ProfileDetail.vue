<template>
 <section class="section" id="profileDetail">
  <div class="row pageset">
    <div class="col-xl-4">
      <div class="card overflow-hidden">
        <div class="bg-soft bg-primary">
          <div class="row">
            <div class="col-7">
              <div class="text-primary p-3">
                <h5 class="text-primary">{{Welcome}}</h5>
                <p>{{title}}</p>
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
            <div class="col-sm-4">
              <div class="avatar-md profile-user-wid mb-4">
                <img
                  src="@/assets/images/users/avatar-1.jpg"
                  alt
                  class="img-thumbnail rounded-circle"
                />
              </div>
              <h4 class="font-size-14 text-truncate">{{hospital}}</h4>
              <p class="text-muted mb-0 text-truncate">{{hospitalName}}</p>
            </div>

            <div class="col-sm-8">
              <div class="pt-4">
                <div class="row">
                  <div class="col-6">
                    <h5 class="font-size-15">{{budgetYearName}}</h5>
                    <p class="text-muted mb-0">{{budgetYear}}</p>
                  </div>
                  <div class="col-6">
                    <h5 class="font-size-15">{{selfAssessmentResults}}</h5>
                    <p class="text-muted mb-0">{{statusSelfAssessmentResults}}</p>
                  </div>
                </div>
                <div class="mt-4">
                    <b-button v-b-modal.modal-hospital variant="primary" right>
                      <i class="fas fa-hospital-user font-size-16 align-middle me-2"></i>{{hospitalProfile}}
                    </b-button>
                    <b-modal id="modal-hospital" :title="hospitalProfile" title-class="font-18">
                       <popupProfile :form="form" :mode="mode" :questionnaire="questionnaire" />
                    </b-modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-4">{{OrganizationalCharacteristics}}</h4>
          <p class="text-muted mb-4">
            <b-button v-b-modal.modal-Organizational variant="success">
              <i class="fas fa-address-book font-size-16 align-middle me-2"></i>{{OrganizationalData}}
            </b-button>
            <b-modal id="modal-Organizational" :title="OrganizationalCharacteristics" title-class="font-18">
              <Organizational :form="form" :mode="mode" :questionnaire="questionnaire" />
            </b-modal>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b-button v-b-modal.modal-Organizational variant="danger" left>
              <i class="fas fa-address-card font-size-16 align-middle me-2"></i>{{PersonInChargeOfAdolescentClinic}}
            </b-button>            
          </p>
          <div class="table-responsive ">
            <table class="table table-nowrap mb-0">
              <tbody>
                <tr>
                  <th scope="row">{{vision}} :</th>
                  <td>Cynthia Price</td>
                </tr>
                <tr>
                  <th scope="row">{{mission}} :</th>
                  <td>(123) 123 1234</td>
                </tr>
                <tr>
                  <th scope="row">{{goal}} :</th>
                  <td>cynthiaskote@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">{{policy}} :</th>
                  <td>California, United States</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <assessmentStatus />
      </div>
    </div>

    <div class="col-xl-8">
      <div class="card">
        <historyProfile />
      </div>
      <div class="card">
        <Lightbox />
      </div>
    </div>
  </div>
</section>
</template>
<script>
import Dataquestionnaire from "@/data/questionnaire.json";
import popupProfile from "@/components/widgets/profile/popupProfile.vue";
import Organizational from "@/components/widgets/profile/Organizational.vue";
import Lightbox from "@/components/widgets/profile/Lightbox.vue";
import historyProfile from "@/components/widgets/profile/historyProfile.vue"; 
import assessmentStatus from "@/components/widgets/profile/assessmentStatus.vue"; 

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
  props: ["form", "mode", "questionnaire"],
  components: { popupProfile, Organizational, Lightbox, historyProfile, assessmentStatus, },
  data() {
    return {
      DataSetQuestionnaire: Dataquestionnaire,
      informationHeader: appConfig.informationHeader,
      informationDetail: appConfig.informationDetail,
      linkeHome: appConfig.linkeHome,
      hospital: appConfig.hospitalname,
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
      assessmentStatus: appConfig.assessmentStatus,
      historyProfile: appConfig.historyProfile,
      Questions: appConfig.Questions,
      QuestionsScore: appConfig.QuestionsScore,
      QuestionsDescription: appConfig.QuestionsDescription,
      QuestionsAction: appConfig.QuestionsAction,
      QuestionsAttachment: appConfig.QuestionsAttachment,
      QuestionsGroup: appConfig.QuestionsGroup,
      OrganizationalData: appConfig.OrganizationalData,
      PersonInChargeOfAdolescentClinic: appConfig.PersonInChargeOfAdolescentClinic,
    };
  },
  created() {
    console.log("Check login : ", localStorage.getItem("token"));
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
    if (this.hospitalName == null) {
      this.hospitalName = "ไม่ระบุ";
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