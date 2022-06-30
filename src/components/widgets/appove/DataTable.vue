<template>
  <div class="table-responsive">
    <table class="table table-nowrap table-hover mb-0">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">{{ AssessmentCriteria }}</th>
          <th scope="col">{{ Assessment }}</th>
          <th scope="col">{{ AssessmentDetail }}</th>
          <th scope="col">{{ QuestionsAction }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(values, index) in QuestionnaireData" :key="index">
          <th>
            <!-- <input
            type="checkbox"
            :id="values.f_code"
            :name="values.f_code"
            :value="values.f_code"
            @click="handlerClick(values.f_code, index)"> -->
          </th>
          <td v-if="values.f_hadertitle ==0">
            <p class="ex1">{{ values.f_title }}</p>
          </td>
          <td v-else><b color="red">{{ values.f_title }}</b></td>          
          <td v-if="values.f_hadertitle ==0">{{ ScoreData }}</td>
          <td v-else></td>
          <td v-if="values.f_hadertitle ==0">
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
          <td v-if="values.f_hadertitle ==0">
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
import { QuestionnaireService } from "@/api/index.js";
export default {
  name: "ProfileTable",
  props: ["form", "mode", "questionnaire", "budgetYear", "GData"],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {},
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
      QuestionnaireData: null,
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
    async getQuestionnaireAll() {
      const results = await QuestionnaireService.getQuestionnaireTabAll(
        this.GData
      );
      this.QuestionnaireData = results.result;
    },
    handlerClick(f_code, index) {
      console.log("value f_code : " + f_code, "Number : ", index);
    },
  },
  beforeCreate() {},
  created() {
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
</style>
