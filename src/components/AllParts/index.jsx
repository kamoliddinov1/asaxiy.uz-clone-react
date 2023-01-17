import { Box } from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MyButton } from "./style";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { data } from "./Data";
import { Link } from "react-router-dom";

const drawerWidth = 260;

const BarchaBolimlar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box sx={{ background: "#F8F8F8", height: "535px", overflowX: "scroll" }}>
      <List>
        {data.map((ele, id) => (
          <ListItem
            component={Link}
            key={id}
            disablePadding
            to={ele.link}
            sx={{ color: "black" }}
          >
            <ListItemButton
              sx={{ columnGap: 1, ":active": { background: "white" } }}
            >
              <img width="16px" src={ele.icon} alt="#" />
              <Typography sx={{ fontWeight: "550", fontSize: "13px" }}>
                {" "}
                {ele.title}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", ":hover": { color: "none" } }}>
      <MyButton onClick={handleOpen}>
        {open ? <CloseIcon color="primary" /> : <MenuIcon color="primary" />}
        Barcha bo'limlar
      </MyButton>

      {open && (
        <Box
          sx={{
            position: "absolute",
            top: "125px",
            left: "auto",
            right: "0px",
            width: "100%",
            display: "block",
            zIndex: 5,
            height: "535px",
          }}
        >
          <Zoom>
            <Box sx={{ display: "flex", background: "white", height: "535px" }}>
              <Box>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: drawerWidth,
                  }}
                  open
                >
                  {drawer}
                </Box>
              </Box>
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  overflow: "scroll",
                }}
              >
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis
                  convallis tellus id interdum velit laoreet id donec ultrices.
                  Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Cursus euismod quis viverra nibh cras. Metus vulputate eu
                  scelerisque felis imperdiet proin fermentum leo. Mauris
                  commodo quis imperdiet massa tincidunt. Cras tincidunt
                  lobortis feugiat vivamus at augue. At augue eget arcu dictum
                  varius duis at consectetur lorem. Velit sed ullamcorper morbi
                  tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                  sit amet volutpat consequat mauris. Elementum eu facilisis sed
                  odio morbi. Euismod lacinia at quis risus sed vulputate odio.
                  Morbi tincidunt ornare massa eget egestas purus viverra
                  accumsan in. In hendrerit gravida rutrum quisque non tellus
                  orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                  morbi tristique senectus et. Adipiscing elit duis tristique
                  sollicitudin nibh sit. Ornare aenean euismod elementum nisi
                  quis eleifend. Commodo viverra maecenas accumsan lacus vel
                  facilisis. Nulla posuere sollicitudin aliquam ultrices
                  sagittis orci a.
                </Typography>
                <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                  sit amet volutpat consequat mauris. Elementum eu facilisis sed
                  odio morbi. Euismod lacinia at quis risus sed vulputate odio.
                  Morbi tincidunt ornare massa eget egestas purus viverra
                  accumsan in. In hendrerit gravida rutrum quisque non tellus
                  orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                  morbi tristique senectus et. Adipiscing elit duis tristique
                  sollicitudin nibh sit. Ornare aenean euismod elementum nisi
                  quis eleifend. Commodo viverra maecenas accumsan lacus vel
                  facilisis. Nulla posuere sollicitudin aliquam ultrices
                  sagittis orci a.
                </Typography>
              </Box>
            </Box>
          </Zoom>
        </Box>
      )}
    </Box>
  );
};

export default BarchaBolimlar;
