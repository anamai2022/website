import axios from "axios";
import HttpRequest from "./request";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
export class FlowAnswerProvider extends HttpRequest {
  
    async getDataAll() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/flowAnswer/");        
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }   

      async SaveData(payload) {
        try {
          const { data } = await axios.post(`${process.env.VUE_APP_ENDPOINT}` + "/flowAnswer/",payload);            
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }
      async GetByDocumentById(f_running) {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/flowAnswer/"+f_running);                      
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }
      async GetByDocumentByHospitalCode(f_hospitalCode) {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/flowAnswer/"+f_hospitalCode);                      
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }
      async GetByDocumentByHospitalCodeAndYear(f_hospitalCode,f_year) {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/flowAnswer/"+f_hospitalCode +'/'+f_year);                      
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }                               
}