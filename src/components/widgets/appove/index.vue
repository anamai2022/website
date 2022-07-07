<template>
  <section class="section bg-white top" id="mail">
    <div class="row">        
      <div class="center"><h4>{{ appoveTitle }}&nbsp;&nbsp;:&nbsp;&nbsp;{{ yearBudget }}</h4></div>
      <div class="col-12">
        <Sidepanel />
        <div class="email-rightbar mb-3">
          <div class="card">
              <div class="col-xl-12">
                <div class="row">
                  <div v-for="stat of statData" :key="stat.icon" class="col-md-3">
                    <Stat :icon="stat.icon" :title="stat.title" :value="stat.value" />
                  </div>
                </div>       
              </div>    
            <div class="mt-3">
              <tableAppove :titles="titles" :items="items" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import  {  HospitalService } from "@/api/index.js";
import appConfig from "@/app.config";
import moment from "moment";
import { emailData } from "./data-inbox";
import Toolbar from "./toolbar";
import Sidepanel from "./sidepanel";
import pageHeader from "./pageHeader"
import tableAppove from "./tableAppove"
import Stat from "@/components/widgets/stat";
export default {
  name: "AppoveComponents",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  props: ["inbox", "nextlevel", "waiting", "backlog", "appove", "agency", "titles"],
    components: {
    pageHeader,
    Toolbar,
    Sidepanel,
    tableAppove,
    Stat,
  },
  data() {
    return {
      HospitalData:null,
      emailData: emailData,
      paginatedEmailData: emailData,
      appoveTitle: this.titles,
      yearBudget:null,
      items: [
        {
          text: appConfig.zoneArea,
          href: "/"
        },
        {
          text: this.agency,
          active: true
        }
      ],
      currentPage: 1,
      mode:this.mode,
      perPage: 15,
      emailIds: [],
      startIndex: 1,
      endIndex: 15,
      statData: [
        {
          icon: "bx bx-copy-alt",
          title: "รอประเมิน",
          value: this.waiting,
        },
        {
          icon: "bx bx-archive-in",
          title: "ประเมินเรียบร้อย",
          value: this.appove,
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "อยู่ระหว่างทำแบบประเมิน",
          value: this.backlog,
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "ยังไม่ได้ทำแบบประเมิน",
          value: this.backlog,
        },
      ],      
    };
  },
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
    this.yearBudget =date.format("YYYY");    
  },
 computed: {
    rows() {
      return this.emailData.length;
    }
  },
  created() {
    this.startIndex = 0;
    this.endIndex = this.perPage;
    this.paginatedEmailData = this.emailData.slice(
      this.startIndex,
      this.endIndex
    );
    this.getProfile()
  },

  methods: {
    onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage;
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;

      this.paginatedEmailData = this.emailData.slice(
        this.startIndex,
        this.endIndex
      );
    },
     async getProfile(){
      let f_code = 1
      const results = await HospitalService.getHospitalZoneAreaAll(f_code);
      this.HospitalData = results.result      
      return results
    },     
  },
async beforeMount() {
  console.log('link id :',this.$route.query.id)
}    
};
</script>
<style scoped>
.top {
  margin-top: 40px;
}
.center{
    text-align: center;    
}
</style>