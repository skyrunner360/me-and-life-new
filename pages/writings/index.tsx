import React from "react";
import Layout from "../../components/Layout";
import { Box, CircularProgress, Typography } from "@mui/material";
import Head from "next/head";
import AnimatedClippedText from "../../components/AnimatedClippedText";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWritings } from "../../components/Admin Panel Forms/AdminPanelLogic";
import CardsList from "../../components/CardsList";

const Writings = () => {
  const queryClient = useQueryClient();
  const writingsQuery = useQuery({
    queryKey: ["writings"],
    queryFn: ({ queryKey }) => getWritings().then((res) => res.data),
  });
  const { data, isLoading, error } = writingsQuery;
  return (
    <>
      <Head>
        <title>Me and Life - Writings</title>
        <meta name="description" content="Writings by Rishi Mathur" />
      </Head>
      <Layout>
        <Box>
          <Box textAlign={"center"}>
            <AnimatedClippedText fontSize="5rem" word="Writings" imgSrc="/clipHero.jpg" />
            <Box my={2}>
              <Typography variant="h5">These are all of my writings</Typography>
            </Box>
          </Box>
          <Box mt={"7rem"}>
            {isLoading ? (
              <Box mx={"auto"} textAlign={"center"}>
                <CircularProgress />
              </Box>
            ) : (
              <CardsList data={data?.data} />
            )}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Writings;
