<template>
  <section class="section bg-white" id="comingsoon">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center">
            <router-link to="/" class="d-block auth-logo">
              <img
                src="@/assets/images/logo_rhanamai.png"
                alt=""
                height="90"
                class="auth-logo-dark mx-auto"
              />
              <img
                src="@/assets/images/logo_rhanamai.png"
                alt=""
                height="90"
                class="auth-logo-light mx-auto"
              />
            </router-link>
            <div class="row justify-content-center mt-5">
              <div class="col-sm-4">
                <div class="maintenance-img">
                  <img
                    src="@/assets/images/coming-soon.svg"
                    alt=""
                    class="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
            </div>
            <h4 class="mt-5">{{informationHeader}}</h4>
            <p class="text-muted">
              {{informationDetail}}
            </p>

            <div class="row justify-content-center mt-5">
              <div class="col-md-8">
                <a href="/">
                <p>{{linkeHome}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ComeingSoonData from "@/data/ComeingSoon.json";
import appConfig from "@/app.config";
export default {
  name: "ComeingSoon",
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
      DataComingSoon: ComeingSoonData,
      informationHeader: appConfig.informationHeader,
      informationDetail: appConfig.informationDetail,
      linkeHome: appConfig.linkeHome,
    };
  },
mounted() {},
};
</script>