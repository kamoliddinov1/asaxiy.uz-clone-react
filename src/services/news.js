import { service } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/news"),
  getOne: (id) => service.get(`/news/${id}`),
  create: (data) => service.post("/news", data),
  update: (id, data) => service.put(`/news/${id}`, data),
  delete: (id) => service.delete(`/news/${id}`),
  getUsers: (size, page) => service.get(`news?size=${size}&page=${page}`),
};