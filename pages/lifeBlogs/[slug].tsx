import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSingleBlog } from "../../components/Admin Panel Forms/AdminPanelLogic";
import AnimatedClippedText from "../../components/AnimatedClippedText";
import ClippedText from "../../components/ClippedText";
import Layout from "../../components/Layout";
import TrackingBlur from "../../components/TrackingBlur";
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

  if (error || !data?.data) {
    return (
      <>
        <Box>
          <Typography align="center">Sorry this page does not exist</Typography>
        </Box>
      </>
    );
  }
  const { data: actualData }: { data: commonPostResType } = data;
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <TrackingBlur />
          <Head>
            <title>Me and Life - Blogs</title>
            <meta name="description" content="Blogs by Rishi Mathur" />
          </Head>
          <Box textAlign={"center"} zIndex={2} position={"relative"}>
            <AnimatedClippedText fontSize="5rem" word="Life Update Blogs" imgSrc="/clipHero.jpg" />
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
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Grid container sx={{ minHeight: 300 }}>
                  <Grid item sm={1} position={"relative"} xs={12} height={"100%"}>
                    <Box>
                      <Typography variant="h3">
                        {moment(actualData.timeStamp).format("MMM Do YY")}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        transform: "rotate(-90deg)",
                        position: "absolute",
                        bottom: "-50%",
                      }}
                    >
                      <Typography>By - {actualData.author}</Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={10} xs={12}>
                    {actualData.isNew ? (
                      actualData.content
                        .toString()
                        .split("\n")
                        .filter((t) => t)
                        .map((v: string) => (
                          <p key={v} style={{ wordWrap: "break-word" }}>
                            {v}
                          </p>
                        ))
                    ) : (
                      <pre style={{ fontFamily: "inherit", wordWrap: "break-word" }}>
                        {actualData.content}
                      </pre>
                    )}
                  </Grid>
                </Grid>
              )}
            </Box>
          </Box>
        </div>
      </Layout>
    </>
  );
};

export default LifeView;
