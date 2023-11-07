// import { apiClient } from "./request";
import { samplePosts } from "@/fake-data/posts";
import { fakeRequest } from "@/fake-data/utils";

const apiSearchPost = async (filters) => {
  // const result = await apiClient.get('/search', {params: filters})

  var data = samplePosts;

  if (filters?.q) {
    data = samplePosts.filter((post) => post.title.includes(filters.q));
  }

  const result = await fakeRequest(data);

  return result;
};

export { apiSearchPost };
