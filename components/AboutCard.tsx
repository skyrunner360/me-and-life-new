import React, { useEffect } from "react";
import styles from "../styles/AboutCard.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

const AboutCard = () => {
  const rotateElement = (event: MouseEvent, element: HTMLElement | null) => {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    // find the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // get offset from middle as a percentage
    // and tone it down a little
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

    // set rotation
    element?.style?.setProperty("--rotateX", offsetX + "deg");
    element?.style?.setProperty("--rotateY", -1 * offsetY + "deg");
  };
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };
  useEffect(() => {
    !isTouchDevice() &&
      window?.document?.addEventListener("mousemove", (e) => {
        const pre = window.document.getElementById("aboutContainer");
        rotateElement(e, pre);
      });
    return () => {
      window?.document?.removeEventListener("mousemove", (e) => {
        const pre = window.document.getElementById("aboutContainer");
        rotateElement(e, pre);
      });
    };
  }, []);
  return (
    <div className={styles.container} id="aboutContainer">
      <div className={styles.card} tabIndex={0}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Box>
              <Typography variant="h4" fontWeight={500}>
                Hi!👋 Stranger.
              </Typography>
              <Typography my={2}>You can find me on these socials.</Typography>
              <Stack alignItems={"center"} justifyContent={"flex-start"}>
                <Link href={"https://instagram.com/skyrunner360"} target="_blank">
                  <Button
                    size="small"
                    sx={{ textTransform: "none" }}
                    startIcon={<InstagramIcon fontSize="large" />}
                    color="info"
                  >
                    @skyrunner360
                  </Button>
                </Link>
                <Link href={"https://www.linkedin.com/in/skyrunner360"} target="_blank">
                  <Button
                    size="small"
                    sx={{ textTransform: "none" }}
                    startIcon={<LinkedInIcon fontSize="large" />}
                    color="info"
                  >
                    skyrunner360
                  </Button>
                </Link>
                <Link href={"https://github.com/skyrunner360"} target="_blank">
                  <Button
                    size="small"
                    sx={{ textTransform: "none" }}
                    startIcon={<GitHubIcon fontSize="large" />}
                    color="info"
                  >
                    @skyrunner360
                  </Button>
                </Link>

                <Link href={"https://twitter.com/Skyrunner360"} target="_blank">
                  <Button
                    size="small"
                    sx={{ textTransform: "none" }}
                    startIcon={<TwitterIcon fontSize="large" />}
                    color="info"
                  >
                    @Skyrunner360
                  </Button>
                </Link>
                <Link
                  href={"https://www.youtube.com/channel/UCCPZDCXDNY2tvec9xb6Ce9A"}
                  target="_blank"
                >
                  <Button
                    size="small"
                    sx={{ textTransform: "none" }}
                    startIcon={<YouTubeIcon fontSize="large" />}
                    color="info"
                  >
                    @skyrunner360
                  </Button>
                </Link>
                <Link href={"mailto:mathurrishi31@gmail.com"} target="_blank">
                  <Button
                    size="small"
                    sx={{ textTransform: "none" }}
                    startIcon={<EmailIcon fontSize="large" />}
                    color="info"
                  >
                    Email
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box
              sx={{
                display: { xs: "flex", sm: "inherit" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                position={"relative"}
                sx={{ height: { sm: "25rem", xs: "15rem" }, width: { sm: "35rem", xs: "15rem" } }}
              >
                <Image src={"/Other 02.svg"} alt="Other Icon" fill />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutCard;
