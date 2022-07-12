<template>
  <div>
    <div class="offcanvas-header newspaper">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        <font color="#BF490D">{{ evidenceExplanation }} : {{GroupTab}}</font
        ><br />
        <font color="#020223">{{ title }}</font>
      </h5>
    </div>
    <div class="offcanvas-body ">
      <div class="newspaper">
        <h4>
          <font color="#083FD2">{{ evidenceExplanation }}</font>
        </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;{{ detail }}
      </div>
    </div>
  </div>
</template>

<script>
import appConfig from "@/app.config";
import Drawer from "vue-simple-drawer";
import { MasterService } from "@/api/index.js";
import Lightbox from "@/components/widgets/profile/Lightbox.vue";

export default {
  name: "FormYear",
  props: [
    "code",
    "GData",
    "title",
    "detail",
    "GroupTab",
  ],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Drawer, Lightbox, },
  data() {
    return {
      QuestionsAttachment: appConfig.QuestionsAttachment,
      evidenceExplanation: appConfig.evidenceExplanation,
      DrawerTitle: null,
      DrawerRemark: null,
      fieldsFile: [{ idFile: 1 }],
      fieldsImage: [{ idImage: 1 }],
    };
  },
  computed: {},
  methods: {
  
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
<style scoped>
.centered {
  text-align: center;
  font-size: 20px;
}
.ex1 {
  margin-left: 30px;
}
.newspaper {
  width: 300px;
}
.score {
  color: #f52909;
  font-size: 14px;
}
.titleScore {
  font-weight: bold;
  color: #f52909;
  font-size: 14px;
}
.subScore {
  text-align: center;
  font-weight: bold;
  color: #0ba934;
  font-size: 12px;
}
.subScoreBack {
  text-align: center;
  color: #040404;
  font-size: 12px;
}
</style>