import * as React from 'react';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {ThemeContext} from './changeTheme.js';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppleIcon from '@mui/icons-material/Apple';
import { GoogleLogin } from '@react-oauth/google';

export default function ButtonAppBar() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  
  return (
    <div className='navBar' style={{backgroundColor: theme.backgroundColor,color:theme.color,borderColor:theme.borderColor}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit">
            <AppleIcon fontSize ='large'/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontFamily: 'VT323',fontSize:'3vw'}} className='head'>
            Gensokyo's Bad Apples
          </Typography>

          <div className='button' style={{borderColor:theme.borderColor}}><Button className='' color="inherit"><Link to={``} >Home</Link></Button></div>
          <div className='button' style={{borderColor:theme.borderColor}}><Button className='' color="inherit"><Link to={`addNewPlayers`}>Add Player</Link></Button></div>
          <div className='button' style={{borderColor:theme.borderColor}}><Button className='' color="inherit"><Link to={`Contacts`}>Contact Detail</Link></Button></div>
          <div className='button' style={{borderColor:theme.borderColor}}><Button className='' color="inherit"><Link to={`signInGoogle`}>Sign In With Google</Link></Button></div>
          <div className='button' style={{borderColor:theme.borderColor}}><Button  color="inherit"><a href='#' onClick={toggle}
                                     style={{transition: theme.transition,
                                            color: theme.color,
                                            outline: 'none'
                                     }} data-testid="toggle-theme-btn">
                                      {!dark ? 'Dark' : 'Light'} Mode
          </a></Button></div>
        </Toolbar>
    </div>
  );
}
