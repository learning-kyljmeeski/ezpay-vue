import {ACCESS_TOKEN_NAME} from "@/store/variables";
import LocalstorageService from "@/service/localstorage-service";

class CompanyService {
    async getAllCompanies() {
        const token = LocalstorageService.getter(ACCESS_TOKEN_NAME);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
      try {
        const response = await axios.get(`${baseURL}/company`, config);
        if (response) {
          console.log(response);
        } else {
          console.log("ERROR");
        }
      } catch (error) {
        LocalstorageService.cleaner();
        await VuexStoreService.cleaner();
        throw error;
      }
    }
  }
  
  export default new CompanyService();
  