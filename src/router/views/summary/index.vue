<script>
import _ from "underscore";
import { uuid } from "uuidv4";
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import UserMenu from "@/components/UserMenu.vue";
import ComingSoon from "@/components/widgets/dashbord/index.vue";
export default {
  name: "SummaryView",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer, UserMenu, ComingSoon, },
  data() {
    return {
      title: appConfig.description,
      mode: null,
      PollDataSet: null,
      form: null,
      btnPermisActionName: null,
      btnPermisFunctionName: null,
    };
  },
  computed: {},
  created() {
    var username = localStorage.getItem('token')
      if (!username) {
        this.$router.push('/logincode')
      } else {
        this.setUserProfile = localStorage.getItem('token')
      }
  },  
  beforeMount() { 
  },
  methods: {
  },
  mounted() {},
};
</script>

<template>
  <div>
    <UserMenu />
    <ComingSoon />
    <Footer />
  </div>
</template>

<style scoped>
.ex1 {
  margin-left: 20px;
}
</style>
