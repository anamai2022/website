<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">{{ new Date().getFullYear() - 1 }} - {{ new Date().getFullYear() }} © {{footerTilie}}.</div>
        <div class="col-sm-6">
          <div class="text-sm-end d-none d-sm-block">Design & Develop by {{footerDesign}}</div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import appConfig from "@/app.config";

export default {
  name: appConfig.shortname,
  page: {
    title: appConfig.description,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      footerTilie: appConfig.footerTitle,
      footerDesign: appConfig.footerDesign,
    };
  },  
}
</script>