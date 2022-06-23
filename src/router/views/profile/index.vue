<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import UserMenu from "@/components/UserMenu.vue";
import News from "@/components/widgets/profile/News.vue";

export default {
  name:"Profile",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer,UserMenu, News,},
  data() {
    return {
      title: appConfig.description,   
      setUserProfile: null,    
    };
  },
  created() {
    var username = localStorage.getItem('token')
      if (!username) {
        this.$router.push('/logincode')
      } else {
        this.setUserProfile = localStorage.getItem('token')
      }
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<template>
  <div>
    <UserMenu />
    <News />
    <Footer />
  </div>
</template>

<style lang="scss" module></style>
