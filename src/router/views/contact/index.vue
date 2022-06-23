<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import Menu from "@/components/Menu.vue";
import Contact from "@/components/widgets/Contact.vue";
export default {
  page: {
    title: "Contact",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer,Menu,Contact },
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
    <Contact />
    <Footer />
  </div>
</template>

<style lang="scss" module></style>
