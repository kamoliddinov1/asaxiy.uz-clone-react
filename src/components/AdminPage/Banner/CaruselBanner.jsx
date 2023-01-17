import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Button } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import services from "../../../services/caruselBanner";
import DeleteModal from "../../Modal";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    services.getAll().then((res) => {
      setData(res);
    });
  }, []);

  function Delete(id) {
    services.delete(id).then();
    setLoading(!loading);
    navigate("/glavnibanner");
  }

  const handleEdit = (row) => {
    const tele = data.find((item) => item.id === row);
    navigate("/glavnibanner/input", { state: { tele } });
  };

  return (
    <div>
      <Button
        variant="outlined"
        id="btnplus"
        onClick={() => navigate("/glavnibanner/input")}
        sx={{ mt: 2, mb: 2 }}
      >
        Qoshish +
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {["#", "Img", "Nomi", "Boshqarish"].map((val, id) => (
                <StyledTableCell align="center" key={id}> {val}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <img
                    style={{ border: "1px solid gray" }}
                    width="50px"
                    src={row.img}
                    alt={row.alt}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">{row.alt}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ display: " flex", justifyContent: "center" }}
                >
                  <DeleteModal color="error" ochirish={() => Delete(row.id)}>
                    <DeleteIcon color="error" />
                  </DeleteModal>
                  <Button color="success" onClick={() => handleEdit(row.id)}>
                    <ModeEditIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
