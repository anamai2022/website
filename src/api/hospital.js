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
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/hospital/"+localStorage.getItem("profile"));
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }      
}