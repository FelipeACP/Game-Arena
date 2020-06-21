import axios from "axios";

export const authenticate = async (login, password, remember) => {
  const response = await axios.post("/login", {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ login, password })
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.error);
  }

  return {
    status: response.status,
    data
  };
};
export const register = async () => {};

export const recoverPassword = async () => {};
