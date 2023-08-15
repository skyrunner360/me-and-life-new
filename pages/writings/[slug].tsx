import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { Box, CircularProgress, Container, Grid, Stack, Typography } from "@mui/material";
import Head from "next/head";
import AnimatedClippedText from "../../components/AnimatedClippedText";
import ClippedText from "../../components/ClippedText";
import { useQuery } from "@tanstack/react-query";
import { getWriting } from "../../components/Admin Panel Forms/AdminPanelLogic";
import { commonPostResType } from "../../types/CommonTypes";
import TrackingBlur from "../../components/TrackingBlur";
import styles from "../../styles/Home.module.css";
import moment from "moment";

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
                        .map((v: string) => <p key={v}>{v}</p>)
                    ) : (
                      <pre style={{ fontFamily: "inherit" }}>{actualData.content}</pre>
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

export default WritingsView;
