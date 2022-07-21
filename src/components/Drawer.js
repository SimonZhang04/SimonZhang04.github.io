import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const ids = ['#about', '#experience', '#projects']

  const list = (anchor) => (
    <Box
      sx={{   
        display: 'flex',
        justifyContent: 'center',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About', 'Experience', 'Projects'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton href={ids[index]}>
              <ListItemText 
                primary = {text} 
                disableTypography = {true}
                sx={{
                    fontFamily: 'PT Sans Narrow',
                    fontWeight: 'bold',
                    fontSize: '2em',
                    color: '#323B3C',
                    textAlign: 'center'
                }}
               />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'top'}>
          <Button onClick={toggleDrawer('top', true)} sx={{position:'fixed'}}>
            <img className='menu-icon' src={require('./images/menu.png')} alt="menu"/>
          </Button>
          <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
          >
            {list('top')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
