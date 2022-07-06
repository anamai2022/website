<template>
  <div class="table-responsive">    
    <div class="row">
      <div class="col-6 titleScore">{{ title }}</div>
      <div class="col-6 score">{{score}}&nbsp;&nbsp;:&nbsp;&nbsp;{{GScore}}</div>
    </div>
    <table class="table table-nowrap table-hover mb-0">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">
            {{ AssessmentCriteria }}&nbsp;&nbsp;:&nbsp;&nbsp;{{ GData }}
          </th>
          <th scope="col subScore">{{ score }}</th>
          <th scope="col">{{ Assessment }}</th>
          <th scope="col">{{ AssessmentDetail }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(values, index) in QuestionnaireData" :key="index">
          <th></th>
          <td v-if="values.f_hadertitle == 0">
            <p class="ex1">{{ values.f_title }}</p>
          </td>
          <td v-else>
            <b color="red">{{ values.f_title }}</b>
          </td>
          <td class="subScore" v-if="values.f_hadertitle == 1" >{{values.f_questionWtSub}}</td>          
          <td class="subScoreBack" v-else></td>
          <td class="subScoreBack"
            v-if="values.f_hadertitle == 0"
            v-bind:id="`${values.f_code}data`"
            v-bind:name="`${values.f_code}data`"
          >
            {{ totalScore }}
          </td>
          <td class="score"
            v-else
            v-bind:id="`${values.f_question_group}sum`"
            v-bind:name="`${values.f_question_group}sum`"
          ></td>
          <td v-if="values.f_hadertitle == 0">
            <b-button
              variant="primary"
              v-bind:id="`${values.f_code}Score`"
              v-bind:name="`${values.f_code}Score`"
              v-for="(value, index) in ScoreData"
              :key="index"
              @click="
                voteScore(
                  value.f_score,
                  index,
                  values.f_code,
                  values.f_question_group,
                  values.f_section
                )
              "
            >
              <i class="font-size-16 align-middle me-2"></i>
              {{ value.f_score }}</b-button
            >&nbsp;&nbsp;
            <b-button
              variant="secondary"
              v-if="values.f_description == '1'"
              @click="
                rightDrawerDescription(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              "
            >
              <i class="fas fa-file-alt font-size-16 align-middle me-2"></i>
              {{ evidenceExplanation }}</b-button
            >&nbsp;&nbsp;
            <b-button
              variant="info"
              v-if="values.f_upload_file == '1'"
              @click="
                rightDrawerUploadFile(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail,
                  values.f_upload_image,
                  values.f_upload_file
                )
              "
            >
              <i class="fas fa-file-upload font-size-16 align-middle me-2"></i>
              {{ uploadfile }}</b-button
            >&nbsp;&nbsp;
            <b-button
              variant="success"
              v-if="values.f_total == '1'"
              @click="
                rightDrawerYearTotal(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              "
            >
              <i class="fas fa-file-invoice font-size-16 align-middle me-2"></i>
              {{ fillInInformationYear }}</b-button
            >&nbsp;&nbsp;
            <b-button
              variant="warning"
              v-if="values.f_yeartotal == '1'"
              @click="
                rightDrawerFormTotal(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              "
            >
              <i class="fas fa-file-code font-size-16 align-middle me-2"></i>
              {{ fillInInformation }}</b-button
            >&nbsp;&nbsp;
            <b-button
              variant="warning"
              v-if="values.f_yeartotal == '2'"
              @click="
                rightDrawerFormTotal(
                  index,
                  values.f_code,
                  values.f_title,
                  values.f_detail
                )
              "
            >
              <i class="fas fa-file-code font-size-16 align-middle me-2"></i>
              {{ fillInInformation }}</b-button
            >
          </td>
          <td v-else></td>
        </tr>
      </tbody>
    </table>
    <Drawer
      @close="rightDrawerDescription"
      :align="'right'"
      :closeable="true"
      :maskClosable="true"
      :zIndex="1002"
    >
      <div v-if="openRightDrawer">
        <div class="offcanvas-header newspaper">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <font color="#BF490D">{{ evidenceExplanation }}</font
            ><br />
            <font color="#020223">{{ DrawerTitle }}</font>
          </h5>
        </div>
        <div class="offcanvas-body ">
          <div class="newspaper">
            <h4>
              <font color="#083FD2">{{ evidenceExplanation }}</font>
            </h4>
            &nbsp;&nbsp;&nbsp;&nbsp;{{ DrawerRemark }}
          </div>
        </div>
        <div class="offcanvas-body ">
          <h4>
            <font color="#083FD2">{{ QuestionsAttachment }}</font>
          </h4>
        </div>
        <div class="offcanvas-body " v-if="showImg === true">
          <Lightbox :form="form" :mode="mode" />
        </div>
      </div>
    </Drawer>
    <Drawer
      @close="rightDrawerUploadFile"
      :align="'right'"
      :closeable="true"
      :maskClosable="true"
      :zIndex="1002"
    >
      <div v-if="openRightUploadDrawer">
        <div class="offcanvas-header newspaper">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
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
        {{f_upload_file}}
        <div class="offcanvas-body " v-if="f_upload_image == 1">
          <div
            v-for="(fieldsFile, index) in fieldsFile"
            :key="fieldsFile.idFile"
            class="row"
          >
            <b-form-group
              class="mb-3 haderFile"
              v-bind:id="`FileDocFormFile${f_code}_${index}`"
              v-bind:name="`FileDocFormFile${f_code}_${index}`"
              label="อัปโหลดไฟล์ (Word, PDF , Excel):"
              label-for="formrow-firstname-input"
            >
              <input
                v-bind:id="`FileDoc${f_code}_${index}`"
                v-bind:name="`FileDoc${f_code}_${index}`"
                class="form-control"
                type="file"
                ref="`File{f_code}`"
                accept=".pdf,.doc,.docx ,.xls,.xlsx"
                @change="onChangeUploadFile"
              />
            </b-form-group>
          </div>
          <input
            type="button"
            class="btn btn-success mt-3 mt-lg-0"
            value="Add"
            @click="buttonAddFileUpload($event, f_code, index)"
          />
          <input
            type="button"
            class="btn btn-danger btn-block"
            value="Delete"
            @click="buttonDeleteFileUpload(index)"
          />
        </div>
        <div class="offcanvas-body " v-if="f_upload_file == 1">
          <div
            v-for="(fieldsImage, indexs) in fieldsImage"
            :key="fieldsImage.idImage"
            class="row"
          >
            <b-form-group
              class="mb-3 haderImage"
              v-bind:id="`FileDocFormImage${f_code}_${indexs}`"
              v-bind:name="`FileDocFormImage${f_code}_${indexs}`"
              label="อัปโหลดไฟล์ (JPG , PNG):"
              label-for="formrow-firstname-input"
            >
              <input
                v-bind:id="`FileImage${f_code}_${indexs}`"
                v-bind:name="`FileImage${f_code}_${indexs}`"
                class="form-control"
                type="file"
                ref="`Img{value.f_code}`"
                accept=".jpg,.png"
                @change="onChangeUploadImg"
              />
            </b-form-group>
          </div>
          <input
            type="button"
            class="btn btn-success mt-3 mt-lg-0"
            value="Add"
            @click="buttonAddImageUpload($event, f_code, indexs)"
          />
          <input
            type="button"
            class="btn btn-danger btn-block"
            value="Delete"
            @click="buttonDeleteImageUpload(indexs)"
          />
        </div>
        <b-form-group
          v-bind:id="`url${f_code}`"
          v-bind:name="`url${f_code}`"
          class="mb-3"
          label="ที่อยู่อินเตอร์เน็ต:"
          label-for="formrow-firstname-input"
        >
          <input
            v-bind:id="`address_url${f_code}`"
            v-bind:name="`address_url${f_code}`"
            class="form-control"
            type="text"
            ref="`address_url{f_code}`"
          />
        </b-form-group>
        <b-form-group
          class="mb-3"
          label="บทวิเคราะห์/ข้อความเพิ่มเติม:"
          label-for="formrow-firstname-input"
        >
          <textarea
            v-bind:id="`additional_message${f_code}`"
            v-bind:name="`additional_message${f_code}`"
            class="form-control"
            :maxlength="225"
            rows="3"
            :placeholder="`${textareaTitle}`"
          ></textarea>
        </b-form-group>
        <div>
          <b-button
            v-bind:id="`buttonUpload${f_code}`"
            v-bind:name="`buttonUpload${f_code}`"
            variant="primary"
            @click="buttonUploadFile"
            >บันทึกข้อมูล</b-button
          >
        </div>
      </div>
    </Drawer>
    <Drawer
      @close="rightDrawerYearTotal"
      :align="'right'"
      :closeable="true"
      :maskClosable="true"
      :zIndex="1100"
    >
      <div v-if="openRightYearDrawer">
        <div class="offcanvas-header newspaper">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <font color="#BF490D">{{ fillInInformationYear }}</font
            ><br />
            <font color="#020223">{{ DrawerTitle }}</font>
          </h5>
        </div>
        <div class="offcanvas-body ">
          <div class="newspaper">
            <h4>
              <font color="#083FD2">{{ evidenceExplanation }}</font>
            </h4>
            &nbsp;&nbsp;&nbsp;&nbsp;{{ DrawerRemark }}
          </div>
        </div>
        <div class="offcanvas-body ">
          <h4>
            <font color="#083FD2">{{ QuestionsAttachment }}</font>
          </h4>
        </div>
        <div class="offcanvas-body " v-if="showImg === true">
          <Lightbox :form="form" :mode="mode" />
        </div>
      </div>
    </Drawer>
    <Drawer
      @close="rightDrawerFormTotal"
      :align="'right'"
      :closeable="true"
      :maskClosable="true"
      :zIndex="1100"
    >
      <div v-if="openRightFormDrawer">
        <div class="offcanvas-header newspaper">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <font color="#BF490D">{{ fillInInformation }}</font
            ><br />
            <font color="#020223">{{ DrawerTitle }}</font>
          </h5>
        </div>
        <div class="offcanvas-body ">
          <div class="newspaper">
            <h4>
              <font color="#083FD2">{{ evidenceExplanation }}</font>
            </h4>
            &nbsp;&nbsp;&nbsp;&nbsp;{{ DrawerRemark }}
          </div>
        </div>
        <div class="offcanvas-body ">
          <h4>
            <font color="#083FD2">{{ QuestionsAttachment }}</font>
          </h4>
        </div>
        <div class="offcanvas-body " v-if="showImg === true">
          <Lightbox :form="form" :mode="mode" />
        </div>
      </div>
    </Drawer>
  </div>
</template>

<script>
import appConfig from "@/app.config";
import Drawer from "vue-simple-drawer";
import { MasterService, QuestionnaireService } from "@/api/index.js";
import Lightbox from "@/components/widgets/profile/Lightbox.vue";
import QuestionnaireUpload from "@/components/widgets/questionnaire/QuestionnaireUpload.vue";
import Satisfaction from "@/components/widgets/questionnaire/Satisfaction.vue";
import TopForm from "@/components/widgets/questionnaire/TopForm.vue";
export default {
  name: "QuestionnaireTable",
  props: ["form", "mode", "questionnaire", "budgetYear", "GData", "title", "GScore"],
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { Drawer, Lightbox, QuestionnaireUpload, Satisfaction, TopForm },
  data() {
    return {
      OrganizationalCharacteristics: appConfig.OrganizationalCharacteristics,
      vision: appConfig.vision,
      mission: appConfig.mission,
      goal: appConfig.goal,
      policy: appConfig.policy,
      assessmentStatus: appConfig.assessmentStatus,
      historyProfile: appConfig.historyProfile,
      historyProfiles: appConfig.historyProfiles,
      Questions: appConfig.Questions,
      QuestionsScore: appConfig.QuestionsScore,
      QuestionsDescription: appConfig.QuestionsDescription,
      QuestionsAction: appConfig.QuestionsAction,
      QuestionsAttachment: appConfig.QuestionsAttachment,
      QuestionsGroup: appConfig.QuestionsGroup,
      OrganizationalData: appConfig.OrganizationalData,
      AssessmentCriteria: appConfig.AssessmentCriteria,
      Assessment: appConfig.Assessment,
      AssessmentDetail: appConfig.AssessmentDetail,
      evidenceExplanation: appConfig.evidenceExplanation,
      uploadfile: appConfig.uploadfile,
      fillInInformation: appConfig.fillInInformation,
      fillInInformationYear: appConfig.fillInInformationYear,
      evidenceExplanation: appConfig.evidenceExplanation,
      G: this.GData,
      totalScore: 0,
      YearData: [],
      ScoreData: [],
      ZoneAreaData: [],
      QuestionnaireData: [],
      f_description: 0,
      f_upload_file: 0,
      f_upload_image: 0,
      f_address_url: 0,
      openRightDrawer: false,
      openRightUploadDrawer: false,
      openRightYearDrawer: false,
      openRightFormDrawer: false,
      titleDrawer: null,
      DrawerCode: null,
      DrawerTitle: null,
      DrawerRemark: null,
      showImg: false,
      showFile: false,
      Sum: [],
      DataCaculator: 0,
      titleG1WT:appConfig.titleG1WT,
      titleG2WT:appConfig.titleG2WT,
      titleG3WT:appConfig.titleG3WT,
      titleG4WT:appConfig.titleG4WT,
      titleG5WT:appConfig.titleG5WT,
      score:appConfig.score,
      fieldsFile: [{ idFile: 1 }],
      fieldsImage: [{ idImage: 1 }],
    };
  },
  computed: {},
  methods: {
    async getYear() {
      const results = await MasterService.getYearAll();
      this.YearData = results.result;
    },
    async getScoreAll() {
      const results = await MasterService.getScoreAll();
      this.ScoreData = results.result;
    },
    async getZoneAreaAll() {
      const results = await MasterService.getZoneAreaAll();
      this.ZoneAreaData = results.result;
    },
    async getQuestionnaireAll() {
      const results = await QuestionnaireService.getQuestionnaireTabAll(
        this.GData
      );
      this.QuestionnaireData = results.result;
    },
    rightDrawerDescription(index, f_code, f_title, f_detail) {
      this.openRightDrawer = !this.openRightDrawer;
      console.log("Desc : ", index, f_code);
      this.titleDrawer = index;
      this.DrawerCode = f_code;
      this.DrawerTitle = f_title;
      this.DrawerRemark = f_detail;
    },
    rightDrawerUploadFile(
      index,
      f_code,
      f_title,
      f_detail,
      f_upload_image,
      f_upload_file
    ) {
      this.openRightUploadDrawer = !this.openRightUploadDrawer;
      console.log("Upload : ", index, f_code, f_title);
      console.log('type : ',f_upload_image, f_upload_file)
      this.titleDrawer = index;
      this.DrawerCode = f_code;
      this.DrawerTitle = f_title;
      this.DrawerRemark = f_detail;
      this.f_upload_image = f_upload_image;
      this.f_upload_file = f_upload_file;
    },
    rightDrawerYearTotal(index, f_code, f_title, f_detail) {
      this.openRightYearDrawer = !this.openRightYearDrawer;
      console.log("Desc : ", index, f_code);
      this.titleDrawer = index;
      this.DrawerCode = f_code;
      this.DrawerTitle = f_title;
      this.DrawerRemark = f_detail;
    },
    rightDrawerFormTotal(index, f_code, f_title, f_detail) {
      this.openRightFormDrawer = !this.openRightFormDrawer;
      console.log("Desc : ", index, f_code);
      this.titleDrawer = index;
      this.DrawerCode = f_code;
      this.DrawerTitle = f_title;
      this.DrawerRemark = f_detail;
    },
    voteScore(event, i, f_code, f_question_group, f_section) {
      let IdCodes = f_code + "data";
      
      document.getElementById(IdCodes).innerText = event;
      let dataScore = { code: f_code, score: event, group: f_question_group , tab:f_section};
      this.Sum.push(dataScore);
      console.log("count Array : ", this.Sum.length);
      console.log("Array Data: ", this.Sum);
      console.log('f_question_group:',f_question_group)
      if(f_section == 'G1'){
      var result = [];
      this.Sum.reduce(function(res, value, tab) {
        if (!res[value.group]) {
          res[value.group] = { group: value.group, score: 0, tab: f_section };
          result.push(res[value.group]);
        }
        res[value.group].score += value.score;
        return res;
      }, {});
      
        console.log(result);
      }else if( f_question_group == 'G2'){
        var result = [];
        console.log(result);
      }else{
        var result = [];
        console.log(result);
      }


      for (let index = 0; index < result.length; index++) {
        const element = result[index];
        console.log(element.group,element.score)
        if(f_question_group == element.group){
          let IdSum = f_question_group + "sum";
          document.getElementById(IdSum).innerHTML = element.score; 
        }
      }
    },
    handlerClick(f_code, index) {
      console.log("value f_code : " + f_code, "Number : ", index);
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
      let inputFileId =event.currentTarget.id
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
                f_type:'file',
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
    buttonUploadFile(){
      let buttonUploadID = event.target.id
    //  console.log('divId: ' + buttonUploadID)
      let CodeButton =  buttonUploadID.split('buttonUpload');
    //  console.log(CodeButton[1]);
      let codeAddressUrl = 'address_url'+ CodeButton[1];
      let codeAdditionalMessage = 'additional_message'+ CodeButton[1];
      var input = document.getElementById(codeAddressUrl).value;
    //  console.log(input);
      var input1 = document.getElementById(codeAdditionalMessage).value;
    //  console.log(input1);    
            let yearData = new Date().getFullYear() + 543;
        const payload={
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
            try{
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
                          title:
                            "ไม่สามารถเรียกเซอร์วิสการบันทึกข้อมูลการ upload ได้",
                          text: `${error.response}: ${error.message}`,
                          allowOutsideClick: false,
                        });
                      });
            }catch(err){
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
  created() {
    this.getYear();
    this.getScoreAll();
    this.getZoneAreaAll();
    this.getQuestionnaireAll();
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
.newspaper {
  width: 300px;
}
.score{
  color: #F52909;
  font-size: 14px;  
}
.titleScore{
  font-weight: bold;
  color: #F52909;
  font-size: 14px;
}
.subScore{
  text-align: center;
  font-weight: bold;
  color: #0BA934;
  font-size: 12px;
}
.subScoreBack{
  text-align: center;
  color: #040404;
  font-size: 12px;
}
</style>
