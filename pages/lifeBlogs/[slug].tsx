import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSingleBlog } from "../../components/Admin Panel Forms/AdminPanelLogic";
import AnimatedClippedText from "../../components/AnimatedClippedText";
import ClippedText from "../../components/ClippedText";
import Layout from "../../components/Layout";
import TrackingBlur from "../../components/TrackingBlur";
import { PostViewer } from "../../components/common/CommonComponents";
import styles from "../../styles/Home.module.css";
import { commonPostResType } from "../../types/CommonTypes";

const LifeView = () => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  const techQuery = useQuery({
    queryKey: ["blogs", slug],
    queryFn: ({ queryKey }) => getSingleBlog({ slug: queryKey[1] }).then((res) => res.data),
  });
  const { data, isLoading, error } = techQuery;

  if (error || (!data?.data && !isLoading)) {
    return (
      <>
        <Box>
          <Typography align="center">Sorry this page does not exist</Typography>
        </Box>
      </>
    );
  }
  const { data: actualData }: { data: commonPostResType } = !isLoading && data;
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Head>
            <title>HOPELOGUE - Blogs</title>
            <meta name="description" content="Blogs by Rishi Mathur" />
          </Head>
          <Box height={"100vh"}>
            <TrackingBlur />
            <Box textAlign={"center"} zIndex={2} position={"relative"}>
              <AnimatedClippedText
                fontSize="5rem"
                word="Life Update Blogs"
                imgSrc="/clipHero.jpg"
              />
              {isLoading ? (
                <Box mx={"auto"} textAlign={"center"}>
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  <ClippedText
                    word={`${actualData.title}`}
                    fontSize="3rem"
                    imgSrc="/carousel1_bkp.jpg"
                  />
                </>
              )}
              <Box mt="7rem">
                {isLoading ? <CircularProgress /> : <PostViewer data={actualData} />}
              </Box>
            </Box>
          </Box>
        </div>
      </Layout>
    </>
  );
};

export default LifeView;
