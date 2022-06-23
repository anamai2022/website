import __ from "underscore";
import qs from "qs";
import axios from "axios";
import HttpRequest from "./request";
export class AuthProvider extends HttpRequest {
  constructor() {
    super(`${process.env.VUE_APP_GRAPH_ME}`);
  }
  async getToken(code) {
    const datas = qs.stringify({
      code: code,
      scope: process.env.VUE_APP_AUTH_SCOPE,
      grant_type: "authorization_code",
      response_type: "id_token",
      redirect_uri: process.env.VUE_APP_AUTH_CALLBACK,
      client_id: process.env.VUE_APP_AUTH_CLIENT_ID,
      code_verifier: process.env.VUE_APP_AUTH_CODE_VERIFIER,
    });
    try {
      const configs = {
        method: "post",
        url: `https://login.microsoftonline.com/${process.env.VUE_APP_AUTH_TENANT_ID}/oauth2/v2.0/token`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: datas,
      };
      return await axios(configs);
    } catch (error) {
      return { statusCode: error.response.status };
    }
  }
}
