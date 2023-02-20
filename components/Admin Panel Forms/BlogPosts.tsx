import { Box, Button, Card, CardHeader, CircularProgress, Stack, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import moment from "moment";
import { getBlogs } from "./AdminPanelLogic";

interface blogPostsResponse {
  _id: number;
  sno: number;
  title: string;
  content: string;
  category: string;
  author: string;
  slug: string;
  timeStamp: string;
  img: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  views: number;
}
const BlogPosts = () => {
  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: ({ queryKey }) => getBlogs().then((res) => res.data),
  });
  const { data, isLoading, error } = blogsQuery;
  return (
    <>
      <Box>
        <Typography variant="h2">All Blog posts </Typography>
        <>{error && <pre>Something went Wrong {JSON.stringify(error)} </pre>}</>
        {isLoading ? (
          <CircularProgress />
        ) : (
          data.data.map((elem: blogPostsResponse) => {
            return (
              <Box p={2} key={elem.slug} border="1px solid #fff">
                <Stack direction={"row"} alignItems="center" justifyContent={"center"}>
                  <Button>Edit </Button>
                </Stack>
                <Box>
                  <Typography variant="body1" color={"InfoText"}>
                    {elem.title}
                  </Typography>
                  <Typography variant="body2" color={"aliceblue"}>
                    {elem.slug}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color={"GrayText"}>
                    on: {moment(elem.timeStamp).format("MMMM Do YYYY, h:mm:ss a")}
                  </Typography>
                </Box>
              </Box>
            );
          })
        )}
      </Box>
    </>
  );
};
export default BlogPosts;
