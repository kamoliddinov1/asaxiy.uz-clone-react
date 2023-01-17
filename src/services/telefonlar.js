import { service } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/telefonlar"),
  getOne: (id) => service.get(`/telefonlar/${id}`),
  create: (data) => service.post("/telefonlar", data),
  update: (id, data) => service.put(`/telefonlar/${id}`, data),
  delete: (id) => service.delete(`/telefonlar/${id}`),
  getUsers: (size, page) => service.get(`telefonlar?size=${size}&page=${page}`),
};