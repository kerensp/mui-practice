import { Alert, AlertTitle, Box, Button, Collapse, Snackbar } from "@mui/material";
import { useState } from "react";

import InfoIcon from '@mui/icons-material/Info';



export default function Home () {

  const [open, setOpen] = useState(false)

  return(
    <>
      <h1>Home</h1>

      <Box sx={{ display: "grid", gap: "1rem" }}>
        
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — check it out!
        </Alert>
        
        <Alert severity="warning" 
        action={
          <>
            <Button color="inherit">Update</Button>
            <Button ton color="inherit">Delete</Button>
          </>
        }>
          This is a warning alert — check it out!
        </Alert>

        <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
          <Alert severity="info" icon={<InfoIcon />} variant="outlined" onClose={() => setOpen(false)}>
            This is an info alert — check it out!
          </Alert>
        </Snackbar>
        
        <Alert severity="success" variant="filled">
          This is a success alert — check it out!
        </Alert>

        <Button variant="contained" onClick={() => setOpen(true)}>
          Open
        </Button>

      </Box>

    </>
  );
}