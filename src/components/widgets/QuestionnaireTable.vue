<template>
  <div class="table-responsive">
    <b class=""
      ><font color="#FA0D05">องค์ประกอบที่ 1 นโยบายและการบริหารจัดการ</font></b
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
          <th scope="col">{{ QuestionsAction }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <th>{{ i }}</th>
          <td>
            1.{{
              i
            }}
            นโยบายที่มุ่งไปสู่การพัฒนาระบบบริการสุขภาพสำหรับวัยรุ่นและเยาวชน
          </td>
          <td>
            <span class="badge bg-success font-size-12">
              {{ totalScore }}
            </span>
          </td>
          <td>
            <b-button variant="primary">0</b-button>
            <b-button variant="primary">0.5</b-button>
            <b-button variant="primary">1</b-button>
            <b-button variant="primary">1.5</b-button>
            <b-button variant="secondary">
              <i class="fas fa-file-alt font-size-16 align-middle me-2"></i>
              {{ evidenceExplanation }}</b-button
            >
            <b-button variant="success">
              <i class="fas fa-file-invoice font-size-16 align-middle me-2"></i>
              {{ fillInInformationYear }}</b-button
            >
            <b-button variant="info">
              <i class="fas fa-file-upload font-size-16 align-middle me-2"></i>
              {{ uploadfile }}</b-button
            >
            <b-button variant="warning">
              <i class="fas fa-file-code font-size-16 align-middle me-2"></i>
              {{ fillInInformation }}</b-button
            >
            <b-button variant="danger">
              <i class="bx bx-smile font-size-16 align-middle me-2"></i>
              Danger</b-button
            >
            <b-button variant="dark">
              <i class="bx bx-smile font-size-16 align-middle me-2"></i>
              Dark</b-button
            >
          </td>
          <td>
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
                <i class="fas fa-pencil-alt text-success me-1"></i>
                Edit
              </b-dropdown-item>

              <b-dropdown-item>
                <i class="fas fa-trash-alt text-danger me-1"></i>
                Delete
              </b-dropdown-item>
            </b-dropdown>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import appConfig from "@/app.config";
export default {
  name: "DataTable",
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
      evidenceExplanation: appConfig.evidenceExplanation,
      uploadfile: appConfig.uploadfile,
      fillInInformation: appConfig.fillInInformation,
      fillInInformationYear: appConfig.fillInInformationYear,
      G: this.GData,
      totalScore: 0,
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
  },
  beforeCreate() {},
  created() {},
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
