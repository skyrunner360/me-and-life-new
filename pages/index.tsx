import { Box, Grid } from "@mui/material";
import Head from "next/head";
import AnimatedBlob from "../components/AnimatedBlob";
import AnimatedClippedText from "../components/AnimatedClippedText";
import AnimatedText from "../components/AnimatedText";
import SideHero from "../components/SideHero";
import SideNavBar from "../components/SideNavBar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me and Life</title>
        <meta name="description" content="Welcome to Rishi's blog - ME AND LIFE" />
      </Head>
      <SideNavBar />
      <Box px={4}>
        <Box textAlign={"center"}>
          <AnimatedClippedText fontSize="5rem" word="Welcome to my Blog" imgSrc="clipHero.jpg" />
        </Box>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Grid container>
              <Grid item sm={5}>
                <Box>
                  <Box className={styles.heroImg}></Box>
                </Box>
              </Grid>
              <Grid item sm={7} p={1}>
                <AnimatedText word="Hi I'm Rishi Mathur" component={"h1"} />
                <Box></Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <SideHero />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
