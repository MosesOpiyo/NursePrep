import axios from "axios";
import { Content } from "./contentModel";

class contentService {
    private static instance: contentService;

    private constructor(){}

    public static getInstance():

    contentService {
        if(!contentService.instance){
            contentService.instance = new contentService();
        }
        return contentService.instance;
    }

    // public async getContent():
    //     Promise<Content[]> {
    //       '/'
    //     }
    

}