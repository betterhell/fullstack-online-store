import axios from "axios";

export const registration = async (
  email: string,
  password: string,
  role: string
) => {
  try {
    await axios
      .post(`http://localhost:5000/api/user/sign-up`, {
        email: email,
        password: password,
        role: role,
      })
      .then((r) => console.log(r));
  } catch (error) {
    console.log(error);
  }
};
