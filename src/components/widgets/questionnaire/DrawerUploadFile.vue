<template>
  <div>
    <div class="offcanvas-header newspaper">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        <font color="#BF490D">{{ evidenceExplanation }} : {{GroupTab}} :{{QuestionCode}}</font
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
        v-model="f_address_url"
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
        v-model="f_additional_message"
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
        @click="buttonUploadFile()"
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
  props: ["code", "GData", "title", "detail", "GroupTab", "uploadImage", "uploadFile", "additionalMessage","addressUrl","QuestionCode"],
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
      f_additional_message:null,
      f_address_url:null,
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
                  f_section: this.GroupTab,
                  f_questioncode: this.QuestionCode,
                  f_filesize: files.size,
                  f_year: yearData,
                  f_type:'image',
                  f_createdate:moment(this.toDay).format("YYYY-MM-DD HH:mm:ss"),
                  f_status: 1,
              };
            
      await attachmentService.InsertData(payload)
    },    
  buttonAddFileUpload(event, f_code, index) {
      let uploadId = event.target.id;      
      this.fieldsFile.push({ FileDoc: "" });
    },
  buttonDeleteFileUpload(index) {
      this.fieldsFile.splice(index, 1);      
    },
  buttonAddImageUpload(event, f_code, index) {
      let uploadId = event.target.id;
      this.fieldsImage.push({ FileImage: "" });
    },
  buttonDeleteImageUpload(index) {
      this.fieldsImage.splice(index, 1);      
    },
async onChangeUploadFile(e) {
      let files = e.target.files || e.dataTransfer.files;
      let inputFileId = event.currentTarget.id;
      let coderunning = inputFileId.split("FileDoc");
      files = e.target.files[0];
      let checkFile = e.target.files;
      if (checkFile.length > 0) {
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
                f_section: this.GroupTab,
                f_questioncode: this.QuestionCode,                
                f_filesize: files.size,
                f_year: yearData,
                f_type:'file',
                f_createdate:moment(this.toDay).format("YYYY-MM-DD HH:mm:ss"),
                f_status: 1,
            };
      await attachmentService.InsertData(payload)
      } else {
        console.log("Error file" + files);
      }
    },
    async  buttonUploadFile() {
          let buttonUploadID = event.target.id;
          let CodeButton = buttonUploadID.split("buttonUpload");
          let codeAddressUrl = "address_url" + CodeButton[1];
          let codeAdditionalMessage = "additional_message" + CodeButton[1];
          var input = document.getElementById(codeAddressUrl).value;
          var input1 = document.getElementById(codeAdditionalMessage).value;  
          let yearData = new Date().getFullYear() + 543;
          const payload = {
            f_docrunning: localStorage.getItem("f_docrunning"),
            f_userCode: localStorage.getItem('f_code'),
            f_zone: this.f_zone,
            f_province: this.f_province,
            f_hospitalLevel: this.f_hospitalLevel,
            f_hospitalCode: localStorage.getItem("profile"),
            f_positionCode: this.f_positionCode,
            f_section: this.GroupTab,
            f_questioncode: this.QuestionCode,
            f_address_url: this.f_address_url,
            f_additional_message: this.f_additional_message,
            f_year: yearData,
            f_createdate:moment(this.toDay).format("YYYY-MM-DD HH:mm:ss"),
            f_type:'text',
            f_status: 1,
          };
        
        await attachmentService.InsertData(payload)
            this.$swal({
              icon: "success",
              title: "upload Image To Server Success",
              text: "File Name : "+ localStorage.getItem("f_docrunning"),
              allowOutsideClick: false,
            });
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
