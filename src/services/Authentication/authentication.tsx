import axiosInstance from "../Axios/axiosInstance";

class AuthenticationService {
    private static instance: AuthenticationService;

    private constructor(){}

    public static getInstance():

    AuthenticationService {
        if(!AuthenticationService.instance){
            AuthenticationService.instance = new AuthenticationService();
        }
        return AuthenticationService.instance;
    }

    public async registration(userData: { name: string; email: string; password: string; confirmPassword: string; paymentOption: string },subscriptionPeriod:string): Promise<any> {
        try {
            if(userData.password == userData.confirmPassword){
                const response = await axiosInstance.post(`http://127.0.0.1:5000/User/Authentication/Registration`, userData);
            return response.data;
            }
            else{
                console.log("Passwords do not match");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            throw error;
        }
    }

}

export default AuthenticationService