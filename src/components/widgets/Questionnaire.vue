<template>
  <div class="row">
    <StepHeader :form="form" :mode="mode" :questionnaire="questionnaire" />
    <StepDetail
      v-if="CountStep > 0"
      :form="form"
      :mode="mode"
      :questionnaire="questionnaire"
    />
    <div class="col-12">
      <div class="mb-3">
        <button class="ex1 btn btn-primary" type="submit" @click="SaveItem()">
          {{ SubmitForm }}
        </button>
        &nbsp;&nbsp;
        <button class="ex1 btn btn-primary" type="submit" @click="ResetItem()">
          {{ ResetForm }}
        </button>        
      </div>
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";
import StepHeader from "@/components/widgets/StepHeader.vue";
import StepDetail from "@/components/widgets/StepDetail.vue";
import Step2 from "@/components/widgets/Step2.vue";
import Step3 from "@/components/widgets/Step3.vue";
import Step4 from "@/components/widgets/Step4.vue";
import Step5 from "@/components/widgets/Step5.vue";
export default {
  name: "QuestionnaireComponents",
  props: ["form", "mode", "questionnaire"],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { StepHeader, StepDetail,  },
  data() {
    return {
      title: appConfig.description,
      SubmitForm: appConfig.SubmitForm,
      ResetForm: appConfig.ResetForm,
      DataCQuestionnaire: this.questionnaire,
      CountStep: this.questionnaire[0].CountStep,
    };
  },
  computed: {},
  methods: {
    SaveItem() {
      console.log("Save");
    },
    ResetItem() {
      console.log("Reset");
    },
  },
  mounted() {},
  beforeCreate() {},
  created() {
    console.log('Questionnaire Count Step :', this.CountStep)
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
