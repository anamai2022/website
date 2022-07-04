<template>
  <div>
    <b-form>
      <b-form-group
        class="mb-3"
        label="ชื่อสถานบริการ:"
        label-for="formrow-firstname-input"
      >
        <b-form-input
          id="f_hospitalname"
          name="f_hospitalname"
          v-model="hospitalData.f_hospitalname"
          type="text"
        ></b-form-input>
      </b-form-group>

      <div class="row">
        <div class="col-md-6">
          <b-form-group
            class="mb-3"
            label="ประเภท :	(รพช. , รพท. , รพศ.)"
            label-for="formrow-email-input"
          >
            <el-select
              id="f_type_hospital"
              name="f_type_hospital"
              v-model="hospitalData.f_type_hospital"
              filterable
              :placeholder="placeholderSelect"
            >
              <el-option
                v-for="item in LevelData"
                :key="item.f_MasterId"
                :label="item.f_MasterName"
                :value="item.f_MasterId"
              >
              </el-option>
            </el-select>
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
                id="f_bed"
                name="f_bed"
                v-model="hospitalData.f_bed"
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
            <b-form-input
              id="f_address"
              name="f_address"
              v-model="hospitalData.f_address"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <b-form-group
            class="mb-3"
            label="เบอร์มือถือ :	"
            label-for="formrow-inputCity"
          >
            <b-form-input
              id="f_telphone"
              name="f_telphone"
              v-model="hospitalData.f_telphone"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="col-lg-6">
          <b-form-group class="mb-3" label="Fax :	" label-for="formrow-inputZip">
            <b-form-input
              id="f_fax"
              name="f_fax"
              v-model="hospitalData.f_fax"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="col-lg-6">
          <b-form-group
            class="mb-3"
            :label="latitudeLang"
            label-for="formrow-inputZip"
          >
            <b-form-input
              v-model="hospitalData.f_latitude"
              id="latitude"
              name="latitude"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-lg-6">
          <b-form-group
            class="mb-3"
            :label="longitudeLang"
            label-for="formrow-inputZip"
          >
            <b-form-input
              v-model="hospitalData.f_longitude"
              id="longitude"
              name="longitude"
              type="text"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="col-lg-12">
          <h4 class="card-title">{{ Markers }}</h4>
          <p class="card-title-dsec">{{ MarkersAppove }}</p>
          <p>Latitude : {{ longitude }} Longitude : {{ latitude }}</p>
          <p>IP Address : {{ ipAddressData }}</p>
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
      <br />
      <b-button variant="danger" class="btn-label" @click="handleReset()">
        <i class="bx bx-trash label-icon"></i>
        ยกเลิก
      </b-button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <b-button variant="success" class="btn-label" @click="handleSave()">
        <i class="bx bx-save label-icon"></i>
        บันทึกข้อมูล
      </b-button>
    </b-form>
  </div>
</template>
<script>
import appConfig from "@/app.config";
import { MasterService, HospitalService } from "@/api/index.js";
export default {
  name: "PopupProfile",
  props: ["form", "mode", "hospitalData"],
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
      latitudeLang: appConfig.latitude,
      longitudeLang: appConfig.longitude,
      placeholderSelect: appConfig.placeholderSelect,
      longitude: null,
      latitude: null,
      ipAddressData: null,
      LevelData: null,
      markers: [
        {
          position: { lat: 13.8497732, lng: 100.526625 },
        },
      ],
    };
  },
  computed: {},
  methods: {
    async getZoneArea() {
      const results = await MasterService.getAppoveLevelAll();
      this.LevelData = results.result;
    },
    handleReset() {
      console.log("handle Reset", this.hospitalData);
    },
    async handleSave() {
      if (this.mode == 'Create') {
        let hopsital = {
          f_code: this.hospitalData.f_code,
          f_hospitalname: this.hospitalData.f_hospitalname,
          f_type_hospital: this.hospitalData.f_type_hospital,
          f_bed: this.hospitalData.f_bed,
          f_address: this.hospitalData.f_address,
          f_telphone: this.hospitalData.f_telphone,
          f_fax: this.hospitalData.f_fax,
          f_latitude: this.latitude,
          f_longitude: this.longitude,
          f_ipaddress: this.ipAddressData,
          f_status: 1,
        };
        let resultCreate = await HospitalService.getSaveByCode(hopsital);           
        this.$router.go()
      } else {
        let hopsital = {
          f_hospitalname: this.hospitalData.f_hospitalname,
          f_type_hospital: this.hospitalData.f_type_hospital,
          f_bed: this.hospitalData.f_bed,
          f_address: this.hospitalData.f_address,
          f_telphone: this.hospitalData.f_telphone,
          f_fax: this.hospitalData.f_fax,
          f_latitude: this.latitude,
          f_longitude: this.longitude,
          f_ipaddress: this.ipAddressData,
        }
        let resultUpdate = await HospitalService.getUpdateAll(this.hospitalData.f_code,hopsital)
        this.$router.go()  
      }
    },
    handleGetlocationMapPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    handleGetIpAddress() {
      fetch("https://api.ipify.org?format=json")
        .then((x) => x.json())
        .then(({ ip }) => {
          this.ipAddressData = ip;
          console.log(this.ipAddressData);
        });
    },
  },
  beforeCreate() {},
  created() {
    this.handleGetlocationMapPressed();
    this.handleGetIpAddress();
    this.getZoneArea();
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
