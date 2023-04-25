import axios from "axios";

export const login = async (email: string, password: string) => {
  try {
    await axios.post(`http://localhost:5000/api/user/sign-in`, {
      email: email,
      password: password,
    });
  } catch (error) {
    console.log(error);
  }
};
