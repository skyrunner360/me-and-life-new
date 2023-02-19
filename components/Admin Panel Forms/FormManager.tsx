import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { ActivePanelMap } from "./AdminPanelLogic";
import Login from "./Login";

const FormManager = () => {
  const [activePanel, setActivePanel] = useState("blog");
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <>
      <Box p={1}>
        {isLoggedin && (
          <Stack direction={"row"} gap={1} alignItems="center" justifyContent={"center"}>
            <Button variant="outlined" onClick={() => setActivePanel("blog")}>
              Go to Blogs
            </Button>
            <Button variant="outlined" onClick={() => setActivePanel("tech")}>
              Go to Tech
            </Button>
            <Button variant="outlined" onClick={() => setActivePanel("writing")}>
              Go to Writings
            </Button>
          </Stack>
        )}
        {!isLoggedin ? (
          <Login setIsLoggedin={setIsLoggedin} />
        ) : (
          (ActivePanelMap as any)[activePanel]
        )}
      </Box>
    </>
  );
};
export default FormManager;
