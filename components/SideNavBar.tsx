import AnalyticsIcon from "@mui/icons-material/Analytics";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
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
import { MOBILE_BREAKPOINT } from "./common/Constants";
import useDeviceSize from "./common/CustomHooks";

const drawerWidth = 350;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: theme.spacing(8),
  [theme.breakpoints.up("sm")]: {
    width: theme.spacing(8),
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
  shouldForwardProp: (prop) => prop !== "open",
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
    color: "#4c4d52",
  },
}));

const SideNavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [expandMenu, setExpandMenu] = React.useState(false);
  const [openApplyOfferModal, setOpenApplyOfferModal] = React.useState(false);
  const [offerCode, setOfferCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDemoVideoModal, setShowDemoVideoModal] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setExpandMenu(true);
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const DrawerContent = (props: any) => {
    return (
      <div>
        <Divider />
        <List>
          {[
            {
              title: "Home",
              icon: <HomeIcon />,
              path: "/",
              need_redirect: false,
            },

            {
              title: "About Rishi",
              icon: <CollectionsIcon />,
              path: "/about",
              need_redirect: false,
            },

            {
              title: "Contact Me",

              icon: <CalendarMonth />,
              path: "/contact",
              need_redirect: false,
            },

            {
              title: "Tech Blogs",
              desc: "Blogs for discussing Technology",
              icon: <TipsAndUpdatesIcon />,
              path: "/techBlogs",
              need_redirect: false,
            },

            {
              title: "Life Update Blogs",
              desc: `Blogs on Major Life Events`,
              icon: <AnalyticsIcon />,
              path: "/lifeBlogs",
            },
          ].map((data, index) => {
            return (
              <Tooltip title={!props?.open ? data?.title : ""} placement="right" arrow key={index}>
                <ListItem key={index} disablePadding sx={{ display: "block" }}>
                  {!data?.need_redirect ? (
                    <Link href={data?.path || ""} style={{ textDecoration: "none" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          textDecoration: "none",
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                        // TODO Later
                        // selected={matchPath(data?.path + "/*", activePath?.pathname) ? true : false}
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
      <Box display={"flex"}>
        {windowWidth > MOBILE_BREAKPOINT && (
          <DrawerCustom variant="permanent" open={open} onClose={handleDrawerClose}>
            <DrawerHeader>This is Test</DrawerHeader>
            <DrawerContent handleDrawerClose={handleDrawerClose} open={open} />
          </DrawerCustom>
        )}
      </Box>
    </>
  );
};
export default SideNavBar;
