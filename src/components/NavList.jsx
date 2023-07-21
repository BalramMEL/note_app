import * as React from 'react';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import {Link } from 'react-router-dom'

const NavList = () => {

    const navList = [
        {id: 1, name: 'Notes', icons: <NoteAltOutlinedIcon/>, route: '/'},
        {id: 2, name: 'Archive', icons: <ArchiveOutlinedIcon />, route: '/archives'},
        {id: 3, name: 'Trash', icons: <DeleteOutlineOutlinedIcon />, route: '/delete'}
    ]

    return (
        <List>
            {
              navList.map(list => (
                  <ListItem key={list.id} >
                  <Link to={list.route} style={{textDecoration: 'none', display: 'flex', color:'inherit'}}>
                    <ListItemIcon style={{alignItems:'center'}}>
                      {list.icons}
                    </ListItemIcon>
                    <ListItemText primary={list.name} />
                  </Link>
                
            </ListItem>
          ))}
        </List>
    )
}

export default NavList;