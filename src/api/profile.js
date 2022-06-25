import axios from "axios";
import HttpRequest from "./request";
export class ProfileProvider extends HttpRequest {
    async getProfileAll() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/profile/");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }  

      async getProfileByCode() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/profile/"+localStorage.getItem("f_code"));
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }       
}