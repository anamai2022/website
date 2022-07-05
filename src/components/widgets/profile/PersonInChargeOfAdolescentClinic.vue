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
          <el-select id="f_prosition" name="f_prosition" v-model="f_prosition" filterable :placeholder="placeholderSelect">
            <el-option
              v-for="item in positionDB"
              :key="item.f_MasterId"
              :label="item.f_MasterName"
              :value="item.f_MasterId"
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
        <div class="col-6">
          ชื่อผู้อำนวยการ :
        </div>
        <div class="col-6">
          <el-select v-model="f_director" filterable :placeholder="placeholderSelect">
            <el-option
              v-for="item in ContactData"
              :key="item.f_contactId"
              :label="item.f_firstName +' '+item.f_lastName"
              :value="item.f_contactId"
            >
            </el-option>
          </el-select>          
        </div>

        <div class="col-6">
          ชื่อแพทย์ผู้รับผิดชอบ :
        </div>
        <div class="col-6">
          <el-select v-model="f_physician" filterable :placeholder="placeholderSelect">
            <el-option
              v-for="item in ContactData"
              :key="item.f_contactId"
              :label="item.f_firstName +' '+item.f_lastName"
              :value="item.f_contactId"
            >
            </el-option>
          </el-select>          
        </div>
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
import  { contactService, MasterService  } from "@/api/index.js";
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
    };
  },
  computed: {},
  methods: {
    handleReset() {
      location.reload();
    },
  async  handleSave() {
      console.log('Test')
      let payload = {
        f_firstName: this.f_firstName,
        f_lastName: this.f_lastName,
        f_nickname: this.f_nickname,
        f_phone: this.f_phone,
        f_email: this.f_email,
        f_line: this.f_line,
        f_organization:this.f_organization,
        f_institution: this.f_institution,
        f_position: this.f_position,
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
        this.positionDB = results.result  
        this.$swal({
              icon: "warning",
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
