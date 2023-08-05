import React from "react";
import Layout from "../../components/Layout";
import Box from "@mui/material/Box";
import ClippedText from "../../components/ClippedText";
import Head from "next/head";

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
            <ClippedText word="test" fontSize="5rem" imgSrc="/carousel1_bkp.jpg" />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default index;
