import request from "./instance";

export const getNews = async () => {
  const response = await request.get("/news?sortBy=created%20desc");

  const data = await response.data;

  if (response.status !== 200) {
    throw new Error(data.error);
  }

  return {
    status: response.status,
    data
  };
};

export const getPost = async title => {
  const response = await request.get("/news/" + title);

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.error);
  }

  return {
    status: response.status,
    data
  };
};
