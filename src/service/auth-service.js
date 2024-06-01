import axios from "axios";
import {baseURL} from "@/store/variables";
import {jwtDecode} from "jwt-decode";
import LocalstorageService from "@/service/localstorage-service";
import {ACCESS_TOKEN_NAME} from "@/store/variables";
import VuexStoreService from "@/service/vuex-store-service";
import router from "@/router";

class AuthService {
  async login(username, password) {
    try {
      const response = await axios.post(`${baseURL}/auth/signIn`, {
        username: username,
        password: password
      });
      if (response) {
        console.log(response.data);
      } else {
        throw new Error("Error");
      }
      const token = response.data.token;
      const decodedJwt = jwtDecode(token);
      console.log(decodedJwt);
      const authRole = decodedJwt.role;
      LocalstorageService.setter(ACCESS_TOKEN_NAME, token);

      const profile_photo_url = decodedJwt.profile_photo_url;
      console.log(decodedJwt.sub, authRole, true, profile_photo_url);
      await VuexStoreService.setter(decodedJwt.sub, authRole, true, profile_photo_url);

      await router.push('/home');

    } catch (error) {
      console.error(error)
      LocalstorageService.cleaner();
      await VuexStoreService.cleaner();
      throw new Error("Error");
    }
  }

  async resetPassword(email) {
    try {
      await axios.get(`${baseURL}/auth/attemptToReset?to=${email}`);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new AuthService();
