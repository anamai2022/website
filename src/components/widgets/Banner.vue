<template>
  <section class="section" id="banner">
    <div class="bg-overlay bg-primary"></div>
      <div class="row align-items-center">
        <b-carousel            
          id="link.id"
          :interval="4000"
        >
        <div v-for="link in Banner" :key="link.id">        
          <b-carousel-slide
            :img-src="link.img"
          >
          </b-carousel-slide>
          </div>
        </b-carousel>
      </div>
  </section>
</template>
<script>
import BannerData from "@/data/Banner.json";
import appConfig from "@/app.config";
export default {
  name: "Banner",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },  
  name: "BannerWidgets",
  data() {
    return {
      Banner: BannerData,
      slide: BannerData,
    };
  },
mounted() {},
};
</script>
