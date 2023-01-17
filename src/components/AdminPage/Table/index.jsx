import React from "react";
import { Box, Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteModal from '../../Modal';
import HomeIcon from '@mui/icons-material/Home';
import servicesHome from '../../../services/home';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dataprop, deleteprop, editprop, home }) => {

  const handleAddToHome = (id) => {
    const homeobj = {
      img: id.img,
      name: id.name,
      comment: id.comment,
      birinchiNarxi: id.birinchiNarxi,
      narxi: id.narxi,
      kreditNarxi: id.kreditNarxi,
      quantity: id.quantity,
      category: id.category,
      category2: id.category2,
    }
    servicesHome.create(homeobj).then((res) => console.log(res.status, "fffffffffooo"));
  }

  function Row({ row, index }) {
    const [open, setOpen] = React.useState(false);


    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={index}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="center">{index + 1}</TableCell>
          <TableCell align="center"><img style={{ width: '25px', zIndex: 3 }} src={row.img} alt="img" /></TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{row.narxi}</TableCell>
          <TableCell align="center">{row.kreditNarxi}</TableCell>
          <TableCell align="center" sx={{ display: ' flex', justifyContent: 'center' }}>
            <DeleteModal color="error" ochirish={() => deleteprop(row.id)}><DeleteIcon color="error" /></DeleteModal>
            <Button sx={{display: home === "home" ? "none" : 'flex'}} color="success" onClick={() => editprop(row.id)}><ModeEditIcon /></Button>
            <DeleteModal sx={{display: home === "home" ? "none" : 'flex'}} name="Boshsahifaga ma'lumot qo'shish" color="secondary" ochirish={() => handleAddToHome(row)}><HomeIcon /></DeleteModal>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <Table
                  size="small"
                  sx={{ width: "100%" }}
                  aria-label="purchases"
                >
                  <TableHead>
                    <TableRow>
                      {["", "Birinchi narxi", "Chegirma", "Yangi", "Quantity"].map((item, id) => (
                        <TableCell
                          key={id}
                          sx={{ fontWeight: "bold", color: "gray" }}
                          component="th"
                          scope="row"
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell />
                      <TableCell>{row.birinchiNarxi}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.category2}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <TableContainer sx={{ maxWidth: '100%' }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {["", "#", "Img", "Nomi", "Narxi", "Kredit narxi", "Boshqarish"].map((ele, id) => (
              <TableCell
                key={id}
                align="center"
                sx={{ fontWeight: "bold", color: "gray" }}
              >
                {ele}{" "}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataprop?.map((row, index) => (
            <Row key={index} row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
