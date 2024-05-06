
import axios from "axios";

const apiKey = "S4oDNpvkivakguacCrGTPCuoOEkUHDjTjzO_q7fj-II";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Client-ID ${apiKey}`;
  return config;
});

export const fetchImagesWithTopic = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      per_page: 8,
      page,
    },
  });
  return response.data.results;
};