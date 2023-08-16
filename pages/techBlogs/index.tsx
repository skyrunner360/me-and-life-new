import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { getTechBlog } from "../../components/Admin Panel Forms/AdminPanelLogic";
import AnimatedClippedText from "../../components/AnimatedClippedText";
import CardsList from "../../components/CardsList";
import Layout from "../../components/Layout";

const TechBlogs = () => {
  const techBlogQuery = useQuery({
    queryKey: ["techBlogs"],
    queryFn: ({ queryKey }) => getTechBlog().then((res) => res.data),
  });
  const { data, isLoading, error } = techBlogQuery;
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
        <title>HOPELOGUE - Tech Blogs</title>
        <meta name="description" content="Technology Blogs by Rishi Mathur" />
      </Head>
      <Layout>
        <Box>
          <Box textAlign={"center"}>
            <AnimatedClippedText fontSize="5rem" word="Technology Blogs" imgSrc="/clipHero.jpg" />
            <Box mt={4}>
              <Typography variant="h5">These are all of my Technology Blogs</Typography>
            </Box>
          </Box>
          <Box mt={"7rem"}>
            {isLoading && (
              <Box mx={"auto"} textAlign={"center"}>
                <CircularProgress />
              </Box>
            )}
            {!isLoading && <CardsList data={data?.data} basePath="techBlogs" />}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default TechBlogs;
