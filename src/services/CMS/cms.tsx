import { Page } from "./contentModel";
import axiosInstance from "../Axios/axiosInstance";

class ContentService {
    private static instance: ContentService;

    private constructor(){}

    public static getInstance():

    ContentService {
        if(!ContentService.instance){
            ContentService.instance = new ContentService();
        }
        return ContentService.instance;
    }

    public async getContent(slug:string):
        Promise<Page> {
          const response = await axiosInstance.get(`http://127.0.0.1:5000/Content/pages/${slug}`);
          console.log("Loading....")
          return response.data
    }
    
    

}

export default ContentService