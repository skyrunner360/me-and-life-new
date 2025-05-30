import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LaptopIcon from "@mui/icons-material/Laptop";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import { Avatar, ClickAwayListener, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import Link from "next/link";
import React, { useState } from "react";
import ClippedText from "./ClippedText";
import { MOBILE_BREAKPOINT } from "./common/Constants";
import useDeviceSize from "./common/CustomHooks";
import { useRouter } from "next/router";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "hsl(0,0%,10%)",
  color: "#fff",
  "&$selected": {
    backgroundColor: "#fff",
  },
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: theme.spacing(8),
  backgroundColor: "hsl(0,0%,10%)",
  [theme.breakpoints.up("sm")]: {
    width: theme.spacing(8),
  },
  "&$selected": {
    backgroundColor: "#fff",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DrawerCustom = styled(Drawer, {
  shouldForwardProp: (prop) => true,
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .MuiSvgIcon-root, & .MuiTypography-root": {
    color: "#fff",
  },
}));

const SideNavBar = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useRouter();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerContent = (props: any) => {
    return (
      <div>
        <Divider />
        <List>
          <Tooltip title={!props?.open ? "Home" : ""} placement="right" arrow>
            <ListItem
              disablePadding
              sx={{ display: "block", "&:hover": { backgroundColor: "#416B9B" } }}
            >
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <ListItemButton
                  sx={{
                    minHeight: 85,
                    textDecoration: "none",
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  selected={pathname === "/"}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" fontSize={14}>
                        Home
                      </Typography>
                    }
                    sx={{ opacity: { sm: open ? 1 : 0 } }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          </Tooltip>
          {[
            {
              title: "Writings",
              desc: `Writings to let out my thoughts.`,
              icon: <ArticleIcon />,
              path: "/writings",
            },
            {
              title: "Tech Blogs",
              desc: "Blogs for discussing Technology.",
              icon: <LaptopIcon />,
              path: "/techBlogs",
              need_redirect: false,
            },

            {
              title: "Life Update Blogs",
              desc: `Blogs on Major Life Events.`,
              icon: <LocalActivityIcon />,
              path: "/lifeBlogs",
            },

            {
              title: "About Me",
              desc: "Who is Rishi?",
              icon: <InfoIcon />,
              path: "/about",
              need_redirect: false,
            },

            {
              title: "Contact Me",

              icon: <ContactPageIcon />,
              path: "/contact",
              need_redirect: false,
            },
          ].map((data, index) => {
            return (
              <Tooltip title={!props?.open ? data?.title : ""} placement="right" arrow key={index}>
                <ListItem
                  key={index}
                  disablePadding
                  sx={{ display: "block", "&:hover": { backgroundColor: "#416B9B" } }}
                >
                  {!data?.need_redirect ? (
                    <Link href={data?.path || ""} style={{ textDecoration: "none" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 85,
                          textDecoration: "none",
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                        // @ts-ignore
                        selected={pathname?.match(data.path)?.length > 0}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {data?.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body1" fontSize={14}>
                              {data?.title}
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body1" fontSize={11}>
                              {data?.desc}
                            </Typography>
                          }
                          sx={{ opacity: { sm: open ? 1 : 0 } }}
                        />
                      </ListItemButton>
                    </Link>
                  ) : (
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      selected={data?.path === pathname}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {data?.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body1" fontSize={14}>
                            {data?.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body1" fontSize={11}>
                            {data?.desc}
                          </Typography>
                        }
                        sx={{ opacity: { sm: open ? 1 : 0 } }}
                      />
                    </ListItemButton>
                  )}
                </ListItem>
              </Tooltip>
            );
          })}
        </List>
        <Divider />
      </div>
    );
  };
  const [windowWidth] = useDeviceSize();
  return (
    <>
      <Box id="Sidebar">
        {windowWidth <= MOBILE_BREAKPOINT && (
          <Box textAlign={"right"}>
            <IconButton onClick={toggleDrawer} sx={{ position: "relative", zIndex: 4 }}>
              <Avatar src={"/menuIcon.jpg"} variant="rounded" />
            </IconButton>
          </Box>
        )}
        {windowWidth > MOBILE_BREAKPOINT ? (
          <ClickAwayListener onClickAway={handleDrawerClose}>
            <DrawerCustom
              variant="permanent"
              anchor="right"
              open={open}
              onClose={handleDrawerClose}
            >
              <DrawerHeader>
                <Box display={"flex"} alignItems={"center"}>
                  {open && (
                    <ClippedText word="HOPELOGUE" imgSrc="/carousel1_bkp.jpg" fontSize="2rem" />
                  )}
                  <IconButton onClick={toggleDrawer}>
                    <Avatar src={"/menuIcon.jpg"} variant="rounded" />
                  </IconButton>
                </Box>
              </DrawerHeader>
              <DrawerContent />
            </DrawerCustom>
          </ClickAwayListener>
        ) : (
          <Drawer
            variant="temporary"
            anchor="right"
            open={open}
            onClose={handleDrawerClose}
            sx={{
              "& .MuiDrawer-paper": { backgroundColor: "hsl(0,0%,10%)" },
              "& .MuiSvgIcon-root, & .MuiTypography-root": {
                color: "#fff",
              },
            }}
          >
            <DrawerHeader>
              <Box display={"flex"} alignItems={"center"}>
                {open && (
                  <ClippedText word="HOPELOGUE" imgSrc="/carousel1_bkp.jpg" fontSize="2rem" />
                )}
                <IconButton onClick={toggleDrawer}>
                  <Avatar src={"/menuIcon.jpg"} variant="rounded" />
                </IconButton>
              </Box>
            </DrawerHeader>
            <DrawerContent />
          </Drawer>
        )}
      </Box>
    </>
  );
};
export default SideNavBar;
