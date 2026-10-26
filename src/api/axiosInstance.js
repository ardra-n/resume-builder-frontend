import axios from "axios";

const instance = axios.create({
  baseURL: "https://resume-builder-b52k.onrender.com",
  timeout: 5000,
});

//Global Error Handling

instance.interceptors.response.use((response)=>{
    console.log("API RESPONSE RECEIVED...");
    return response
    
},
(error)=>{
    if(error.response){
        const status=error.response.status
        if(status==401){
            console.log("Unauthorized Access");
            
        }
        else if(status==404){
            console.log("API is Not Found...");
            
        }
        else if(status==500){
            console.log("Something went wrong...");
            
        }
        else if(error.request){
            console.log("No response from the server");
            
        }
        else{
            console.log("Error"+error.message);
            
        }
        return Promise.reject(error)
    }
}

)
export default instance