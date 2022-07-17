import axios from "axios";
import HttpRequest from "./request";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
export class ScoreProvider extends HttpRequest {
    async SaveScore(payload) {
        try {
          const { data } = await axios.post(`${process.env.VUE_APP_ENDPOINT}` + "/score/",payload);            
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }
      async GetScoreById(f_hospitalCode,f_docrunning,f_year,f_section) {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/score/"+f_hospitalCode+'/'+f_docrunning+'/'+f_year+'/'+f_section);                      
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }  
      async GetScoreByTabId(f_hospitalCode,f_docrunning,f_year,f_section) {
        try {
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/score/"+f_hospitalCode+'/'+f_docrunning+'/'+f_year+'/'+f_section);                      
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }           
      async GetScoreByDocumentId(f_hospitalCode,f_docrunning,f_year,f_section,f_codetitle) {
        try {          
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/score/"+f_hospitalCode+'/'+f_docrunning+'/'+f_year+'/'+f_section+'/'+f_codetitle);                      
          console.log('vue call ',data)
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      } 
      async GetScoreByQuestionId(f_hospitalCode,f_docrunning,f_year,f_section,f_codetitle) {
        try {          
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}` + "/score/document/"+f_hospitalCode+'/'+f_docrunning+'/'+f_year+'/'+f_section+'/'+f_codetitle);                      
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }
      async GetGroupDocumentRunning(f_hospitalCode,f_year){
        try{
          const { data } = await this.get(`${process.env.VUE_APP_ENDPOINT}`+"/score/group/"+f_hospitalCode+'/'+f_year);
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }      
}