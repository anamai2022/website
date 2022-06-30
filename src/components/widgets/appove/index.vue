<template>
  <section class="section bg-white top" id="mail">
    <div class="row">        
      <div class="center"><h4>{{ appoveTitle }}&nbsp;&nbsp;:&nbsp;&nbsp;{{ yearBudget }}</h4></div>
      <div class="col-12">
        <Sidepanel />
        <div class="email-rightbar mb-3">
          <div class="card">
            <div class="btn-toolbar p-3">
              <Toolbar />
            </div>
            <div class="mt-3">
              <tableAppove :title="title" :items="items" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import appConfig from "@/app.config";
import moment from "moment";
import { emailData } from "./data-inbox";
import Toolbar from "./toolbar";
import Sidepanel from "./sidepanel";
import pageHeader from "./pageHeader"
import tableAppove from "./tableAppove"

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
    components: {
    pageHeader,
    Toolbar,
    Sidepanel,
    tableAppove,
  },
  data() {
    return {
      emailData: emailData,
      paginatedEmailData: emailData,
      appoveTitle: appConfig.appoveTitle,
      yearBudget:null,
      title: appConfig.waitingAppove,
      items: [
        {
          text: appConfig.zoneArea,
          href: "/"
        },
        {
          text: 'หนองบัวลำภู',
          active: true
        }
      ],
      currentPage: 1,
      perPage: 15,
      emailIds: [],
      startIndex: 1,
      endIndex: 15      
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
  },

  methods: {
    onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage;
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;

      this.paginatedEmailData = this.emailData.slice(
        this.startIndex,
        this.endIndex
      );
    }
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