import { Box, Grid, Stack, Typography } from "@mui/material";
import Head from "next/head";
import AnimatedBlob from "../components/AnimatedBlob";
import AnimatedClippedText from "../components/AnimatedClippedText";
import AnimatedText from "../components/AnimatedText";
import SideHero from "../components/SideHero";
import SideNavBar from "../components/SideNavBar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import ClippedText from "../components/ClippedText";
import TrackingBlur from "../components/TrackingBlur";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <TrackingBlur />
        <Head>
          <title>Me and Life</title>
          <meta name="description" content="Welcome to Rishi's blog - ME AND LIFE" />
        </Head>
        <SideNavBar />
        <Box px={4} zIndex={2} position={"relative"}>
          <Box textAlign={"center"}>
            <AnimatedClippedText fontSize="5rem" word="Me and Life" imgSrc="/clipHero.jpg" />
          </Box>
          <Grid container>
            <Grid item sm={6} p={1} xs={12}>
              <Grid container height={"100%"}>
                <Grid item sm={4} xs={12} height={"50%"}>
                  <Box position={"relative"} sx={{ height: "100%", width: "100%" }}>
                    <Image src={"/ikbal 3.svg"} alt="Greet Avatar" fill />
                  </Box>
                </Grid>
                <Grid item sm={8} xs={12}>
                  <ClippedText
                    word="Welcome to My Blog!"
                    fontSize="2rem"
                    imgSrc="/carousel1_bkp.jpg"
                  />
                  <Box py={1}>
                    <Typography variant="h6" fontWeight={500}>
                      Hi! 👋 I&apos;m Rishi Mathur
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      Welcome to the small world of this Introvert. Here I&apos;ll be posting some
                      personal life updates, Some Tech Content and Some Original pieces of writing
                      or whatever comes to my mind.
                    </Typography>
                  </Box>
                  <Box py={1}>
                    <Typography>Feel free to explore this blog.</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} xs={12} p={2}>
              <Box position={"relative"} sx={{ height: "35rem", width: "35rem" }}>
                <Image src={"/Other 03.svg"} alt="Other Icon" fill />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
