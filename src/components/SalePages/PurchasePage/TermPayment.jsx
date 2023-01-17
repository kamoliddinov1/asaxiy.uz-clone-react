import React from "react";
import { Box, IconButton, Grid, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import TelegramIcon from "@mui/icons-material/Telegram";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "50%" },
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 2,
};

const Purchase = ({ productdata, children, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  ////////////// muddatli tolov //////////////////////////////////////

  const [sum, setSum] = React.useState(3);

  const handlemonth3 = () => setSum(3);
  const handlemonth6 = () => setSum(6);
  const handlemonth9 = () => setSum(9);
  const handlemonth12 = () => setSum(12);
 

  return (
    <div>
      <Button onClick={handleOpen} {...props}>
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "13px" }}>
              {productdata?.name} ni muddatli to'lovga sotib olish
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{
                color: "gray",
                fontWeight: "bold",
                ":hover": { color: "black" },
                fontSize: "12px",
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ width: "100%", mt: 2 }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 2, sm: 2, md: 3 }}
            >
              <Grid item xs={6} md={3}>
                <Box
                  autoFocus
                  onClick={handlemonth3}
                  sx={{
                    textAlign: "center",
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    p: "15px 0px",
                    borderRadius: "20px",
                    background: (sum === 3 &&"#008DFF" ),
                  }}
                >
                  <Typography sx={{ fontSize: "15px" }}>3 oy</Typography>
                  <Typography sx={{ mt: 2, color: "red", fontSize: "15px" }}>
                    {(productdata?.narxi / 3).toFixed(1)} so'm
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  onClick={handlemonth6}
                  sx={{
                    textAlign: "center",
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    p: "15px 0px",
                    borderRadius: "20px",
                    background: (sum === 6 &&"#008DFF" ),
                  }}
                >
                  <Typography sx={{ fontSize: "15px" }}>6 oy</Typography>
                  <Typography sx={{ mt: 2, color: "red", fontSize: "15px" }}>
                    {(productdata?.narxi / 6 || productdata / 6).toFixed(1)} so'm
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  onClick={handlemonth9}
                  sx={{
                    textAlign: "center",
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    p: "15px 0px",
                    borderRadius: "20px",
                    background: (sum === 9 &&"#008DFF" ),
                  }}
                >
                  <Typography sx={{ fontSize: "15px" }}>9 oy</Typography>
                  <Typography sx={{ mt: 2, color: "red", fontSize: "15px" }}>
                    {(productdata?.narxi / 9).toFixed(1)} so'm
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  onClick={handlemonth12}
                  sx={{
                    textAlign: "center",
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    p: "15px 0px",
                    borderRadius: "20px",
                    ":active": { color: "white", background: "#008DFF" },
                    background: (sum === 12 &&"#008DFF" ),
                  }}
                >
                  <Typography sx={{ fontSize: "15px" }}>12 oy</Typography>
                  <Typography sx={{ mt: 2, color: "red", fontSize: "15px" }}>
                    {(productdata?.narxi / 12).toFixed(1)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mt: 4,
            }}
          >
            <Typography>Umumiy summa :</Typography>
            <Typography sx={{ fontWeight: "600" }}>{(productdata?.narxi / sum).toFixed(1)} so'm</Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mt: 4,
              mb: 2,
            }}
          >
            <Typography>Ariza qoldirish :</Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
                columnGap: 2,
                mt: { xs: 2, sm: 0 },
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  height: "45px",
                  textTransform: "unset",
                  backgroundColor: "#008DFF",
                  fontSize: { xs: "11px", sm: "11px", md: "12px" },
                  borderRadius: "10px",
                }}
              >
                BOT orqali <TelegramIcon fontSize="small" />
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: { xs: 2, sm: 0 },
                  height: "45px",
                  textTransform: "unset",
                  backgroundColor: "#00CD98",
                  fontSize: { xs: "11px", sm: "10px", md: "12px" },
                  borderRadius: "10px",
                }}
              >
                Sayt orqali
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Purchase;
