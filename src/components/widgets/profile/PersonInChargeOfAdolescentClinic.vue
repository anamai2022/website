<template>
  <div class="row">
    <p>ลักษณะสำคัญขององค์กร</p>
    <div class="col-lg-12" >
      <b-form>
        <b-form-group
          class="mb-3"
          label="ชื่อ-นามสกุล:"
          label-for="horizontal-firstname-input"
          label-cols-sm="3"
        >
          <b-form-input
            id="f_firstName"
            name="f_firstName"  
            v-model="f_firstName"          
            type="text"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="mb-4"
          label="ตำแหน่ง:"
          label-for="horizontal-email-input"
          label-cols-sm="3"
        >
          <el-select v-model="value" filterable :placeholder="placeholderSelect">
            <el-option
              v-for="item in positionDB"              
              :key="item.f_MasterId"
              :label="item.f_MasterName"
              :value="item.f_MasterName"
            >
            </el-option>
          </el-select>   
        </b-form-group>

        <b-form-group
          class="mb-4"
          label="เบอร์โทรศัพท์:"
          label-for="horizontal-password-input"
          label-cols-sm="3"
        >
          <b-form-input
            id="f_phone"
            name="f_phone"  
            v-model="f_phone"
            type="number"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="mb-4"
          label="Email:"
          label-for="horizontal-password-input"
          label-cols-sm="3"
        >
          <b-form-input
            id="f_email"
            name="f_email"    
            v-model="f_email"             
            type="email"
          ></b-form-input>
        </b-form-group>

       <b-form-group
          class="mb-4"
          label="ชื่อผู้อำนวยการ :"
          label-for="horizontal-password-input"
          label-cols-sm="3"
        >
          <b-form-input
            id="f_director"
            name="f_director"    
            v-model="f_director"             
            type="email"
          ></b-form-input>
        </b-form-group>

       <b-form-group
          class="mb-4"
          label="ชื่อแพทย์ผู้รับผิดชอบ : "
          label-for="horizontal-password-input"
          label-cols-sm="3"
        >
          <b-form-input
            id="f_physician"
            name="f_physician"    
            v-model="f_physician"             
            type="email"
          ></b-form-input>
        </b-form-group>

        <br>
      </b-form>
    </div>
    <div class="col-6">
      <b-button variant="danger" class="btn-label" @click="handleReset()">
        <i class="bx bx-trash label-icon"></i>
        ยกเลิก
      </b-button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <b-button variant="success" class="btn-label" @click="handleSave()">
        <i class="bx bx-save label-icon"></i>
        บันทึกข้อมูล
      </b-button>
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";
import  { contactService, MasterService, profileService  } from "@/api/index.js";
import moment from 'moment';
export default {
  name: "PersonInChargeOfAdolescentClinic",
  props: ["mode", "ContactData","hospitalData"],
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
      placeholderSelect: appConfig.placeholderSelect,
      toDay: new Date(),    
      positionDB:null,
      f_prosition:null,
      f_director:null,
      f_physician:null,
      f_firstName:null,
      f_phone:null,
      f_email:null,
      value:null,
    };
  },
  computed: {},
  methods: {
    handleReset() {
      location.reload();
    },
  async  handleSave() {      
    let contact = await contactService.getSearch(this.f_firstName)
      console.log('contact : ',contact,this.f_firstName)
      if(contact.messagesboxs == 'unSuccess'){
        await this.saveData(this.f_firstName) 
      }else{
        this.$swal({
              icon: "warning",
              title: 'ข้อมูลรายชื่อซ้ำ' ,
              text: contact.messagesboxs ,
              allowOutsideClick: false,
            });
      }
    let director = await contactService.getSearch(this.f_director)
      console.log('director : ',director,this.f_director)
      if(director.messagesboxs == 'unSuccess'){
        await this.saveData(this.f_director) 
      }else{
        this.$swal({
              icon: "warning",
              title: 'ข้อมูลรายชื่อซ้ำ' ,
              text: director.messagesboxs ,
              allowOutsideClick: false,
            });
      }    
    let physician = await contactService.getSearch(this.f_physician)              
      console.log('physician : ',physician,this.f_physician)
     if(physician.messagesboxs == 'unSuccess'){
       await this.saveData(this.f_physician) 
      }else{
        this.$swal({
              icon: "warning",
              title: 'ข้อมูลรายชื่อซ้ำ' ,
              text: physician.messagesboxs ,
              allowOutsideClick: false,
            });
      }  
      if(this.hospitalData.length > 0){
        let payload ={
          f_hospitalcode: this.f_hospitalcode,
          f_director: this.f_director,
          f_physician: this.f_physician,
          f_responsiblePerson: this.f_responsiblePerson,
        }
        await profileService.getSaveProfileByCode(payload)
      }else{
          this.$swal({
              icon: "warning",
              title: appConfig.plaseInputOrgran,
              text: appConfig.OrganizationalCharacteristics ,
              allowOutsideClick: false,
            });        
      }  
    }, 
  async saveData(name){
    
        let payload = {
        f_firstName: name,
        f_phone: this.f_phone,
        f_email: this.f_email,
        f_line: this.f_line,
        f_organization:this.f_organization,
        f_institution: this.f_institution,
        f_position: this.value,
        f_createDate: moment(this.toDay).format('YYYY-MM-DD HH:mm:ss'),
        f_createBy: localStorage.getItem('f_code'),
        f_status: 1
      }      
      console.log(payload)
      const results = await contactService.SaveContact(payload);   
      if(results.messagesboxs == 'unSuccess' ){
        this.$swal({
              icon: "warning",
              title: appConfig.plaseInput ,
              text: results.messagesboxs ,
              allowOutsideClick: false,
            });
      }else{ 
        this.$swal({
              icon: "success",
              title: appConfig.plaseInput ,
              text: results.messagesboxs ,
              allowOutsideClick: false,
            });         
      }
  },
  async getContact(){
      const results = await MasterService.getPositionAll();
   
      if(results.messagesboxs == 'unSuccess' ){
        this.$swal({
              icon: "warning",
              title: appConfig.plaseInputContact ,
              text: appConfig.plaseInputMessageContact ,
              allowOutsideClick: false,
            });
      }else{
        this.positionDB = results.result           
      }
      return results
    },
  },
  beforeCreate() {},
  created() {
    this.getContact()
    console.log('hospitalData :',this.hospitalData)
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
