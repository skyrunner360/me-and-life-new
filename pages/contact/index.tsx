import React from "react";
import AboutCard from "../../components/AboutCard";
import Layout from "../../components/Layout";
import Head from "next/head";
import { Box } from "@mui/material";
import AnimatedClippedText from "../../components/AnimatedClippedText";

const index = () => {
  return (
    <>
      <Head>
        <title>Me and Life - Contact</title>
        <meta name="description" content="Contact Rishi Mathur" />
      </Head>
      <Layout>
        <Box textAlign={"center"}>
          <AnimatedClippedText fontSize="5rem" word="Contact Me" imgSrc="/clipHero.jpg" />
          <Box sx={{ mx: { xs: "4rem", sm: 0 } }}>
            <AboutCard />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default index;
