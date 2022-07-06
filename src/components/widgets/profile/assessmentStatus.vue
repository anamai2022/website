<template>
 <section class="bg-white" id="Lightbox">
         <div class="card-body">
          <h4 class="card-title mb-5">{{assessmentStatus}}</h4>
          <div class>
            <ul class="verti-timeline list-unstyled">
              <li class="event-list active">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle bx-fade-right"></i>
                </div>
                <div class="d-flex">
                  <div class="me-3">
                    <i class="fas fa-hospital h4 text-primary"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark"
                          >{{assessmentHospital}}</a>
                      </h5>
                      <span class="text-primary">{{assessmentScore}} : </span><br>
                      <span class="text-primary">{{assessmentStatusAppove}} : </span><br>
                      <span class="text-primary">{{assessmentDateAppove}} : </span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle"></i>
                </div>
                <div class="d-flex">
                  <div class="me-3">
                    <i class="fas fa-hospital-user h4 text-primary"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark"
                          >{{assessmentLevel1}}</a
                        >
                      </h5>
                      <span class="text-primary">{{assessmentScore}} : </span><br>
                      <span class="text-primary">{{assessmentStatusAppove}} : </span><br>
                      <span class="text-primary">{{assessmentDateAppove}} : </span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle"></i>
                </div>
                <div class="d-flex">
                  <div class="me-3">
                    <i class="fas fa-user-tag h4 text-primary"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark"
                          >{{assessmentLevel2}}</a
                        >
                      </h5>
                      <span class="text-primary">{{assessmentScore}} : </span><br>
                      <span class="text-primary">{{assessmentStatusAppove}} : </span><br>
                      <span class="text-primary">{{assessmentDateAppove}} : </span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle"></i>
                </div>
                <div class="d-flex">
                  <div class="me-3">
                    <i class="fas fa-hospital-alt h4 text-primary"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark"
                          >{{assessmentLevel3}}</a
                        >
                      </h5>
                      <span class="text-primary">{{assessmentScore}} : </span><br>
                      <span class="text-primary">{{assessmentStatusAppove}} : </span><br>
                      <span class="text-primary">{{assessmentDateAppove}} : </span>
                    </div>
                  </div>
                </div>
              </li>                          
            </ul>
          </div>
        </div>
</section>
</template>
<script>import appConfig from "@/app.config";
export default {
  name: 'AssessmentStatusWidgets',
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
      assessmentHospital: appConfig.assessmentHospital,
      assessmentLevel1: appConfig.assessmentLevel1,
      assessmentLevel2: appConfig.assessmentLevel2,
      assessmentLevel3: appConfig.assessmentLevel3,
      assessmentLevel4: appConfig.assessmentLevel4,
      assessmentScore: appConfig.assessmentScore,
      assessmentStatusAppove: appConfig.assessmentStatusAppove,
      assessmentDateAppove: appConfig.assessmentDateAppove,
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