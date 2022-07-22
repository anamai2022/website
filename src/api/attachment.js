import axios from "axios";
import HttpRequest from "./request";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
export class attachmentProvider extends HttpRequest {
    async SaveFile(fileData) {
        try {
          const { data } = await axios.post(`${process.env.VUE_APP_ENDPOINT}` + "/upload/",fileData);            
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }
    async SaveImg(fileData) {
        try {
          const { data } = await axios.post(`${process.env.VUE_APP_ENDPOINT}` + "/upload/",fileData);   
          return data;
        } catch (error) {
          return { statusCode: error };
        }
      }
    async InsertData(payload){
      try {
        const { data } = await axios.post(`${process.env.VUE_APP_ENDPOINT}` + "/upload/save", payload);   
        return data;
      } catch (error) {
        return { statusCode: error };
      }      
    }

    async GetImgFile(f_docrunning,f_hospitalCode,f_year,f_code){
      try {
        const { data } = await axios.post(`${process.env.VUE_APP_ENDPOINT}` + "/upload/show/"+ f_docrunning+'/'+ f_hospitalCode+'/'+ f_year+'/'+ f_code);   
        return data;
      } catch (error) {
        return { statusCode: error };
      }      
    }

}