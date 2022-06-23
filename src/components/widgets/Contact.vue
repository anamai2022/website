<template>
  <section class="section hero-section bg-white" id="news">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center mb-5">
                <h4>Contact</h4>
              </div>
            </div>
          </div>  
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">กรมอนามัย กระทรวงสาธารณสุข</h4>
                  <div  class="col-12" v-for="link in DataContact" :key="link.id">
                      <label for="taskname" class="col-form-label col-lg-2">{{link.name}} </label>
                      <label for="taskname" class="col-form-label">{{link.descption}}</label>                                              
                  </div>                 
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">สื่อที่เกี่ยวข้อง</h4>
              <Leaflet />
            </div>
          </div>
        </div>
      </div>  
  </section>
</template>
<script>
import Leaflet from "@/components/widgets/Leaflet.vue";
import appConfig from "@/app.config";
import ContactData from "@/data/Contact.json";
export default {
  name: "Contact",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {Leaflet},
  data() {
    return {
      title: appConfig.description,   
      DataContact: ContactData,    
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>