import axios from "axios";

const getApiData = async (videoDispatch) => {
  const response = await axios.get("/api/videos");
  videoDispatch({ type: "SAVE_API_DATA", value: response.data.videos });
};

export { getApiData };
