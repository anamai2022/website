<template>
  <section class="section bg-white" id="dashbord">
    <div class="container">
      <div class="row">
        <TopDashboard />
      </div>
      <div>
        <dataTable />
      </div>
    </div>
  </section>
</template>
<script>
import appConfig from "@/app.config";
import TopDashboard from "@/components/widgets/dashbord/top"
import dataTable from "@/components/widgets/dashbord/dataTable"
export default {
  name: "Dashboard",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { TopDashboard, dataTable,},
  data() {
    return {
      informationHeader: appConfig.informationHeader,
      informationDetail: appConfig.informationDetail,
    };
  },
mounted() {},
};
</script>