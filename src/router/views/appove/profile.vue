<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import UserMenu from "@/components/UserMenu.vue";
import profileDetil from "@/components/widgets/appove/profileDetil.vue";
export default {
  page: {
    title: "AppoveView",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  props: ["form", "mode"],
  components: { Footer,UserMenu,profileDetil },
  data() {
    return {
      title: appConfig.description,   
      appove: 10,
      backlog: 1,
      nextlevel:8,
      inbox:2,
      waiting: 3,
      agency: "หน่วยงานหลัก",
      titles:"รอประเมินผลงาน",
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
    <profileDetil :titles="titles" :inbox="inbox" :nextlevel="nextlevel" :waiting="waiting" :backlog="backlog" :appove="appove" :agency="agency"/>
    <Footer />
  </div>
</template>

<style lang="scss" module></style>
