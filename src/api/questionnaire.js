import axios from "axios";
import HttpRequest from "./request";
export class QuestionnaireProvider extends HttpRequest {
    async getQuestionnaireAll() {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/questionnaire/");          
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      } 
      async getQuestionnaireTabAll(groupcode) {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/questionnaire/group/"+groupcode);                 
          return data;
        } catch (error) {
          return { statusCode: error.response.status };
        }
      }          
}