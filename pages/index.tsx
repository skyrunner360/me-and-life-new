import Head from "next/head";
import styles from "../styles/Home.module.css";
import SideNavBar from "../components/SideNavBar";
import { Box, Typography } from "@mui/material";
import AnimatedText from "../components/AnimatedText";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me and Life</title>
        <meta name="description" content="Welcome to Rishi's blog - ME AND LIFE" />
      </Head>
      <SideNavBar />
      <Box ml={10}>
        <AnimatedText word="Test" />
      </Box>
    </div>
  );
}
