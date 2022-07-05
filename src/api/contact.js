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

      async SaveContact(payload) {
        try {
          const { data } = await this.post(`${process.env.VUE_APP_ENDPOINT}` + "/contact/",payload);            
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }      
}