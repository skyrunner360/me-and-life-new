import React from "react";
import Layout from "../../components/Layout";
import Box from "@mui/material/Box";
import ClippedText from "../../components/ClippedText";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import homeStyles from "../../styles/Home.module.css";
import { Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <Head>
        <title>Me and Life - About</title>
        <meta name="description" content="About Rishi Mathur" />
      </Head>
      <Layout>
        <Box>
          <Box textAlign={"center"}>
            <ClippedText word="About Rishi" fontSize="5rem" imgSrc="/carousel1_bkp.jpg" />
          </Box>
          <Grid container mt={"7rem"}>
            <Grid item sm={6} xs={12}>
              <Box px={2}>
                <Box textAlign={"center"}>
                  <Typography variant="h5" fontWeight={600}>
                    Hey! Stranger 🙋‍♂️, I see you&apos;re curious about me.
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography>
                    So my name is <b>Rishi Mathur</b> and Professionally I&apos;m a{" "}
                    <i>Front-End Web Developer</i>, primarily working with <i>React.Js</i> and
                    I&apos;m currently learning <i>Next.Js</i> along with some Back-End also.
                  </Typography>
                  <Typography>
                    I initially created this blog on <i>python (Django)</i> to learn django
                    framework and started writing blogs there. This is the new revamped version of
                    the same after I learned React.Js on my web development journey to showcase and
                    keep on improving my skills.
                  </Typography>
                  <Typography mt={1}>
                    Now, Personally I have an <i>INFP-T</i> Personality, which tells you more about
                    me than me describing myself. I started posting mostly random and unrelated
                    writings on this blog initially but now gradually it has become a medium to dump
                    my feelings in the form of writings and blogs which anybody can read.
                  </Typography>
                  <Typography mt={1}>
                    I really love <i>Gaming</i> and watching <i>Anime</i> which I tried my best to
                    show in the design of this blog. You see that top right icon on the sidebar is
                    of <i>Skyrim</i>, one of my all time favorite RPG games. For me Gaming is an
                    Escape from Reality, my happy place where unimaginable feats are possible, where
                    the story is filled with soo many emotions and experiences to learn from.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box mx={"12rem"}>
                <div className={homeStyles.heroImg} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default index;
