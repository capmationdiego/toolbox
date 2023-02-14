import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import { Stack, Box } from "@mui/material";
import Form from "@components/Form";



export default function Inicio() {


    return (
       
        <Box>
            <Navbar/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
                


            </Stack>
            <Stack spacing={2}>
            <Form/>
            </Stack>
            
        </Box>

        // <Button />


    );
}
