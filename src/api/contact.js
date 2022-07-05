import axios from "axios";
import HttpRequest from "./request";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
export class ContactProvider extends HttpRequest {
  
    async getContactAll() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/contact/");        
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }   
      async getSearch(f_name) {
        try {
          const { data } = await axios.get(`${process.env.VUE_APP_ENDPOINT}` + "/contact/name/"+f_name);        
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }   

      async SaveContact(payload) {
        try {
          const { data } = await axios.post(`${process.env.VUE_APP_ENDPOINT}` + "/contact/",payload);            
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }
      
      async getUpdateAll(f_code,payload){
        try {
          const { data } = await axios.put(`${process.env.VUE_APP_ENDPOINT}` + "/contact/"+ f_code,payload);          
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }        
      }      
}