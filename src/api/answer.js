import axios from "axios";
import HttpRequest from "./request";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
export class AnswerProvider extends HttpRequest {
  
    async getDataAll(f_docrunning,f_year,f_hospitalCode) {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/answer/questionnaire/"+f_docrunning+"/"+f_year+"/"+f_hospitalCode);        
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }   
                            
}