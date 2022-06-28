<script>
import _ from "underscore";

import appConfig from "@/app.config";
import { form } from "@/router/views/poll/config/list.js";
import loadFormA from "@/data/formA.json";
import loadFormB from "@/data/formB.json";
import loadFormC from "@/data/formC.json";
import Footer from "@/components/footers.vue";
import UserMenu from "@/components/UserMenu.vue";
import Poll from "@/components/widgets/Poll.vue";
export default {
  name: "PollView",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer, UserMenu, Poll, },
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
    if (this.$route.params.id != null) {      
      this.mode = "Upadate";
      this.form = this.from;
      this.btnPermisActionName = "Upadate";
      this.btnPermisFunctionName = "Poll";
      if(this.$route.query.id == 'formb'){
        this.PollDataSet = loadFormB;
      }else if(this.$route.query.id == 'formc'){
        this.PollDataSet = loadFormC;
      }else if(this.$route.query.id =='forma'){
        this.PollDataSet = loadFormA;
      }else{        
        this.PollDataSet = loadFormA
      }      
    } else {
      console.log("Create");
      this.mode = "Create";
      this.form = form;
      this.btnPermisActionName = "Create";
      this.btnPermisFunctionName = "Poll";
      this.PollDataSet = loadFormA     
    }
  },
  methods: {
    submitItem(){
      console.log("Check Form")
    },
  },
  mounted() {},
};
</script>

<template>
  <div>
    <UserMenu />
    <form class="needs-validation"  @submit.prevent="submitItem()">
      <Poll class="section bg-white ex1"  :form="form" :mode="mode" :poll="PollDataSet" />
    </form>
    <Footer />
  </div>
</template>

<style scoped>
.ex1 {
  margin-left: 20px;
}
</style>
