import React from 'react'
import { Box, Toolbar, AppBar, styled } from '@mui/material'

const StyledToolbar= styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});


const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
      Navbar

        
      </Toolbar>
      </AppBar>
  )
}

export default Navbar