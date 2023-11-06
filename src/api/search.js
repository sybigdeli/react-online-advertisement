// import { apiClient } from "./request";
import { samplePosts } from "@/fake-data/posts";
import { fakeRequest } from "@/fake-data/utils";

const apiSearchPost = async () => {
  // const result = await apiClient.get('/search')
  const result = await fakeRequest(samplePosts);

  return result;
};

export { apiSearchPost };
