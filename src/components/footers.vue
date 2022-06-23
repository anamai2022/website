<script>
import appConfig from "@/app.config";

export default {
  data() {
    return {
      footerTilie: appConfig.footerTilie,
      footerDesign: appConfig.footerDesign,
    };
  },  
}
</script>
<template>
      <footer class="landing-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-4">
                <img src="@/assets/images/rh_anamai.png" alt height="30"/>
              </div>
              <p
                class="mb-2"
              >{{ new Date().getFullYear() }} © YFHS. Design & Develop by {{footerDesign}}</p>
              <p>{{footerTilie}}</p>
              <div class="counter">
                <span>จำนวนผู้เข้าชม</span>&nbsp;
                  <a href="https://www.hitwebcounter.com" target="_blank">
                    <img src="https://hitwebcounter.com/counter/counter.php?page=7878641&style=0006&nbdigits=6&type=page&initCount=0" title="YFHS Counter" Alt="web counter" border="0" />
                  </a>
              </div>              
            </div>
          </div>
        </div>        
      </footer>    
</template>