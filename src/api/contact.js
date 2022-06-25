import axios from "axios";
import HttpRequest from "./request";
export class ContactProvider extends HttpRequest {
    async getContactAll() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/contact/");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }    
}