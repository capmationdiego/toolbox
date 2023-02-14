import React from 'react'
import { Box, Stack } from '@mui/material'
import RefreshIcon from "@mui/icons-material/Refresh";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import * as XLSX from 'xlsx';

const Form = () => {
    return (
        <Stack flex={2} sx={{ backgroundColor: "red", padding: 2 }}>
            <div>
                <label htmlFor="camera-image">
                    <input
                        accept="file"
                        id="camera-image"
                        type="file"
                        capture="camera"
                        multiple="multiple"
                        style={{ display: "none" }}
                        onChange={readUploadFile}
                     
                    />
                    <Stack spacing={1} direction="row">
                       
                       <AddAPhotoIcon />
                    </Stack>
                </label>
            </div>
        </Stack>
    )

   
}

const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {


            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);
            console.log(json);

            // const datas = XLSX.read(data, { type: 'buffer' });
            // const finalObject = {};

            // datas.SheetNames.forEach(sheetName => {
            //     let rowObject = XLSX.utils.sheet_to_json(datas.Sheets[sheetName]);  
            //     finalObject[sheetName] = rowObject;
            //     console.log(rowObject)
            //   });

            //   datas.SheetNames.forEach(sheetName => {
            //     let rowObject = XLSX.utils.sheet_to_json(datas.Sheets[sheetName]); 
            //      finalObject[sheetName] = rowObject;
            //      console.log(finalObject)
            //   });
              
        };
        reader.readAsArrayBuffer(e.target.files[0]);

      
    }
}

export default Form