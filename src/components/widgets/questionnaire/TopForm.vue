<template>
  <div
    class="card"
    v-bind:id="`fromKey${value.f_code}`"
    v-bind:name="`fromKey${value.f_code}`"
    v-if="value.f_yeartotal == '1'"
  >
    <div class="card-body">
      <h4 class="card-title">{{ value.f_fromname }}</h4>
      <p class="card-title-desc">
        กดเลือกปีที่ต้อการกรอก
      </p>
      <b-tabs pills justified content-class="p-1 text-muted">
        <b-tab
          active
          class="border-0"
          v-for="(valuex, index) in setYear"
          :key="index"
          v-bind:id="`yearAdd${valuex.f_detail}`"
          v-bind:name="`yearAdd${valuex.f_detail}`"
        >
          <template v-slot:title>
            <span class="d-inline-block d-sm-none">
              <i class="fas fa-home"></i>
            </span>
            <span class="d-none d-sm-inline-block">{{ valuex.f_detail }}</span>
          </template>
          <div class="table-responsive">
            <table class="table mb-0">
              <thead>
                <tr>
                  <th>
                    รายละเอียดปี
                    <font color="red">{{ valuex.f_detail }}</font>
                  </th>
                  <th>จำนวน</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in 5">
                  <td>
                    <b-form-input
                      v-bind:id="`yeartoptext${valuex.f_detail}_${n}`"
                      v-bind:name="`yeartoptext${valuex.f_detail}_${n}`"
                      for="text"
                      type="text"
                      value="โปรดกรอกรายละเอียด"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-form-input
                      class="mb-1"
                      value="0"
                      type="number"
                      v-bind:id="`yeartopnumber${valuex.f_detail}_${n}`"
                      v-bind:name="`yeartopnumber${valuex.f_detail}_${n}`"
                    >
                    </b-form-input>
                  </td>
                </tr>
              </tbody>
            </table>
            <b-form
              v-bind:id="`fromYearDes${value.f_code}`"
              v-bind:name="`fromYearDes${value.f_code}`"
            >
              <b-form-group
                class="mb-3"
                label="บทวิเคราะห์"
                label-for="formrow-firstname-input"
              >
                <textarea
                  v-bind:id="`yearDestext${valuex.f_detail}`"
                  v-bind:name="`yearDestext${valuex.f_detail}`"
                  class="form-control"
                  :maxlength="225"
                  rows="3"
                  :placeholder="`${textareaTitle}`"
                ></textarea>
              </b-form-group>
              <div>
                <b-button
                  variant="primary"
                  v-bind:id="`sendDesc${value.f_code}`"
                  v-bind:name="`sendDesc${value.f_code}`"
                  v-on:click="
                    buttonSendTop(
                      $event,
                      'Hello',
                      valuex.f_detail,
                      value.f_title
                    )
                  "
                  >ส่งข้อมูล {{ valuex.f_detail }}</b-button
                >
              </div>
            </b-form>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";
export default {
  name: "TopForm",
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
