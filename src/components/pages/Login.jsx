import { Button } from "@mui/material";
import { useSnackbar } from "notistack";



export default function Login () {

  const {enqueueSnackbar} = useSnackbar()

  const handleClic = () => {
    enqueueSnackbar("Subscribete a mi canal", {variant: "success", anchorOrigin: {vertical: "bottom", horizontal: "right"}});
  };

  return(
    <>
      <h1>Login</h1>
      <Button variant="contained" onClick={handleClic}>
        Open
      </Button>
    </>
  );
}