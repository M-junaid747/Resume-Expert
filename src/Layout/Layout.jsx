import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '../Component/Appbar';

const collapsedWidth = 60;
const expandedWidth = 150;

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300 } },
};

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar />
      {/* <Drawer
        variant="permanent"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        sx={{
          width: open ? expandedWidth : collapsedWidth,
          flexShrink: 0,
          transition: 'width 0.3s ease',
          '& .MuiDrawer-paper': {
            width: open ? expandedWidth : collapsedWidth,
            boxSizing: 'border-box',
            backgroundColor: '#07bbe8',
            color: '#fff',
            transition: 'width 0.3s ease',
          },
        }}
      >
        <Box sx={{ py: 2, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            {open ? 'App' : 'A'}
          </Typography>
        </Box>
        <List>
          {[{ text: 'Home', icon: <DashboardIcon />, path: '/home' },
            { text: 'Users', icon: <PeopleIcon />, path: '/user' },
            { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
            { text: 'Logout', icon: <LogoutIcon />, path: '/logout' }].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <ListItem
                button
                component={Link}
                to={item.path}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#fff',
                  paddingLeft: open ? 2 : 1,
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: '#fff' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Drawer> */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#f0f2f5',
          minHeight: '100vh',
          marginLeft: `${open ? expandedWidth - 100 : collapsedWidth - 20}px`,
          transition: 'margin-left 0.3s ease',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
