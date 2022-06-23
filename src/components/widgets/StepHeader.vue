<template>
  <section class="bg-white" id="StepHeader">
    <div class="row" v-for="link in DataPollSet" :key="link.QuestionnaireId">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title centered">{{ link.QuestionnaireNickname}}</h4>
            <p class="card-title-desc centered">
              {{ link.QuestionnaireHeader}}
            </p>
            <p><b>{{Statement}}&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</b>{{ link.QuestionnaireDescription}}</p>
            <p><b>{{Remark}}&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;</b>{{ link.QuestionnaireRemark}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import appConfig from "@/app.config";
export default {
  name: 'StepHeader',
  props: ["form","mode","poll"],  
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
      title: appConfig.description,
      DataPollSet: this.poll,
      Statement: appConfig.Statement,
      Remark: appConfig.Remark,
    };
  },
  computed: {},
  methods: {
    handleReset() {
      location.reload();
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

