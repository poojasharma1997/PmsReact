import axios from "axios";
const BaseURL = process.env.REACT_APP_BASEURL;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjcyMzEzMzQ0LCJleHAiOjE2NzIzOTk3NDR9.zdbJ-WcWjzh6chcgPyNIP5cG6AJUW7seAD7QIRWemLc";
export const createTechVal = async (url, body) => {
  try {
    const resp = await axios.post(`http://localhost:3000/${url}`, body);
    return resp.data;
    // return resp.data;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
