<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import Menu from "@/components/Menu.vue";
import Banner from "@/components/widgets/Banner.vue";
import LinkMenu from "@/components/widgets/LinkMenu.vue";
import Landing from "@/components/widgets/Landing.vue";
import Blog from "@/components/widgets/Blog.vue";
export default {
  page: {
    title: "Website",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer,Menu,Banner,LinkMenu,Landing,Blog },
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
    <Banner />
    <LinkMenu />
    <section class="section" id="profileDetail"></section>
    <Landing />
    <Blog />  
    <Footer />
  </div>
</template>
