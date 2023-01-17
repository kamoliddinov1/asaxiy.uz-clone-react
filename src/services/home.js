import { service } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/homeCard"),
  getOne: (id) => service.get(`/homeCard/${id}`),
  create: (data) => service.post("/homeCard", data),
  update: (id, data) => service.put(`/homeCard/${id}`, data),
  delete: (id) => service.delete(`/homeCard/${id}`),
  getUsers: (size, page) => service.get(`homeCard?size=${size}&page=${page}`),
};