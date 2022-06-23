<template>
 <section class="bg-white" id="Lightbox">
    <div class="container">
          <div class="card-body">
            <h4 class="card-title">{{uploadFile}}</h4>
            <p
              class="card-title-desc"
            >{{descriptionImage}}.</p>
            <div class="popup-gallery d-flex flex-wrap">
              <div
                v-for="(src, index) in imgs"
                :key="index"
                class="float-left"
                @click="() => showImg(index)"
              >
                <img :src="src" width="120" />
              </div>
              <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
            </div>
          </div>   
    </div>
</section>
</template>
<script>
import VueEasyLightbox from "vue-easy-lightbox";
import appConfig from "@/app.config";
export default {
  name: 'Organizational',
  props: ["form","mode","questionnaire"],  
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { VueEasyLightbox, },
  data() {
    return {
      visible: false,
      singleImage: false,
      visibleCaption: false,
      index: 0,         
      title: appConfig.description,
      DataPollSet: this.poll,
      Statement: appConfig.Statement,
      Remark: appConfig.Remark,
      uploadFile: appConfig.uploadFile,
      descriptionImage: appConfig.descriptionImage,
      imgs: [
        require("@/assets/images/small/img-1.jpg"),
        require("@/assets/images/small/img-2.jpg"),
        require("@/assets/images/small/img-3.jpg"),
        require("@/assets/images/small/img-4.jpg"),
        require("@/assets/images/small/img-5.jpg"),
        require("@/assets/images/small/img-6.jpg"),
        require("@/assets/images/small/img-1.jpg"),
        require("@/assets/images/small/img-2.jpg"),
        require("@/assets/images/small/img-3.jpg"),
        require("@/assets/images/small/img-4.jpg"),
        require("@/assets/images/small/img-5.jpg"),
        require("@/assets/images/small/img-6.jpg"),
        require("@/assets/images/small/img-1.jpg"),
        require("@/assets/images/small/img-2.jpg"),
        require("@/assets/images/small/img-3.jpg"),
        require("@/assets/images/small/img-4.jpg"),
        require("@/assets/images/small/img-5.jpg"),
        require("@/assets/images/small/img-6.jpg"),
        require("@/assets/images/small/img-1.jpg"),
        require("@/assets/images/small/img-2.jpg"),
        require("@/assets/images/small/img-3.jpg"),
        require("@/assets/images/small/img-4.jpg"),
        require("@/assets/images/small/img-5.jpg"),
        require("@/assets/images/small/img-6.jpg"),
        require("@/assets/images/small/img-1.jpg"),
        require("@/assets/images/small/img-2.jpg"),
        require("@/assets/images/small/img-3.jpg"),
        require("@/assets/images/small/img-4.jpg"),
        require("@/assets/images/small/img-5.jpg"),
        require("@/assets/images/small/img-6.jpg")                        
      ],   
    };
  },
  computed: {},
  methods: {
    handleReset() {
      location.reload();
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    showCaptiomImg(index) {
      this.index = index;
      this.visibleCaption = true;
    },
    handleCaptionHide() {
      this.visibleCaption = false;
    }    
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
</style>