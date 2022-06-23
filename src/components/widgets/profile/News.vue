<template>
  <section class="section bg-white" id="news">
      <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <img src="@/assets/images/companies/img-1.png" alt class="avatar-sm me-4" />

              <div class="flex-grow-1 overflow-hidden">
                <h5 class="text-truncate font-size-15">Skote Dashboard UI</h5>
                <p class="text-muted">Separate existence is a myth. For science, music, sport, etc.</p>
              </div>
            </div>

            <h5 class="font-size-15 mt-4">Project Details :</h5>

            <p
              class="text-muted"
            >To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,</p>

            <div class="text-muted mt-4">
              <p>
                <i class="mdi mdi-chevron-right text-primary me-1"></i> To achieve this, it would be necessary
              </p>
              <p>
                <i class="mdi mdi-chevron-right text-primary me-1"></i> Separate existence is a myth.
              </p>
              <p>
                <i class="mdi mdi-chevron-right text-primary me-1"></i> If several languages coalesce
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
              <div class="d-flex">
                <div class="me-3">
                  <img
                    src="@/assets/images/users/avatar-1.jpg"
                    alt=""
                    class="avatar-sm rounded-circle img-thumbnail"
                  />
                </div>
                <div class="flex-grow-1">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <div class="text-muted">
                        <h5 class="mb-1">{{hospital}}</h5>
                        <p class="mb-0">{{hospitalName}}</p>
                      </div>
                    </div>
                    <b-button v-b-modal.modal-hospital variant="primary" right>
                      <i class="bx bx-pencil font-size-16 align-middle me-2"></i>{{hospitalProfile}}
                    </b-button>
                    <b-modal id="modal-hospital" :title="hospitalProfile" title-class="font-18">
                       <popupProfile :form="form" :mode="mode" :questionnaire="questionnaire" />
                    </b-modal>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">{{budgetYearName}}</p>
                        <h5 class="mb-0">{{budgetYear}}</h5>
                      </div>
                    </div>
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">{{selfAssessmentResults}}</p>
                        <h5 class="mb-0">{{statusSelfAssessmentResults}}</h5>
                      </div>
                    </div>
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">{{gradePoint}}</p>
                        <h5 class="mb-0">{{gradeSelfAssessmentResults}}</h5>
                      </div>
                    </div>                    
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
  </section>
</template>
<script>
import Dataquestionnaire from "@/data/questionnaire.json";
import popupProfile from "@/components/widgets/profile/popupProfile.vue";
import appConfig from "@/app.config";
import moment from "moment";
export default {
  name: "News",
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
  components: { popupProfile, },
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
      budgetYear:null,
      statusSelfAssessmentResults:null,
      gradeSelfAssessmentResults:null,
    };
  },
  created() {
    console.log('Check login : ',localStorage.getItem('token'))
    var username = localStorage.getItem('token')
      if (!username) {
        this.$router.push('/logincode')
      }
    const toDayData = new Date();
    let date = moment(toDayData, "DD/MM/YYYY");
    moment.locale("th");
    date.add(543, "years");
    this.budgetYear = date.format("YYYY");
    if(this.statusSelfAssessmentResults == null){
      this.statusSelfAssessmentResults = 'ไม่ผ่าน'
    }
    if(this.gradeSelfAssessmentResults == null)      {
      this.gradeSelfAssessmentResults = 'F'
    }
    if(this.hospitalName == null){
      this.hospitalName = 'ไม่ระบุ'
    }
  },  
mounted() {},
};
</script>