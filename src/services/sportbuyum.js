import { service } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/sportBuyumlari"),
  getOne: (id) => service.get(`/sportBuyumlari/${id}`),
  create: (data) => service.post("/sportBuyumlari", data),
  update: (id, data) => service.put(`/sportBuyumlari/${id}`, data),
  delete: (id) => service.delete(`/sportBuyumlari/${id}`),
  getUsers: (size, page) => service.get(`sportBuyumlari?size=${size}&page=${page}`),
};