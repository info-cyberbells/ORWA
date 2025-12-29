  import axios from "axios";
  import USER_ENDPOINTS from "./authRoutes";
  // import { get } from "mongoose";

  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "x-request-source": "web",
      },
    };
  };

  //add resident
  export const createResidentialApplication = async (formData) => {
    const response = await axios.post(
      // APPLICATION_ENDPOINTS.CREATE_RESIDENTIAL,
      USER_ENDPOINTS.CREATE_RESIDENTIAL,
      formData,
      {
          ...getAuthHeader(),
        headers: {
              ...getAuthHeader().headers,
          "Content-Type": "multipart/form-data",
        },
      },
      
    );

    return response.data;
  };




  export const LoginService= async(userData)=>{
    const response = await axios.post(USER_ENDPOINTS.ADMIN_USER,userData)
    return await response.data
  }


  export const ContactUsService=async(contactData)=>{
    const response = await axios.post(USER_ENDPOINTS.CONTACTUS_USER,contactData)
    return await response.data
  }


export const getAllContactsService = async () => {
  const response = await axios.get(USER_ENDPOINTS.GET_CONTACT_LIST,getAuthHeader());
  return response.data;
};


  // GET residential members 
export const getResidentialMembers = async ({ page = 1, limit = 10 }) => {
  const response = await axios.get(
   ` ${USER_ENDPOINTS.GET_RESIDENTIALS}?page=${page}&limit=${limit}`,
    getAuthHeader()
  );
  return response.data;
};


//  GET member by ID
export const getResidentialMemberById = async (id) => {
  const response = await axios.get(
   ` ${USER_ENDPOINTS.GET_SINGLE_RESIDENTIALS}/${id}`,
    getAuthHeader()
  );
  return response.data;
};



