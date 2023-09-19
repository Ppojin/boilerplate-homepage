import axios from "axios";

export default function refreshToken(){
  axios
    .get("/refresh")
    .catch((e)=>{
      console.log(e)
      localStorage.removeItem('accessToken')
      window.location.reload();
    })
}