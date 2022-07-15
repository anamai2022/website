<template>
  <div>
    <div class="offcanvas-header newspaper">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        <font color="#BF490D">{{ evidenceExplanation }} : {{GroupTab}}</font
        ><br />
        <font color="#020223">{{ title }}</font>        
        <font color="#BF490D">{{ uploadfile }}</font
        ><br />
        <font color="#020223">{{ DrawerTitle }}</font>
      </h5>
    </div>
    <div class="offcanvas-body ">
      <h4>
        <font color="#083FD2">{{ QuestionsAttachment }}</font>
      </h4>
    </div>
    <div class="offcanvas-body " v-if="uploadImage == 1">
      <div
        v-for="(fieldsFile, index) in fieldsFile"
        :key="fieldsFile.idFile"
        class="row"
      >
        <b-form-group
          class="mb-3 haderFile"
          v-bind:id="`FileDocFormFile${code}_${index}`"
          v-bind:name="`FileDocFormFile${code}_${index}`"
          label="อัปโหลดไฟล์ (Word, PDF , Excel):"
          label-for="formrow-firstname-input"
        >
          <input
            v-bind:id="`FileDoc${code}_${index}`"
            v-bind:name="`FileDoc${code}_${index}`"
            class="form-control"
            type="file"
            ref="`File{code}`"
            accept=".pdf,.doc,.docx ,.xls,.xlsx"
            @change="onChangeUploadFile"
          />
        </b-form-group>
      </div>
      <input
        type="button"
        class="btn btn-success mt-3 mt-lg-0"
        value="Add"
        @click="buttonAddFileUpload($event, code, index)"
      />
      <input
        type="button"
        class="btn btn-danger btn-block"
        value="Delete"
        @click="buttonDeleteFileUpload(index)"
      />
    </div>
    <div class="offcanvas-body " v-if="uploadFile == 1">
      <div
        v-for="(fieldsImage, indexs) in fieldsImage"
        :key="fieldsImage.idImage"
        class="row"
      >
        <b-form-group
          class="mb-3 haderImage"
          v-bind:id="`FileDocFormImage${code}_${indexs}`"
          v-bind:name="`FileDocFormImage${code}_${indexs}`"
          label="อัปโหลดไฟล์ (JPG , PNG):"
          label-for="formrow-firstname-input"
        >
          <input
            v-bind:id="`FileImage${code}_${indexs}`"
            v-bind:name="`FileImage${code}_${indexs}`"
            class="form-control"
            type="file"
            ref="`Img{value.code}`"
            accept=".jpg,.png"
            @change="onChangeUploadImg"
          />
        </b-form-group>
      </div>
      <input
        type="button"
        class="btn btn-success mt-3 mt-lg-0"
        value="Add"
        @click="buttonAddImageUpload($event, code, indexs)"
      />
      <input
        type="button"
        class="btn btn-danger btn-block"
        value="Delete"
        @click="buttonDeleteImageUpload(indexs)"
      />
    </div>
    <div class="offcanvas-body " v-if="addressUrl == 1">
    <b-form-group
      v-bind:id="`url${code}`"
      v-bind:name="`url${code}`"
      class="mb-3"
      label="ที่อยู่อินเตอร์เน็ต:"
      label-for="formrow-firstname-input"
    >
      <input
        v-bind:id="`address_url${code}`"
        v-bind:name="`address_url${code}`"
        class="form-control"
        type="text"
        ref="`address_url{code}`"
      />
    </b-form-group>
    </div>
    <div class="offcanvas-body " v-if="additionalMessage == 1">
    <b-form-group
      class="mb-3"
      label="บทวิเคราะห์/ข้อความเพิ่มเติม:"
      label-for="formrow-firstname-input"
    >
      <textarea
        v-bind:id="`additional_message${code}`"
        v-bind:name="`additional_message${code}`"
        class="form-control"
        :maxlength="225"
        rows="3"
        :placeholder="`${textareaTitle}`"
      ></textarea>
    </b-form-group>
    </div>
    <div>
      <b-button
        v-bind:id="`buttonUpload${code}`"
        v-bind:name="`buttonUpload${code}`"
        variant="primary"
        @click="buttonUploadFile"
        >บันทึกข้อมูล</b-button
      >
    </div>
  </div>
</template>

