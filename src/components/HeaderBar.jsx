import * as React from 'react';
import { styled} from '@mui/material/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import logooo from '../images/logooo.png'
import { Menu } from '@mui/icons-material';
import { useState, useEffect } from "react";
import Notes from './notes/Notes';


const Header = styled(AppBar)`
    z-index:1201;
    background: #fff;
    height: 70px;
    box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
    color: #5F6368;
    font-size: 24px;
    margin-left: 25px;
`

const SearchBar = styled(Typography)`        
    background: #FFFFFF;
    border: none;    
    color: #F0F0F0;
    font-size: 1.1rem;
    width: 40vw;
    margin: 5.5rem;    
`

const HeaderBar = ({ open, handleDrawer }) => {  

    return (
      <Header open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{marginRight:'20px'}}
          >
            <Menu />
                </IconButton>
                <img
                    src={logooo}
                    alt='logo'
                    style={{width: 45}}
                />
          <Heading>Notes</Heading>

          
          <SearchBar className="notes__header">
            
            <input 
                style={{width: '40vw', border: 'none', padding: '0.85rem 1rem', background: '#F0F0F0', borderRadius: "10px",  outline: 'none'}}
                type="Search"                
                placeholder="Search..."
                autoFocus                         
            />           
            
          </SearchBar> 
          </Toolbar>

      </Header>
    )
}

export default HeaderBar;