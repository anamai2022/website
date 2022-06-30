<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import UserMenu from "@/components/UserMenu.vue";
import Appove from "@/components/widgets/appove/index.vue";
export default {
  page: {
    title: "AppoveNextView",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  props: ["form", "mode"],
  components: { Footer,UserMenu,Appove },
  data() {
    return {
      title: appConfig.description,   
      appove: 10,
      backlog: 1,
      nextlevel:8,
      inbox:2,
      waiting: 3,
      agency: "หน่วยงานหลัก",
      titles:"อยู่ระหว่างรอกรอกเอกสาร",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<template>
  <div>
    <UserMenu />
    <Appove :titles="titles" :inbox="inbox" :nextlevel="nextlevel" :waiting="waiting" :backlog="backlog" :appove="appove" :agency="agency"/>
    <Footer />
  </div>
</template>

<style lang="scss" module></style>
