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
                    <i class="bx bx-server h4 text-primary"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark"
                          >Back end Developer</a
                        >
                      </h5>
                      <span class="text-primary">2016 - 19</span>
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
                    <i class="bx bx-code h4 text-primary"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark"
                          >Front end Developer</a
                        >
                      </h5>
                      <span class="text-primary">2013 - 16</span>
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
                    <i class="bx bx-edit h4 text-primary"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark"
                          >UI /UX Designer</a
                        >
                      </h5>
                      <span class="text-primary">2011 - 13</span>
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
                    <i class="bx bx-edit h4 text-primary"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark"
                          >UI /UX Designer</a
                        >
                      </h5>
                      <span class="text-primary">2011 - 13</span>
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
                    <i class="bx bx-edit h4 text-primary"></i>
                  </div>
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark"
                          >UI /UX Designer</a
                        >
                      </h5>
                      <span class="text-primary">2011 - 13</span>
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