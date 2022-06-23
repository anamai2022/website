<template>
  <section class="section hero-section" id="features">
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
            <h4 class="mt-5">Let's get started with Skote</h4>
            <p class="text-muted">
              It will be as simple as Occidental in fact it will be Occidental.
            </p>

            <div class="row justify-content-center mt-5">
              <div class="col-md-8">
                <p>Next plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import appConfig from "@/app.config";
import MenuData from "@/data/menu.json";
export default {
  name: "Features",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {},
  data() {
    return {
      websiteName: appConfig.websiteName,
      setMenu: MenuData,
    };
  },
};
</script>
