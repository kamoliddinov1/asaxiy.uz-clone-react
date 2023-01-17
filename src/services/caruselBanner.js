import { service } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/caruselbanner"),
  getOne: (id) => service.get(`/caruselbanner/${id}`),
  create: (data) => service.post("/caruselbanner", data),
  update: (id, data) => service.put(`/caruselbanner/${id}`, data),
  delete: (id) => service.delete(`/caruselbanner/${id}`),
  getUsers: (size, page) => service.get(`/caruselbanner?size=${size}&page=${page}`),
};