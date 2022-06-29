<template>
      <section class="section top" id="landing">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center mb-5">
                <h4>{{landingPage}}</h4>
              </div>
            </div>
          </div>
          <div class="row align-items-center pt-4">
            <div class="col-md-6 col-sm-8">
              <div>
                <img
                  src="@/assets/images/crypto/features-img/img-1.png"
                  alt
                  class="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div class="col-md-5 ml-auto">
              <div class="mt-4 mt-md-auto">
                <div class="d-flex align-items-center mb-2">
                  <h4>{{landingPage1}}</h4>
                </div>
                <p
                  class="text-muted"
                >การใช้โปรแกรมการประเมินรับรองโรงพยาบาลตามมาตรฐาน YFHS ฉบับ พ.ศ.2565</p>
                <div class="text-muted mt-4">
                <p>คลินิกวัยรุน ( YFHS : Youth Friendly Health Services). เป็นคลินิกที่โรงพยาบาลจัดบริการสุข ภาพที่เ ปนมิตรสําหรับวัยรุน และเยาวชน..</p>
                <p class="mb-4">ประเมินและรับรองคุณภาพรพ.ตามมาตรฐานYFHS “คลินิกวัยรุ่น” เป็นคลินิกที่ รพ./สถานบริการสาธารณสุข ที่ต้องการจัดบริการสุขภาพที่เป็นมิตรสำหรับวัยรุ่นและเยาวชน (Youth Friendly Health Services : YFHS)</p>

                <div class="button-items">
                  <a href="javascript: void(0);" class="btn btn-success">อ่านคู่มือ</a>
                  <a href="javascript: void(0);" class="btn btn-outline-primary">การประเมินรับรองโรงพยาบาลตามมาตราฐาน</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>    
</template>
<script>
import BannerData from "@/data/Banner.json";
import appConfig from "@/app.config";
export default {
  name: "Landing",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      Banner: BannerData,
      slide: BannerData,
      landingPage: appConfig.landingPage,
      landingPage1: appConfig.landingPage1,
      landingPage2: appConfig.landingPage2,
      landingPage3: appConfig.landingPage3,
    };
  },
mounted() {},
};
</script>
<style scoped>
.top {
  margin-top: 40px;
}
</style>