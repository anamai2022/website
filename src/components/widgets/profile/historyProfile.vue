<template>
 <section class="bg-white" id="Lightbox">
        <div class="card-body">
          <h4 class="card-title mb-3">{{historyProfile}}</h4>
          <div class="table-responsive">
            <table class="table table-nowrap table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{{Questions}}</th>
                  <th scope="col">{{QuestionsScore}}</th>
                  <th scope="col">{{QuestionsGroup}}</th>
                  <th scope="col">{{QuestionsAttachment}}</th>
                  <th scope="col">{{QuestionsAction}}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>1.1 นโยบายที่มุ่งไปสู่การพัฒนาระบบบริการสุขภาพสำหรับวัยรุ่นและเยาวชน</td>
                  <td>1</td>
                  <td>G1</td>
                  <td>
                    <i class="fas fa-file-word align-middle me-2 btn-info font-size-18"></i>
                    <i class="fas fa-file-image align-middle me-2 btn-primary font-size-18"></i>
                    <i class="fas fa-file-excel align-middle me-2 btn-success font-size-18"></i>
                    <i class="fas fa-file-pdf align-middle me-2 btn-danger font-size-18"></i>                    
                  </td>
                  <td>
                    <i class="fas fa-edit align-middle me-2 font-size-18"></i>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>    
</section>
</template>
<script>import appConfig from "@/app.config";
export default {
  name: 'HistoryProfileWidgets',
  props: ["form","mode","questionnaire"],  
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { },
  data() {
    return {
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
    };
  },
  computed: {},
  methods: {},
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