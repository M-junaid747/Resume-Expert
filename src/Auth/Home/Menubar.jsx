import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material'; // Import Close Icon

export default function TemporaryDrawer({ open, setOpen }) {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Prevent closing when clicking outside (Remove onClose)
  const handleClose = () => {
    setOpen(false);  // Close the drawer when close icon is clicked
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" bgcolor={"fade"}>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(false)}>
            {/* You can keep the Menu icon for opening */}
            {/* <Menu /> */}
          </IconButton>
        </Typography>
        {/* Close Button */}
        <IconButton
          color="inherit"
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <Close /> {/* Close Icon */}
        </IconButton>
      </Box>

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      open={open}
      onClose={() => {}}  // Do not close when clicking outside
      BackdropProps={{
        invisible: true,  // Removes the shadow overlay
      }}
      sx={{
        '& .MuiDrawer-paper': {
          // marginTop: '64px', // Adjust based on the height of your AppBar
          // height: 'calc(100% - 64px)', // Ensure the drawer height fits under the AppBar
          width: 250,
          bgcolor: '#fff', // Optional: Adjust width as needed
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
