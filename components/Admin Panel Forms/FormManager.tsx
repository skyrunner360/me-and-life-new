import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { ActivePanelMap } from "./AdminPanelLogic";
import Login from "./Login";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import LaptopIcon from "@mui/icons-material/Laptop";
import ArticleIcon from "@mui/icons-material/Article";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

const FormManager = () => {
  const [activePanel, setActivePanel] = useState("blog");
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <>
      <Box p={1}>
        <Stack direction={"row"} gap={1} p={2} alignItems={"center"} justifyContent={"left"}>
          <Link href={"/"}>
            <Button startIcon={<HomeIcon />} variant="contained" color="info">
              Go Home
            </Button>
          </Link>
          <Link href={"/lifeBlogs"}>
            <Button startIcon={<LocalActivityIcon />} variant="contained" color="info">
              To Blogs
            </Button>
          </Link>
          <Link href={"/techBlogs"}>
            <Button startIcon={<LaptopIcon />} variant="contained" color="info">
              To Tech
            </Button>
          </Link>
          <Link href={"/writings"}>
            <Button startIcon={<ArticleIcon />} variant="contained" color="info">
              To Writings
            </Button>
          </Link>
        </Stack>
        {isLoggedin && (
          <Stack direction={"row"} gap={1} alignItems="center" justifyContent={"center"}>
            <Button variant="outlined" color="info" onClick={() => setActivePanel("blog")}>
              Go to Blogs
            </Button>
            <Button variant="outlined" color="info" onClick={() => setActivePanel("tech")}>
              Go to Tech
            </Button>
            <Button variant="outlined" color="info" onClick={() => setActivePanel("writing")}>
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
