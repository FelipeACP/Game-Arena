import axios from "axios";

//using only for testing
//in production, there should be no cors

const request = axios.create({
  baseURL:
    "https://api.backendless.com/831A32A6-076B-4B13-9247-31C1A5DF5313/D178D1A4-8311-433D-9888-EB920E8944DC/data",
  timeout: 30000,
  headers: { "Content-Type": "application/json" }
});

export default request;
