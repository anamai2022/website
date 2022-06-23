<template>
  <div class="row">
    <p>ลักษณะสำคัญขององค์กร</p>
    <div class="col-lg-6">
      <p>วิสัยทัศน์</p>
      <textarea id="w3review" name="w3review" rows="4" cols="50">{{visionData}}</textarea>
      <p>พันธกิจ</p>
      <textarea id="w3review" name="w3review" rows="4" cols="50">{{missionData}}</textarea>
      <p>เป้าประสงค์</p>
      <textarea id="w3review" name="w3review" rows="4" cols="50">{{goalData}}</textarea>
      <p>นโยบาย</p>
      <textarea id="w3review" name="w3review" rows="4" cols="50">{{policyData}}</textarea>
    </div>
                        <b-button variant="success" class="btn-label">
                      <i class="bx bx-save label-icon"></i>
                        บันทึกข้อมูล
                    </b-button>
  </div>
</template>
<script>
import appConfig from "@/app.config";
export default {
  name: "Organizational",
  props: ["form", "mode", "questionnaire", "visionData", "missionData", "goalData", "policyData" ],
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
