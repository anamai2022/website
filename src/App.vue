<script>
import appConfig from "@/app.config";

export default {
  name: "app",
  page: {
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    },
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>
