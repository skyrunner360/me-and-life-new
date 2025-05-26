import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedClippedText from "../components/AnimatedClippedText";
import ClippedText from "../components/ClippedText";
import Layout from "../components/Layout";
import TrackingBlur from "../components/TrackingBlur";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <TrackingBlur />
          <Head>
            <title>HOPELOGUE</title>
            <meta name="description" content="Welcome to Rishi's blog - HOPELOGUE" />
          </Head>
          <Box px={4} zIndex={2} position={"relative"}>
            <Box textAlign={"center"}>
              <AnimatedClippedText fontSize="5rem" word="HOPELOGUE" imgSrc="/clipHero.jpg" />
            </Box>
            <Grid container>
              <Grid item sm={6} pt={"7rem"} xs={12}>
                <Grid container>
                  <Grid item sm={5} xs={12} height={"90%"}>
                    <Box
                      position={"relative"}
                      className={styles.floatAnimation}
                      sx={{ height: "30rem", width: "100%" }}
                    >
                      <Image src={"/Ikbal 3.svg"} alt="Greet Avatar" fill />
                    </Box>
                  </Grid>
                  <Grid item sm={7} xs={12}>
                    <ClippedText
                      word="Welcome to My Blog!"
                      fontSize="3rem"
                      imgSrc="/carousel1_bkp.jpg"
                    />
                    <Box py={1}>
                      <Typography variant="h6" fontWeight={500}>
                        Hi! 👋 I&apos;m Rishi
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        Welcome to the small world of this Introvert. The Hopelogue, here I&apos;ll
                        be posting some personal life updates, Some Tech Content and Some Original
                        pieces of writing or whatever comes to my mind.
                      </Typography>
                    </Box>
                    <Box py={1}>
                      <Typography>Feel free to explore this blog.</Typography>
                    </Box>
                    <Box py={4}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Link href={"/techBlogs"} className={styles.neonButton}>
                          Tech Blogs
                        </Link>
                        <Link href={"/writings"} className={styles.neonButton}>
                          Writings
                        </Link>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={6} xs={12} p={2}>
                <Box
                  position={"relative"}
                  sx={{
                    height: { sm: "35rem", xs: "15rem" },
                    width: { sm: "35rem", xs: "15rem" },
                    mx: { xs: "auto" },
                  }}
                >
                  <Image src={"/Other 03.svg"} alt="Other Icon" fill />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Layout>
    </>
  );
}
