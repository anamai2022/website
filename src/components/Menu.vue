<template>
    <nav class="navbar navbar-expand-lg navigation fixed-top sticky bg-primary" id="navbar">
      <div class="container">
        <a class="navbar-logo" href="/">
          <img src="@/assets/images/rh_anamai.png" alt height="40" class="logo logo-dark" />
          <img src="@/assets/images/rh_anamai.png" alt height="40" class="logo logo-light" />
        </a>
        <p class="text-white px-3 font-size-16 ">{{ websiteName }}</p>  
        <button
          type="button"
          class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
          data-toggle="collapse"
          data-target="#topnav-menu-content"
          @click="toggleMenu()"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <ul
            class="navbar-nav ms-auto"
            id="topnav-menu"
            v-scroll-spy-active="{ selector: 'a.nav-link' }"
          >
            <li class="nav-item" v-for="link in setMenu" :key="link.id">
              <a class="nav-link" :href="link.url">{{link.name}}</a>
            </li>
          </ul>
          <div class="ms-lg-2">
            <a href="/logincode" class="btn btn-outline-success w-xs">เข้าสู่ระบบ</a>
          </div>
        </div>
      </div>
    </nav>    
</template>
<script>
import appConfig from "@/app.config";
import MenuData from "@/data/menu.json"; 
export default {
  name:appConfig.shortname,
  page: {
    title: "Website",
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
  computed: {},
  methods: {
   windowScroll() {
      const navbar = document.getElementById("navbar");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    },
    toggleMenu() {
      document.getElementById("topnav-menu-content").classList.toggle("show");
    },
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    }    
  },
  mounted() {},
};
</script>