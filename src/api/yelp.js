import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Nkhvxodto3M5U-tqmKSfizceDdM16mJMcqkg-5LhzuhGIhCk2ujf7NETDjueZODOYmD_5_Cl31DlzDTEjQJEdwlqOsejKeov0yV0wNSD60X3rwQFiaYS_EndYG3LXXYx"
  }
});
