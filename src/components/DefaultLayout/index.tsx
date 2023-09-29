"use client";
import React from "react";
// import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Stack } from "@mui/material";
import LanguageSwitcher from "../LanguageSwitcher";
import  Link  from "next-intl/link";




const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Starred", href: "/starred", icon: StarIcon },
  { text: "Tasks", href: "/tasks", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

export default function DefaultLayout({
  children
}: {
  children: React.ReactNode;
}) {
    const [open, setOpen] = React.useState(true)
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 200 }}>
        <Toolbar sx={{ backgroundColor: "background.paper", display:'flex', justifyContent:'space-between', minHeight:'64px !important' }}>
          <Box sx={{display:'flex', alignItems:'center', gap:1.5}}>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen((s) => !s)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="black">
           Gobapp 
          </Typography>
          </Box>
          {/* <Box display='flex' alignItems='center'>
          <DashboardIcon
            sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
          />
          <Typography variant="h6" noWrap component="div" color="black">
            Next.js App 
          </Typography>
          </Box> */}
          <LanguageSwitcher/>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink:0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            // top: ["56px",'64px', "64px", "64px"],
            top: ['64px'],
            height: "auto",
            bottom: 0,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        <Divider />
        <List>
          {LINKS.map(({ text, href, icon: Icon }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton component={Link} href={href}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: "auto" }} />
        <List>
          {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              ml: open?`${DRAWER_WIDTH}px`:'0px',
              mt: ["48px", "56px", "64px"],
              p: 3,
              transition:'margin-left 0.125s ease-in'
            }}
          >
            {children}
          </Box>
    </>
  );
}
