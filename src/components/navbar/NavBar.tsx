import { Container } from '@mui/material'
import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import "./NavBar.css"
const NavBar = ({clicked, setClicked} : {clicked: boolean, setClicked: Function}) => {
  return (
    <div className={clicked ? "navbarLight" : "navbarDark"}>
        <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, color: "black"}}>
            <h1>‎ </h1>
            <div>
                <ul className={ clicked ? 'navbar__links__light' : 'navbar__links__dark'}>
                <li className='navbar__link'><HomeIcon fontSize='small'/> Home</li>
                <li className='navbar__link'><ContentCopyIcon fontSize='small' /> Skills</li>
                <li className='navbar__link'><BadgeIcon fontSize="small" /> Experience</li>
                <li className='navbar__link'><SchoolIcon fontSize="small" /> Education</li>
                <li className='navbar__link'><ContactMailIcon fontSize="small" /> Portfolio</li>
                { clicked? <Brightness7Icon onClick={() => setClicked(!clicked)} sx={{color: clicked ? "white" : "black"}}/> : <Brightness5Icon onClick={() => setClicked(!clicked)}/>}

                </ul>
            </div>
        </Container>
    </div>
  )
}

export default NavBar