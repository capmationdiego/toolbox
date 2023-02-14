import { Button, Typography, styled, Stack } from "@mui/material";
import React from "react";
import Settings from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {

    const BlueButton = styled(Button) ({

        backgroundColor:'skyblue',
        color:'#888',
        margin:5,
        "&:hover":{
            backgroundColor:"lightblue"
        },
        "&:disable":{
            backgroundColor:"gray",
            color:"white"
        }

    })

    return (
        // <Stack spacing={2} direction="row"></Stack>
        <div>
            <Button startIcon={<Settings />} color="secondary" variant="contained">Settings</Button>
            <Button startIcon={<AddIcon />} color="success" variant="contained">Add new Post</Button>
            <Button variant="contained" size="small">Contained</Button>
            <Button variant="outlined" size="small">Outlined</Button>
            <Typography variant="h1" component="h2">
                h1. Heading using typography abduzcan
            </Typography>

            {/* hardcoded form
                <Button variant="contained" sx={{
                backgroundColor: 'skyblue',
                color: '#888',
                margin: 5,
                "&:hover": {
                    backgroundColor: "lightblue"
                },
                "&:disable": {
                    backgroundColor: "gray",
                    color: "white"
                }
            }}>My unique Button</Button> */}

            <BlueButton>My unique Button</BlueButton>
            <BlueButton>Another Button</BlueButton>
        </div>

        // <Button />


    );
}
