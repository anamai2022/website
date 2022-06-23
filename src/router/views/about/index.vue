<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import Menu from "@/components/Menu.vue";
import Landing from "@/components/widgets/Landing.vue";
export default {
  page: {
    title: "About",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer,Menu,Landing },
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
    <Menu />
    <Landing />
    <Footer />
  </div>
</template>

<style lang="scss" module></style>
