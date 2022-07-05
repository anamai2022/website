import axios from "axios";
import HttpRequest from "./request";
export class MasterProvider extends HttpRequest {
    async getYearAll() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/master/year");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }   

      async getScoreAll() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/master/score");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }

      async getZoneAreaAll() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/master/zonearea");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      } 
      async getAppoveLevelAll(){
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/master/appovelevel");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }        
      }   
      
      async getOrganizationAll(){
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/master/organization");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }        
      } 
      
      async getPositionAll(){
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/master/position");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }        
      }   
      
      async getInstitutionAll(){
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/master/institution");
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }        
      }        
}