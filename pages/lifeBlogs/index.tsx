import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { getBlogs, getTechBlog } from "../../components/Admin Panel Forms/AdminPanelLogic";
import AnimatedClippedText from "../../components/AnimatedClippedText";
import CardsList from "../../components/CardsList";
import Layout from "../../components/Layout";

const LifeBlogs = () => {
  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: ({ queryKey }) => getBlogs().then((res) => res.data),
  });
  const { data, isLoading, error } = blogsQuery;
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
        <title>HOPELOGUE - Life Update Blogs</title>
        <meta name="description" content="Life Update Blogs of Rishi Mathur" />
      </Head>
      <Layout>
        <Box>
          <Box textAlign={"center"}>
            <AnimatedClippedText fontSize="5rem" word="Life Update Blogs" imgSrc="/clipHero.jpg" />
            <Box mt={4}>
              <Typography variant="h5">These are all of my life update Blogs</Typography>
            </Box>
          </Box>
          <Box mt={"7rem"}>
            {isLoading && (
              <Box mx={"auto"} textAlign={"center"}>
                <CircularProgress />
              </Box>
            )}
            {!isLoading && <CardsList data={data?.data} basePath="lifeBlogs" />}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default LifeBlogs;
