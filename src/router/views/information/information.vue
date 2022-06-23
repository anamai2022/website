<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import UserMenu from "@/components/UserMenu.vue";
import Blog from "@/components/widgets/Blog.vue";
export default {
  page: {
    title: "Information",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer,UserMenu,Blog },
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
    <Blog />
    <Footer />
  </div>
</template>

<style lang="scss" module></style>
