<template>
  <div class="row">
    <p>ลักษณะสำคัญขององค์กร</p>
    <div v-if="mode !== 'Create'">
      <div class="col-12"  v-for="(items, index) in dataSet" :key="index">
        <p>{{vision}}</p>
        <textarea id="f_vision" name="f_vision" v-model="items.f_vision" rows="4" cols="50">{{items.f_vision}}</textarea>
        <p>{{mission}}</p>
        <textarea id="f_mistion" name="f_mistion" v-model="items.f_mistion" rows="4" cols="50">{{items.f_mistion}}</textarea>
        <p>{{goal}}</p>
        <textarea id="f_gotoKnow" name="f_gotoKnow" v-model="items.f_gotoKnow" rows="4" cols="50">{{items.f_gotoKnow}}</textarea>
        <p>{{policy}}</p>
        <textarea id="f_policy" name="f_policy" v-model="items.f_policy" rows="4" cols="50">{{items.f_policy}}</textarea>
      </div>
    </div>
    <div v-else>
        <p>{{vision}}</p>
        <textarea id="f_vision" name="f_vision" v-model="f_vision" rows="4" cols="50"></textarea>
        <p>{{mission}}</p>
        <textarea id="f_mistion" name="f_mistion" v-model="f_mistion" rows="4" cols="50"></textarea>
        <p>{{goal}}</p>
        <textarea id="f_gotoKnow" name="f_gotoKnow" v-model="f_gotoKnow" rows="4" cols="50"></textarea>
        <p>{{policy}}</p>
        <textarea id="f_policy" name="f_policy" v-model="f_policy" rows="4" cols="50"></textarea>      
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
import  { profileService } from "@/api/index.js";
import moment from 'moment';
export default {
  name: "Organizational",
  props: ["mode", "dataSet",  ],
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
      f_vision:null,
      f_mistion:null,
      f_gotoKnow:null,
      f_policy:null,
      Remark: appConfig.Remark,
      vision: appConfig.vision,
      mission: appConfig.mission,
      goal: appConfig.goal,
      policy: appConfig.policy,   
      toDay: new Date(),
    };
  },
  computed: {},
  methods: {
    handleReset() {
      const dataSet = []
    },
    async handleSave() {  
      if (this.mode == 'Create') {        
        let Organizational = {
          f_hospitalcode:localStorage.getItem('profile'), 
          f_vision: this.f_vision,
          f_mistion: this.f_mistion,
          f_gotoKnow: this.f_gotoKnow,
          f_policy: this.f_policy,
          f_createDate:moment(this.toDay).format('YYYY-MM-DD HH:mm:ss'),
          f_createBy:localStorage.getItem('f_code'),
          f_status: 1,
        };
        let resultSave = await profileService.getSaveProfileByCode(Organizational);   
        if(resultSave.messagesboxs == 'Success'){
               this.$swal({
                icon: "success",
                title: resultSave.messagesboxs,
                text: resultSave.messagesboxs,
                allowOutsideClick: false,
              });
          this.$router.go()
        }else{
               this.$swal({
                icon: "error",
                title:resultSave.messagesboxs,
                text: resultSave.messagesboxs,
                allowOutsideClick: false,
              });
          this.$router.go()          
        }
      } else {          
        let Organizational = {
          f_vision: this.dataSet[0].f_vision,
          f_mistion: this.dataSet[0].f_mistion,
          f_gotoKnow: this.dataSet[0].f_gotoKnow,
          f_policy: this.dataSet[0].f_policy,
          f_updateDate:moment(this.toDay).format('YYYY-MM-DD HH:mm:ss'),
          f_updateBy:localStorage.getItem('f_code'),          
        }        
        let resultUpdate = await profileService.getUpdateAll(this.dataSet[0].f_code,Organizational)
         if(resultUpdate.messagesboxs == 'Success'){            
              this.$swal({
                icon: "success",
                title: resultUpdate.messagesboxs,
                text: resultUpdate.messagesboxs,
                allowOutsideClick: false,
              });
        }else{
              this.$swal({
                icon: "error",
                title: resultUpdate.messagesboxs,
                text: resultUpdate.messagesboxs,
                allowOutsideClick: false,
              });                 
        }
        this.$router.go()
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
#custom-target {
  position: relative;
  width: 600px;
  height: 300px;
  border-style: solid;
}

.position-absolute {
  position: absolute;
}
</style>
