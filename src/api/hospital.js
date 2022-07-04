import axios from "axios";
import HttpRequest from "./request";
export class HospitalProvider extends HttpRequest {
    async getHospitalAll() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/hospital/");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }   

      async getHospitalByCode() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/hospital/" + localStorage.getItem("profile"));
          console.log('Hospital Data :',data)
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }     

      async getSaveByCode(payload) {        
        try {
          const { data } = await axios.post(`${process.env.VUE_APP_ENDPOINT}` + "/hospital/",payload);  
          console.log('Hospital Save Data :',data, 'payload : ',payload)        
          return data;
        } catch (error) {
          console.log(error)
          return { statusCode: error.response.status };
        }
      }
      
      async getUpdateAll(f_code,payload){
        try {
          const { data } = await axios.put(`${process.env.VUE_APP_ENDPOINT}` + "/hospital/"+ f_code,payload);          
          return data;
        } catch (error) {
          console.log(error)
          return { statusCode: error.response.status };
        }        
      }
}