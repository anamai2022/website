<template>
  <div>
    <b-form>
      <b-form-group
        class="mb-3"
        label="ชื่อสถานบริการ:	"
        label-for="formrow-firstname-input"
      >
        <b-form-input id="formrow-firstname-input" type="text"></b-form-input>
      </b-form-group>

      <div class="row">
        <div class="col-md-6">
          <b-form-group
            class="mb-3"
            label="ประเภท :	(รพช. , รพท. , รพศ.)"
            label-for="formrow-email-input"
          >
            <b-form-input id="formrow-email-input" type="text"></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <b-form-group
              class="mb-3"
              label="จำนวนเตียง :	"
              label-for="formrow-password-input"
            >
              <b-form-input
                id="formrow-password-input"
                type="number"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <b-form-group
            class="mb-3"
            label="ที่อยู่ :	"
            label-for="formrow-inputCity"
          >
            <b-form-input id="formrow-inputCity" type="text"></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <b-form-group
            class="mb-3"
            label="เบอร์มือถือ :	"
            label-for="formrow-inputCity"
          >
            <b-form-input id="formrow-inputCity" type="text"></b-form-input>
          </b-form-group>
        </div>
        <div class="col-lg-4">
          <b-form-group
            class="mb-3 form-label"
            id="input-group-1"
            label="เบอร์โทรศัพท์:	"
            label-for="formrow-inputState"
          >
            <b-form-input id="formrow-inputZip" type="text"></b-form-input>
          </b-form-group>
        </div>

        <div class="col-lg-4">
          <b-form-group class="mb-3" label="Fax :	" label-for="formrow-inputZip">
            <b-form-input id="formrow-inputZip" type="text"></b-form-input>
          </b-form-group>
        </div>

        <div class="col-lg-6">
          <b-form-group
            class="mb-3"
            :label="latitude"
            label-for="formrow-inputZip"
          >
            <b-form-input  :value="latitudeData" v-model="latitudeData" id="formrow-inputZip" type="text"></b-form-input>
          </b-form-group>
        </div>
        <div class="col-lg-6">
          <b-form-group
            class="mb-3"
            :label="longitude"
            label-for="formrow-inputZip"
          >
            <b-form-input :value="longitudeData" v-model="longitudeData" id="formrow-inputZip" type="text"></b-form-input>
          </b-form-group>
        </div>

        <div class="col-lg-12">
          <h4 class="card-title">{{ Markers }}</h4>
          <p class="card-title-dsec">{{ MarkersAppove }}</p>
          <p>IP Address : {{ipAddressData}}</p>
          <gmap-map
            :center="{ lat: 13.8497732, lng: 100.526625 }"
            :zoom="17"
            style="height: 300px"
          >
            <gmap-marker
              v-for="(m, index) in markers"
              :key="index"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            ></gmap-marker>
          </gmap-map>
        </div>
      </div>
      <b-button variant="success" class="btn-label">
        <i class="bx bx-save label-icon"></i>
        บันทึกข้อมูล
      </b-button>
    </b-form>
  </div>
</template>
<script>
import appConfig from "@/app.config";
export default {
  name: "PopupProfile",
  props: ["form", "mode", "questionnaire"],
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
      title: appConfig.description,
      DataPollSet: this.poll,
      Statement: appConfig.Statement,
      Remark: appConfig.Remark,
      Markers: appConfig.Markers,
      MarkersAppove: appConfig.MarkersAppove,
      latitude: appConfig.latitude,
      latitudeData: null,
      longitude: appConfig.longitude,
      longitudeData: null,
      ipAddressData: null,
      markers: [
        {
          position: { lat: 13.8497732, lng: 100.526625 },
        },
      ],
    };
  },
  computed: {},
  methods: {
    handleReset() {
      location.reload();
    },
    handleGetlocationMapPressed() {
      navigator.geolocation.getCurrentPosition(
          position => {
            console.log(position.coords.latitude);
            this.latitudeData = position.coords.latitude
            console.log(position.coords.longitude);
            this.longitudeData = position.coords.longitude
          },
 
          error => {
            console.log(error.message);
          },
      )
    },
    handleGetIpAddress(){
      fetch('https://api.ipify.org?format=json')
      .then(x => x.json())
      .then(({ ip }) => {
          this.ipAddressData = ip;
          console.log(this.ipAddressData)
      });
    },    
  },
  beforeCreate() {},
  created() {
    this.handleGetlocationMapPressed();
    this.handleGetIpAddress();

  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
<style scoped>
.centered {
  text-align: center;
  font-size: 20px;
}
.ex1 {
  margin-left: 30px;
}
</style>
