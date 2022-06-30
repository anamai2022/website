<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import UserMenu from "@/components/UserMenu.vue";
import Landing from "@/components/widgets/appove/index.vue";
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
  components: { Footer,UserMenu,Landing },
  data() {
    return {
      title: appConfig.description,       
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
    <Landing />
    <Footer />
  </div>
</template>

<style lang="scss" module></style>
