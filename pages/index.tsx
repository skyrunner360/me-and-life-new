import { Box, Grid } from "@mui/material";
import Head from "next/head";
import SideHero from "../components/SideHero";
import SideNavBar from "../components/SideNavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
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
            <SideHero />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
