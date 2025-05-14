import axios from "axios";
import AlertCompounent from "../common/comonUse/AlertCompounent";


export const loginUser = async (username, password) => {
  try {
    const res = await axios.post("http://localhost:1337/api/auth/local", {
      identifier: username,
      password: password,
    });
    console.log(res);
  } catch (error) {}
};
