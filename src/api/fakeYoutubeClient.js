import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get("/videos/search.json");
  }
  async videos() {
    return axios.get("/videos/popular.json");
  }
  async relatedVideos() {
    return axios.get("/videos/related.json");
  }
  async channels() {
    return axios.get("/videos/channel.json");
  }
}
