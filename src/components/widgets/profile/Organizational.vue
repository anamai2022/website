<template>
  <div class="row">
    <p>ลักษณะสำคัญขององค์กร</p>
    <div class="col-lg-6">
      <p>วิสัยทัศน์</p>
      <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
      <p>พันธกิจ</p>
      <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
      <p>เป้าประสงค์</p>
      <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
      <p>นโยบาย</p>
      <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";
export default {
  name: "Organizational",
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
