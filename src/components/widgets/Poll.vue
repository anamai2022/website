<template>
  <div class="row">
    <div v-if="poll != null" >
      <StepHeader :form="form" :mode="mode" :poll="poll" />
      <StepDetail v-if="CountStep > 0" :form="form" :mode="mode" :poll="poll" />
      <div class="col-12">
        <div class="mb-3">
          <button class="ex1 btn btn-primary" type="submit" @click="SaveItem()">
            {{ SubmitForm }}
          </button>
          &nbsp;&nbsp;
          <button
            class="ex1 btn btn-primary"
            type="submit"
            @click="ResetItem()"
          >
            {{ ResetForm }}
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <ComingSoon />
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";
import StepHeader from "@/components/widgets/StepHeader.vue";
import StepDetail from "@/components/widgets/StepDetail.vue";
import ComingSoon from "@/components/widgets/ComingSoon.vue";
export default {
  name: "PollComponents",
  props: ["form", "mode", "poll"],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { StepHeader, StepDetail,ComingSoon },
  data() {
    return {
      title: appConfig.description,
      SubmitForm: appConfig.SubmitForm,
      ResetForm: appConfig.ResetForm,
      DataPollSet: this.poll,
      CountStep: null,
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
    if (this.poll === null) {
      this.poll = null
    } else {
      console.log("Poll Count Step :", this.poll[0].CountStep);
    }
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
