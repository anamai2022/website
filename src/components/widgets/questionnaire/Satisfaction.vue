<template>
  <div
    class="card"
    v-bind:id="`fromByYear${value.f_code}`"
    v-bind:name="`fromByYear${value.f_code}`"
    v-if="value.f_yeartotal == '2'"
  >
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">
          <table class="table table-striped mb-0">
            <thead>
              <tr>
                <th>{{ value.f_fromname }}</th>
                <th
                  v-for="(valuex, index) in setYear"
                  :key="index"
                  v-bind:id="`tabletotal${valuex.f_detail}`"
                  v-bind:name="`tabletotal${valuex.f_detail}`"
                >
                  {{ valuex.f_detail }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>ร้อยละความพึงพอใจ</th>
                <td
                  v-for="(valuex, index) in setYear"
                  :key="index"
                  v-bind:id="`tabletotal${valuex.f_detail}_${value.f_code}`"
                  v-bind:name="`tabletotal${valuex.f_detail}_${value.f_code}`"
                >
                  <b-form-input
                    class="mb-3"
                    value="0"
                    type="number"
                    v-bind:id="
                      `yeartopnumber${valuex.f_detail}_${value.f_code}`
                    "
                    v-bind:name="
                      `yeartopnumber${valuex.f_detail}_${value.f_code}`
                    "
                  >
                  </b-form-input>
                </td>
              </tr>
              <tr>
                <th>จํานวนผู้ตอบทั้งหมด</th>
                <td
                  v-for="(valuex, index) in setYear"
                  :key="index"
                  v-bind:id="`tabletotal${valuex.f_detail}_${value.f_code}`"
                  v-bind:name="`tabletotal${valuex.f_detail}_${value.f_code}`"
                >
                  <b-form-input
                    class="mb-3"
                    value="0"
                    type="number"
                    v-bind:id="`tablepnumber${valuex.f_detail}_${value.f_code}`"
                    v-bind:name="
                      `tablepnumber${valuex.f_detail}_${value.f_code}`
                    "
                  >
                  </b-form-input>
                </td>
              </tr>
            </tbody>
          </table>
          <b-button
            variant="primary"
            v-bind:id="`sendDesc${value.f_code}`"
            v-bind:name="`sendDesc${value.f_code}`"
            v-on:click="buttonSendPerform($event, 'G5', value.f_title)"
            >ส่งข้อมูล</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";
export default {
  name: "Satisfaction",
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
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>