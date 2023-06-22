import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { useState } from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const drawerWidth = 240;

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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-center",
  marginLeft: 14,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  backgroundColor: "black",
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
}));

interface NavbarProps {
  isDarkTheme: boolean;
  changeTheme: () => void;
}

export default function Navbar({ isDarkTheme, changeTheme }: NavbarProps) {
  // const theme = useTheme();
  const [selected, setSelected] = useState("a");
  const { palette } = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "black",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "show" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <Link
              to="/"
              onClick={() => setSelected("dashboard")}
              style={{
                display: "flex",
                color:
                  selected === "dashboard" ? "white" : palette.primary[700],
                textDecoration: "inherit",
              }}
            >
              <ListItemIcon
                sx={{
                  bgcolor:
                    selected === "dashboard"
                      ? palette.primary[400]
                      : palette.primary[700],
                  minWidth: 0,
                  maxHeight: 24,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="dashboard"
                sx={{
                  opacity: open ? 1 : 0,
                  color:
                    selected === "dashboard"
                      ? palette.primary[400]
                      : palette.primary[700],
                }}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/"
              onClick={() => setSelected("prediction")}
              style={{
                display: "flex",
                color:
                  selected === "prediction" ? "white" : palette.primary[700],
                textDecoration: "inherit",
              }}
            >
              <ListItemIcon
                sx={{
                  bgcolor:
                    selected === "prediction"
                      ? palette.primary[400]
                      : palette.primary[700],
                  minWidth: 0,
                  maxHeight: 24,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText
                primary="prediction"
                sx={{
                  opacity: open ? 1 : 0,
                  color:
                    selected === "prediction"
                      ? palette.primary[400]
                      : palette.primary[700],
                }}
              />
            </Link>
          </ListItem>
          <ListItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch checked={isDarkTheme} onChange={changeTheme} />
                }
                label="Dark Theme"
              />
            </FormGroup>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
