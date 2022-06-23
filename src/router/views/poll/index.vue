<script>
import _ from "underscore";
import { uuid } from "uuidv4";
import appConfig from "@/app.config";
import { form } from "@/router/views/poll/config/list.js";
import loadFormA from "@/data/formA.json";
import loadFormB from "@/data/formB.json";
import loadFormC from "@/data/formC.json";
import Footer from "@/components/footers.vue";
import Menu from "@/components/Menu.vue";
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
  components: { Footer, Menu, Poll, },
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
  beforeMount() {
    if (this.$route.params.id != null) {      
      this.mode = "Upadate";
      this.form = this.from;
      this.btnPermisActionName = "Upadate";
      this.btnPermisFunctionName = "Poll";
      if(this.$route.query.id == 'b78c1e93-3066-43a2-befa-743041cfd559'){
        console.log("Update Form B", this.$route.params.id);
        this.PollDataSet = loadFormB;
      }else if(this.$route.query.id == 'f2e96af2-617c-44c9-8d08-8254803d634c'){
        console.log("Update Form C", this.$route.params.id);
        this.PollDataSet = loadFormC;
      }else if(this.$route.query.id =='0c7bb413-1861-4025-b41e-a920e7f5da63'){
        console.log("Update Form A", this.$route.params.id);
        this.PollDataSet = loadFormA;
      }else{
        console.log("Update Null", this.$route.params.id);
        this.PollDataSet = null
      }      
    } else {
      console.log("Create");
      this.mode = "Create";
      this.form = form;
      this.btnPermisActionName = "Create";
      this.btnPermisFunctionName = "Poll";
      this.PollDataSet = null     
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
    <Menu />
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
