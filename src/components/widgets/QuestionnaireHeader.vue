<template>
  <section class="bg-white" id="QuestionnaireHeader">
    <div class="row">
      <div class="col-lg-12"><br>
        <h2 class="card-title text-center">โรงพยาบาล&nbsp;{{profile[0].f_hospitalname}}&nbsp;</h2>
        <h5 class="card-title text-center">จังหวัด&nbsp;&nbsp;:&nbsp;&nbsp;{{profile[0].f_province}}&nbsp;&nbsp;เขตพื้นที่&nbsp;&nbsp;:&nbsp;&nbsp;{{profile[0].f_zoneArea}}</h5>
        <p class="text-center">ผลการประเมินตนเอง ปีงบประมาณ&nbsp;&nbsp;:&nbsp;&nbsp;<font color="red">{{ new Date().getFullYear() + 543 }}</font></p>
      </div>      
    </div>
  </section>
</template>
<script>
import appConfig from "@/app.config";
import moment from "moment";
export default {
  name: "QuestionnaireHeader",
  props: ["form", "mode", "questionnaire", "profile"],
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
      dataDateTime: null,
      year: null,
      toDayDataFormat: null,
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
  created(){},
  mounted() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    const toDayData = new Date();
    let date = moment(toDayData, "DD/MM/YYYY");
    moment.locale("th");
    this.dataDateTime = moment().format("LLLL");
    if (date.isValid()) {
      date.add(543, "years");
      let runnigYear = date.format("YYYY");
      let runnigMonth = date.format("MM");
      let runnigDay = date.format("DD");
      let runningTime = date.format("hhmmss");
      this.toDayDataFormat = runnigYear + runnigMonth + runnigDay + runningTime;
      let d = date.format("YYYY");
    }
    this.year =date.format("YYYY");    
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
