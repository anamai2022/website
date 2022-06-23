<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip, LIcon } from "vue2-leaflet";
import appConfig from "@/app.config";

export default {
  name: "Leaflet",
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
      titleMap: appConfig.websiteName,
      zoom: 15,
      center: latLng(13.85239711698625, 100.52816332584274),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withTooltip: latLng(13.85239711698625, 100.52816332584274),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip,
  },
  methods: {
    innerClick() {
      alert("Click!");
    },
  },
};
</script>

<template>
  <l-map
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    style="height: 400px; width: 100%"
  >
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-marker :lat-lng="withTooltip">
      <l-tooltip :options="{ permanent: true, interactive: true }">
        <div @click="innerClick">
          {{titleMap}}
          <p v-show="showParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec
            finibus semper metus id malesuada.
          </p>
        </div>
      </l-tooltip>
      <l-icon>
        <img src="@/assets/images/leaflet/marker-icon.png" />
      </l-icon>
    </l-marker>
  </l-map>
</template>

