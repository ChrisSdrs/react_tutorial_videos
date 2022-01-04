import axios from "axios";

const KEY = "AIzaSyDcBmznyncl2MNSJbrF059hISZf0BWi13M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 50,
    key: KEY,
  },
});
