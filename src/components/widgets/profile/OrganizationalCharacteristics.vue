<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{ OrganizationalCharacteristics }}</h4>
          <p class="card-title-desc">
            {{ OrganizationalCharacteristicsDetail }}
          </p>
          <div v-if="dataSet !== 'null'">
            <dl class="row mb-0" v-for="(items, index) in dataSet" :key="index">
              <dt class="col-sm-3">{{vision}}</dt>
              <dd class="col-sm-9">
                {{items.f_vision}}
              </dd>

              <dt class="col-sm-3">{{mission}}</dt>
              <dd class="col-sm-9">
                {{items.f_mistion}}
              </dd>

              <dt class="col-sm-3">{{goal}}</dt>
              <dd class="col-sm-9">
                {{items.f_gotoKnow}}
              </dd>

              <dt class="col-sm-3">{{policy}}</dt>
              <dd class="col-sm-9">
                {{items.f_policy}}
              </dd>

            </dl>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>import appConfig from "@/app.config";
export default {
  name: 'OrganizationalCharacteristics',
  props: ["form","mode","dataSet"],  
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
      OrganizationalCharacteristicsDetail: appConfig.OrganizationalCharacteristicsDetail,
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