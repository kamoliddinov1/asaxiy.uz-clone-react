import { service } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/televizor"),
  getOne: (id) => service.get(`/televizor/${id}`),
  create: (data) => service.post("/televizor", data),
  update: (id, data) => service.put(`/televizor/${id}`, data),
  delete: (id) => service.delete(`/televizor/${id}`),
  getUsers: (size, page) => service.get(`televizor?size=${size}&page=${page}`),
};