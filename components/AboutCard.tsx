import React, { useEffect } from "react";
import styles from "../styles/AboutCard.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";

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
  useEffect(() => {
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
              <Typography mt={2}>You can find me on these socials.</Typography>
              <Link href={"#"}>
                <Button
                  size="small"
                  sx={{ textTransform: "none" }}
                  startIcon={<InstagramIcon fontSize="large" />}
                  color="info"
                >
                  @skyrunner360
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box
              position={"relative"}
              sx={{ height: { sm: "35rem", xs: "15rem" }, width: { sm: "35rem", xs: "15rem" } }}
            >
              <Image src={"/Other 02.svg"} alt="Other Icon" fill />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutCard;
