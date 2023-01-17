import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Services from "../../../services/telefonlar";
import { useNavigate } from "react-router-dom";
import Generictable from "../Table";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Services.getAll().then((res) => {
      setData(res);
    });
  }, [loading]);

  function handleDelete(id) {
    Services.delete(id).then();
    setLoading(!loading);
       navigate('/phonegadjet')
  }

  const handleEdit = (row) => {
    const tele = data.find((item) => item.id === row);
    navigate("/phonegadjet/input", { state: { tele } });
  };

  return (
    <div>
      <Box sx={{ mt: 1, mb: 2 }}>
        <Button variant="outlined" id="btnplus" onClick={() => navigate("/phonegadjet/input")}>
          Qoshish +
        </Button>
      </Box>
      <Generictable dataprop={data} deleteprop={handleDelete} editprop={handleEdit}/>
    </div>
  );
};