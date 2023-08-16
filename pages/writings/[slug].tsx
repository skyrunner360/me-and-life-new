import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { getWriting } from "../../components/Admin Panel Forms/AdminPanelLogic";
import AnimatedClippedText from "../../components/AnimatedClippedText";
import ClippedText from "../../components/ClippedText";
import Layout from "../../components/Layout";
import TrackingBlur from "../../components/TrackingBlur";
import { PostViewer } from "../../components/common/CommonComponents";
import styles from "../../styles/Home.module.css";
import { commonPostResType } from "../../types/CommonTypes";

const WritingsView = () => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  const writingsQuery = useQuery({
    queryKey: ["writings", slug],
    queryFn: ({ queryKey }) => getWriting({ slug: queryKey[1] }).then((res) => res.data),
  });
  const { data, isLoading, error } = writingsQuery;

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
          <TrackingBlur />
          <Head>
            <title>Me and Life - Writings</title>
            <meta name="description" content="Writings by Rishi Mathur" />
          </Head>
          <Box textAlign={"center"} zIndex={2} position={"relative"}>
            <AnimatedClippedText fontSize="5rem" word="Writings" imgSrc="/clipHero.jpg" />
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
        </div>
      </Layout>
    </>
  );
};

export default WritingsView;
