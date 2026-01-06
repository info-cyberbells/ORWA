import axios from "axios";
import {USER_ENDPOINTS} from "./authRoutes";
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




export const LoginService = async (userData) => {
  const response = await axios.post(USER_ENDPOINTS.ADMIN_USER, userData)
  return await response.data
}


export const ContactUsService = async (contactData) => {
  const response = await axios.post(USER_ENDPOINTS.CONTACTUS_USER, contactData)
  return await response.data
}


export const getAllContactsService = async ({ page = 1, limit = 10 }) => {
  const response = await axios.get(
    `${USER_ENDPOINTS.GET_CONTACT_LIST}?status=new&page=${page}&limit=${limit}`,
    getAuthHeader()
  );
  return response.data;
};


// GET residential members 
export const getResidentialMembers = async ({ page = 1, limit = 10 }) => {
  const response = await axios.get(
    ` ${USER_ENDPOINTS.GET_MEMBERS_RESIDENTIALS}?page=${page}&limit=${limit}`,
    getAuthHeader()
  );
  return response.data;
};
// GET  members 
export const getMembers = async ({ page = 1, limit = 10 }) => {
  const response = await axios.get(
    ` ${USER_ENDPOINTS.GET_MEMBERS}?page=${page}&limit=${limit}`,
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
// Verify residential member
export const verifyResidentialMember = async ({ memberId, status }) => {
  const response = await axios.put(
    `${USER_ENDPOINTS.VERIFY_MEMBER}/${memberId}`,
    { status }, // true or false
    getAuthHeader()
  );
  return response.data;
};



// Update residential member
export const updateResidentialMember = async (id, updatedData) => {
  const response = await axios.put(
    `${USER_ENDPOINTS.UPDATE_RESIDENTIALS}/${id}`,
    updatedData,
    {
      ...getAuthHeader(),
      headers: {
        ...getAuthHeader().headers,
      },
    }
  );
  return response.data;
};
// delte getResidentialMember 
export const deleteResidentialMember = async (id) => {
  const response = await axios.delete(
    `${USER_ENDPOINTS.DELETE_RESIDENTIALS}/${id}`,
    {
      ...getAuthHeader(),
      headers: {
        ...getAuthHeader().headers,
      },
    }
  );

  return response.data;
};








