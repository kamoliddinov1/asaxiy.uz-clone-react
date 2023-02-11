import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import services from "../services/auth";
import { routes, adminRoutes, publicRoutes } from "../routes/routes";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const token = useSelector((state) => state.auth.token);

  const [data, setData] = useState([]);

  let admin;

  if (token) {
    let role = JSON.parse(token);
    useEffect(() => {
      services.getOne(role).then((res) => {
        setData(res)
      });
    }, [])

    admin = data.role === "admin" && data.password === "admin" ? true : false;
  }

  const publicUser = token ? false : true;

  const content = useRoutes( publicUser ? publicRoutes : admin ?   adminRoutes : routes);

  return <>{content}</>;
};