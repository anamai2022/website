<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import Menu from "@/components/Menu.vue";
import CardSocial from "@/components/widgets/card/CardSocial.vue";
export default {
  page: {
    title: "Social",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer,Menu,CardSocial, },
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
    <CardSocial />
    <Footer />
  </div>
</template>

<style lang="scss" module></style>
