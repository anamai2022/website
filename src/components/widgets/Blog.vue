<template>
      <section class="section top" id="news">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center mb-5">
                <h4>Latest News</h4>
              </div>
            </div>
          </div>
          <div class="row" v-for="index in 4" :key="index">
            <div class="col-xl-4 col-sm-6">
              <div class="blog-box mb-4 mb-xl-0">
                <div class="position-relative">
                  <img
                    src="@/assets/images/crypto/blog/img-1.jpg"
                    alt
                    class="rounded img-fluid mx-auto d-block"
                  />
                  <div class="badge bg-success blog-badge font-size-11">Cryptocurrency</div>
                </div>

                <div class="mt-4 text-muted">
                  <p class="mb-2">
                    <i class="bx bx-calendar me-1"></i> 04 Mar, 2020
                  </p>
                  <h5 class="mb-3">Donec pede justo, fringilla vele</h5>
                  <p>If several languages coalesce, the grammar of the resulting language</p>

                  <div>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6">
              <div class="blog-box mb-4 mb-xl-0">
                <div class="position-relative">
                  <img
                    src="@/assets/images/crypto/blog/img-2.jpg"
                    alt
                    class="rounded img-fluid mx-auto d-block"
                  />
                  <div class="badge bg-success blog-badge font-size-11">Cryptocurrency</div>
                </div>

                <div class="mt-4 text-muted">
                  <p class="mb-2">
                    <i class="bx bx-calendar me-1"></i> 12 Feb, 2020
                  </p>
                  <h5 class="mb-3">Aenean ut eros et nisl</h5>
                  <p>Everyone realizes why a new common language would be desirable</p>

                  <div>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6">
              <div class="blog-box mb-4 mb-xl-0">
                <div class="position-relative">
                  <img
                    src="@/assets/images/crypto/blog/img-3.jpg"
                    alt
                    class="rounded img-fluid mx-auto d-block"
                  />
                  <div class="badge bg-success blog-badge font-size-11">Cryptocurrency</div>
                </div>

                <div class="mt-4 text-muted">
                  <p class="mb-2">
                    <i class="bx bx-calendar me-1"></i> 06 Jan, 2020
                  </p>
                  <h5 class="mb-3">In turpis, pellentesque posuere</h5>
                  <p>To an English person, it will seem like simplified English, as a skeptical Cambridge</p>

                  <div>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </section>    
</template>
<script>
import BlogData from "@/data/Blog.json";
import appConfig from "@/app.config";
export default {
  name: "Blog",
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
      DataBlog: BlogData,
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