<script>
import appConfig from "@/app.config";
import Drawer from "vue-simple-drawer";
import { attachmentService } from "@/api/index.js";
import Lightbox from "@/components/widgets/profile/Lightbox.vue";
import moment from 'moment';
export default {
  name: "DrawerUploadFile",
  props: ["code", "GData", "title", "detail", "GroupTab", "uploadImage", "uploadFile", "additionalMessage","addressUrl"],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Drawer, Lightbox },
  data() {
    return {
      QuestionsAttachment: appConfig.QuestionsAttachment,
      evidenceExplanation: appConfig.evidenceExplanation,
      DrawerTitle: null,
      DrawerRemark: null,
      uploadfile: appConfig.uploadfile,
      textareaTitle: appConfig.plaseInputOrgran,
      f_description: 0,
      f_upload_file: 0,
      f_upload_image: 0,
      f_address_url: 0,      
      fieldsFile: [{ idFile: 1 }],
      fieldsImage: [{ idImage: 1 }],
      index: 0,
      indexs: 0,
    };
  },
  computed: {},
  methods: {
async onChangeUploadImg(e) {
      let inputFileId =event.currentTarget.id
      let files = e.target.files || e.dataTransfer.files;
      let coderunning = inputFileId.split("FileImg"); 
      files = e.target.files[0];
      let checkFile = e.target.files;
      if (checkFile.length > 0) {
        console.log("File upload Documents: " + files.name);
      } else {
        console.log("Error file" + files);
      }
      moment.locale("th");
      let yearData = new Date().getFullYear() + 543;      
      const fileData = new FormData();
      fileData.append("file", files);     
    let result = await attachmentService.SaveImg(fileData)
    let filename = result.filename;
          let payload={
                f_docrunning: localStorage.getItem("f_docrunning"),
                f_userCode: localStorage.getItem('f_code'),
                f_zone: this.f_zone,
                f_province: this.f_province,
                f_filedocument: files.name,
                f_image: filename,
                f_filetype: files.type,
                f_hospitalLevel: this.f_hospitalLevel,
                f_hospitalCode: localStorage.getItem("profile"),
                f_positionCode: this.f_positionCode,
                f_section: coderunning[1],
                f_filesize: files.size,
                f_year: yearData,
                f_type:'image',
                f_status: 1,
            };
            
      await attachmentService.InsertData(payload)
    },    
  buttonAddFileUpload(event, f_code, index) {
      let uploadId = event.target.id;
      console.log(uploadId);
      console.log(event);
      console.log("f_code : " + f_code);
      this.fieldsFile.push({ FileDoc: "" });
    },
  buttonDeleteFileUpload(index) {
      this.fieldsFile.splice(index, 1);
      console.log(index);
    },
  buttonAddImageUpload(event, f_code, index) {
      let uploadId = event.target.id;
      console.log(uploadId);
      console.log(event);
      console.log("f_code : " + f_code);
      this.fieldsImage.push({ FileImage: "" });
    },
  buttonDeleteImageUpload(index) {
      this.fieldsImage.splice(index, 1);
      console.log(index);
    },
async onChangeUploadFile(e) {
      let files = e.target.files || e.dataTransfer.files;
      let inputFileId = event.currentTarget.id;
      let coderunning = inputFileId.split("FileDoc");
      files = e.target.files[0];
      let checkFile = e.target.files;
      if (checkFile.length > 0) {
        console.log("File upload Documents ::::");
        console.log("File Name : " + files.name);
        console.log("File Type : " + files.type);
        console.log("File size: " + files.size);
        console.log("File upload Documents ::::");
        console.log("File upload Documents: " + files.name);
        console.log("File upload commit ::::::");
      moment.locale("th");
      let yearData = new Date().getFullYear() + 543;      
            
        const fileData = new FormData();
        fileData.append("file", files);
      let result = await attachmentService.SaveFile(fileData)
      let filename = result.filename;
      let payload={
                f_docrunning: localStorage.getItem("f_docrunning"),
                f_userCode: localStorage.getItem('f_code'),
                f_zone: this.f_zone,
                f_province: this.f_province,
                f_filedocument: files.name,
                f_image: filename,
                f_filetype: files.type,
                f_hospitalLevel: this.f_hospitalLevel,
                f_hospitalCode: localStorage.getItem("profile"),
                f_positionCode: this.f_positionCode,
                f_section: coderunning[1],
                f_filesize: files.size,
                f_year: yearData,
                f_type:'file',
                f_status: 1,
            };
      await attachmentService.InsertData(payload)
      } else {
        console.log("Error file" + files);
      }
    },
  buttonUploadFile() {
      let buttonUploadID = event.target.id;
      //  console.log('divId: ' + buttonUploadID)
      let CodeButton = buttonUploadID.split("buttonUpload");
      //  console.log(CodeButton[1]);
      let codeAddressUrl = "address_url" + CodeButton[1];
      let codeAdditionalMessage = "additional_message" + CodeButton[1];
      var input = document.getElementById(codeAddressUrl).value;
      //  console.log(input);
      var input1 = document.getElementById(codeAdditionalMessage).value;
      //  console.log(input1);
      let yearData = new Date().getFullYear() + 543;
      const payload = {
        f_docrunning: this.f_docrunning,
        f_userCode: this.f_userCode,
        f_zone: this.f_zone,
        f_province: this.f_province,
        f_hospitalLevel: this.f_hospitalLevel,
        f_hospitalCode: this.f_hospitalCode,
        f_positionCode: this.f_positionCode,
        f_section: CodeButton[1],
        f_address_url: input,
        f_additional_message: input1,
        f_year: yearData,
        f_status: 1,
      };
      // console.log( payload)
      try {
        axios
          .post(`${process.env.VUE_APP_ENDPOINT}` + "/answerquesion/", payload)
          .then((results) => {
            //            console.log(results);
            this.$swal({
              icon: "success",
              title: results.data.messagesboxs,
              text: results.data.statusText,
              allowOutsideClick: false,
            });
          })
          .catch((error) => {
            this.$swal({
              icon: "error",
              title: "ไม่สามารถเรียกเซอร์วิสการบันทึกข้อมูลการ upload ได้",
              text: `${error.response}: ${error.message}`,
              allowOutsideClick: false,
            });
          });
      } catch (err) {
        this.$swal({
          icon: "error",
          title: "ไม่สามารถเชื่อมต่อ Service การให้คะแนน",
          text: error,
          allowOutsideClick: false,
        });
      }
    },
  },
  beforeCreate() {},
  created() {},
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
.newspaper {
  width: 300px;
}
.score {
  color: #f52909;
  font-size: 14px;
}
.titleScore {
  font-weight: bold;
  color: #f52909;
  font-size: 14px;
}
.subScore {
  text-align: center;
  font-weight: bold;
  color: #0ba934;
  font-size: 12px;
}
.subScoreBack {
  text-align: center;
  color: #040404;
  font-size: 12px;
}
</style>
