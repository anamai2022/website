<script>
import appConfig from "@/app.config";
import Footer from "@/components/footers.vue";

export default {
  name:"Logout",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Footer,UserMenu, },
  data() {
    return {
      title: appConfig.description,   
      setUserProfile: null,    
    };
  },
  created() {
      localStorage.clear()
      this.$router.push('/logincode')    
  },
  beforeCreate() {
      localStorage.clear()
      this.$router.push('/logincode')       
  },
  beforeMount() {
      localStorage.clear()
      this.$router.push('/logincode')       
  },
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},  
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<template>
  <div>
    <Footer />
  </div>
</template>

