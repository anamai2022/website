<script>
import _ from "underscore";
import { uuid } from "uuidv4";
import appConfig from "@/app.config";
import { form } from "@/router/views/questionnaire/configs/list.js";
import questionnaireData from "@/data/questionnaire.json";
import Footer from "@/components/footers.vue";
import UserMenu from "@/components/UserMenu.vue";
import Questionnaire from "@/components/widgets/Questionnaire.vue";
export default {
  page: {
    title: "Questionnaire",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer, UserMenu, Questionnaire },
  data() {
    return {
      title: appConfig.description,
      form: this.form,
      mode: null,
      questionnaire: null,
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
    this.$route.query.id;
    if (this.$route.params.id != null) {
      console.log("Update", this.$route.params.id);
      this.mode = "Upadate";
      this.form = from;
      this.btnPermisActionName = "Upadate";
      this.btnPermisFunctionName = "Questionnaire";
    } else {
      console.log("Create");
      this.mode = "Create";
      this.form = form;
      this.btnPermisActionName = "Create";
      this.btnPermisFunctionName = "Questionnaire";
      this.questionnaire = questionnaireData;
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
      <Questionnaire class="section bg-white ex1"  :form="form" :mode="mode" :questionnaire="questionnaire" />
    </form>
    <Footer />
  </div>
</template>

<style scoped>
.ex1 {
  margin-left: 20px;
}
</style>
