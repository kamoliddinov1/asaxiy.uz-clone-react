import { service } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/productsSold"),
  getOne: (id) => service.get(`/productsSold/${id}`),
  create: (data) => service.post("/productsSold", data),
  update: (id, data) => service.put(`/productsSold/${id}`, data),
  delete: (id) => service.delete(`/productsSold/${id}`),
  getUsers: (size, page) => service.get(`productsSold?size=${size}&page=${page}`),
};