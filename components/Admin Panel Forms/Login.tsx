import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

interface LoginProps {
  setIsLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setIsLoggedin }: LoginProps) => {
  const [Password, setPassword] = useState("");
  const checkPassword = () => {
    if (!Password) return;
    Password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD && setIsLoggedin(true);
  };
  return (
    <>
      <Box sx={{ mx: "auto" }}>
        <form>
          <FormGroup>
            <TextField label="Enter Username" margin="normal" />
            <TextField
              label="Enter Password"
              value={Password}
              type="password"
              autoComplete="false"
              margin={"normal"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </form>
        <Box m={1}>
          <Button variant="contained" color="primary" onClick={checkPassword}>
            Sign in
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Login;
