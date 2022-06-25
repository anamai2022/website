<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import UserMenu from "@/components/UserMenu.vue";
import { form } from "@/router/views/profile/config/list.js";
import ProfileDetail from "@/components/widgets/profile/ProfileDetail.vue";
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
  components: { Footer,UserMenu, ProfileDetail,},
  data() {
    return {
      title: appConfig.description,   
      setUserProfile: null,
      form: form,
      mode: null,    
    };
  },
  created() {    
    var username = localStorage.getItem('token')
      if (!username) {
        this.$router.push('/logincode')
      } else {
        this.setUserProfile = localStorage.getItem('token')
      }
      if (this.$route.params.id != null) {      
      this.mode = "Upadate";
      }else{
      this.mode = "Create";  
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
    <ProfileDetail :form="form" :mode="mode" />
    <Footer />
  </div>
</template>

<style lang="scss" module></style>
