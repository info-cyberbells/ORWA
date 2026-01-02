export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const USER_ENDPOINTS = {
  CREATE_RESIDENTIAL: `${API_BASE_URL}/admin/residential`,
  ADMIN_USER: `${API_BASE_URL}/admin/login`,
  CONTACTUS_USER: `${API_BASE_URL}/contact-us`,
  GET_MEMBERS_RESIDENTIALS: `${API_BASE_URL}/admin/residential/member-listing`,
  GET_SINGLE_RESIDENTIALS: `${API_BASE_URL}/admin/residential`,
  UPDATE_RESIDENTIALS: `${API_BASE_URL}/admin/residential`,
  GET_CONTACT_LIST: `${API_BASE_URL}/contact-us/admin`
};




export default USER_ENDPOINTS;