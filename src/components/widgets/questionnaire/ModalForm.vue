<template>
  <div>

      <b-button
        v-bind:id="`buttonUpload${code}`"
        v-bind:name="`buttonUpload${code}`"
        variant="primary"
        @click="buttonUploadFile"
        >บันทึกข้อมูล</b-button
      >
  </div>
</template>

<script>
import appConfig from "@/app.config";
import Drawer from "vue-simple-drawer";
import { MasterService } from "@/api/index.js";
import Lightbox from "@/components/widgets/profile/Lightbox.vue";

export default {
  name: "ModalForm",
  props: ["code", "GData", "title", "detail", "GroupTab",],
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
    };
  },
  computed: {},
  methods: {
  onChangeUploadImg(e) {
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
      const fileData = new FormData();
      fileData.append("file", files);
      try {
        axios
          .post(`${process.env.VUE_APP_ENDPOINT}` + "/upload", fileData)
          .then((result) => {
            let filename = result.data.filename;
            this.$swal({
              icon: "success",
              title: "upload Image To Server Success",
              text: "File Name : " + filename + "ข้อ" + inputFileId,
              allowOutsideClick: false,
            });
            const payload={
                f_docrunning: this.f_docrunning,
                f_userCode: this.f_userCode,
                f_zone: this.f_zone,
                f_province: this.f_province,
                f_filedocument: files.name,
                f_image: filename,
                f_filetype: files.type,
                f_hospitalLevel: this.f_hospitalLevel,
                f_hospitalCode: this.f_hospitalCode,
                f_positionCode: this.f_positionCode,
                f_section: coderunning[1],
                f_filesize: files.size,
                f_year: this.year,
                f_type:'image',
                f_status: 1,
            };
            axios
              .post("/upload/save", payload)
                .then((results) => {
                  this.$swal({
                    icon: "success",
                    title: results.data.message,
                    text: results.data.statusText,
                    allowOutsideClick: false,
                  });
                })
                .catch((error) => {
                  this.$swal({
                    icon: "error",
                    title:
                      "ไม่สามารถเรียกเซอร์วิสการบันทึกข้อมูลการ upload ได้",
                    text: `${error.response}: ${error.message}`,
                    allowOutsideClick: false,
                  });
                });
          //  console.log(inputFileId);
            document.getElementById(inputFileId).disabled = true;
          });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "ไม่สามารถบันทึการ upload ลงฐานข้อมูลได้",
          text: error,
          allowOutsideClick: false,
        });
      }
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
    onChangeUploadFile(e) {
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
        const fileData = new FormData();
        fileData.append("file", files);
        try {
          axios
            .post(`${process.env.VUE_APP_ENDPOINT}` + "/upload", fileData)
            .then((result) => {
              let filename = result.data.filename;
              //  console.log(filename);
              this.$swal({
                icon: "success",
                title: "Upload File To Server Success",
                text: "File Name : " + filename + "ข้อ" + inputFileId,
                allowOutsideClick: false,
              });
              const payload = {
                f_docrunning: this.f_docrunning,
                f_userCode: this.f_userCode,
                f_zone: this.f_zone,
                f_province: this.f_province,
                f_filedocument: files.name,
                f_image: filename,
                f_filetype: files.type,
                f_hospitalLevel: this.f_hospitalLevel,
                f_hospitalCode: this.f_hospitalCode,
                f_positionCode: this.f_positionCode,
                f_section: coderunning[1],
                f_filesize: files.size,
                f_year: this.year,
                f_type: "file",
                f_status: 1,
              };
              axios
                .post("/upload/save", payload)
                .then((results) => {
                  this.$swal({
                    icon: "success",
                    title: results.data.message,
                    text: results.data.statusText,
                    allowOutsideClick: false,
                  });
                })
                .catch((error) => {
                  this.$swal({
                    icon: "error",
                    title:
                      "ไม่สามารถเรียกเซอร์วิสการบันทึกข้อมูลการ upload ได้",
                    text: `${error.response}: ${error.message}`,
                    allowOutsideClick: false,
                  });
                });
              //  console.log(inputFileId);
              document.getElementById(inputFileId).disabled = true;
            });
        } catch (error) {
          this.$swal({
            icon: "error",
            title: "ไม่สามารถบันทึการ upload ลงฐานข้อมูลได้",
            text: error,
            allowOutsideClick: false,
          });
        }
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
