<template>
    <div class="row">
      <div class="col-md-3" v-for="link in linkMenu" :key="link.id">
        <div class="card">
          <div class="card-body">
            <div class="d-flex">
              <div class="avatar-xs me-3">
                <router-link v-bind:to="link.url" target="_blank">
                  <img
                    class=""
                    alt="200x200"
                    width="200"
                    :src="link.img"
                    :link="link.url"
                    data-holder-rendered="true"
                  />
                </router-link>
              </div>
              <div class="flex-grow-1">
                <p class="text-muted text-truncate mb-0">                
                  <i class="mdi mdi-arrow-up ms-1 text-success"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import appConfig from "@/app.config";
import linkMenuData from "@/data/linkMenu.json";
export default {
  name: "linkMenu",
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
      linkMenu: linkMenuData,
    };
  },
};
</script>
