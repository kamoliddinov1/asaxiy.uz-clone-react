import axios, {  service } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getToken: ({ fullname, username, role, password }) =>
    service.post('users', {fullname, username, role, password }),
  getOne: (id) => service.get(`/users/${id}`),
  getAll: () => service.get("/users"),
};
