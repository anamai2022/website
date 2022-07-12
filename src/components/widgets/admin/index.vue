<template>
  <div>
  </div>
</template>

<script>
import appConfig from "@/app.config";
import { MasterService } from "@/api/index.js";

export default {
  name: "ModalForm",
  props: ["Mode",],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Drawer, Lightbox },
  data() {
    return {
      title: appConfig.description,
    };
  },
  computed: {},
  methods: {},
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

</style>
