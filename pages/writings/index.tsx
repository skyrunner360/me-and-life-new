import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { getWritings } from "../../components/Admin Panel Forms/AdminPanelLogic";
import AnimatedClippedText from "../../components/AnimatedClippedText";
import CardsList from "../../components/CardsList";
import Layout from "../../components/Layout";

const Writings = () => {
  const writingsQuery = useQuery({
    queryKey: ["writings"],
    queryFn: ({ queryKey }) => getWritings().then((res) => res.data),
  });
  const { data, isLoading, error } = writingsQuery;
  if (error) {
    return (
      <Box>
        <Typography>Sorry!! Something went wrong</Typography>
      </Box>
    );
  }
  return (
    <>
      <Head>
        <title>HOPELOGUE - Writings</title>
        <meta name="description" content="Writings by Rishi Mathur" />
      </Head>
      <Layout>
        <Box>
          <Box textAlign={"center"}>
            <AnimatedClippedText fontSize="5rem" word="Writings" imgSrc="/clipHero.jpg" />
            <Box mt={4}>
              <Typography variant="h5">These are all of my writings</Typography>
            </Box>
          </Box>
          <Box mt={"7rem"}>
            {isLoading && (
              <Box mx={"auto"} textAlign={"center"}>
                <CircularProgress />
              </Box>
            )}
            {!isLoading && <CardsList data={data?.data} basePath="writings" />}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Writings;
