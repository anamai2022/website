<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";
import Menu from "@/components/Menu.vue";
import Dashboard from "@/components/widgets/dashbord/index"
export default {
  page: {
    title: "Website",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer,Menu, Dashboard, },
  data() {
    return {
      title: appConfig.description,       
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<template>
  <div>
    <Menu />
    <Dashboard />
    <Footer />
  </div>
</template>
