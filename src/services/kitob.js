import { service } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/kitoblar"),
  getOne: (id) => service.get(`/kitoblar/${id}`),
  create: (data) => service.post("/kitoblar", data),
  update: (id, data) => service.put(`/kitoblar/${id}`, data),
  delete: (id) => service.delete(`/kitoblar/${id}`),
  getUsers: (size, page) => service.get(`kitoblar?size=${size}&page=${page}`),
};