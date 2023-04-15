import Head from "next/head";
import styles from "../styles/Home.module.css";
import SideNavBar from "../components/SideNavBar";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import AnimatedText from "../components/AnimatedText";
import Carousel from "../components/Carousel/Carousel";

export default function Home() {
  const carouselImages = [{ src: "menuIcon.jpg" }, { src: "mountains.svg" }];
  return (
    <div className={styles.container}>
      <Head>
        <title>Me and Life</title>
        <meta name="description" content="Welcome to Rishi's blog - ME AND LIFE" />
      </Head>
      <SideNavBar />
      <Box px={4}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            for card
          </Grid>
          <Grid item sm={6} xs={12}>
            <Carousel>
              {carouselImages.map((el) => {
                return (
                  <Avatar src={el.src} variant="square" sx={{ height: "100%", width: "100%" }} />
                );
              })}
            </Carousel>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
