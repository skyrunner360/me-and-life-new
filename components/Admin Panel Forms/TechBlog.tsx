import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { getTechBlog } from "./AdminPanelLogic";

interface techBlogRes {
  _id: number;
  sno: number;
  title: string;
  content: string;
  category: string;
  author: string;
  slug: string;
  timeStamp: string;
  img: string;
  views: number;
}

const TechBlog = () => {
  const blogsQuery = useQuery({
    queryKey: ["techBlogs"],
    queryFn: ({ queryKey }) => getTechBlog().then((res) => res.data),
  });
  const { data, isLoading, error } = blogsQuery;
  if (error) {
    return <pre>Something went Wrong {JSON.stringify(error)} </pre>;
  }
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Box>
        <Typography variant="h2">All Blog posts </Typography>
        {data.data.map((elem: techBlogRes) => {
          return (
            <Box p={2} key={elem.slug} border="1px solid #296bd6">
              <Stack direction={"row"} alignItems="center" justifyContent={"center"}>
                <Button>Edit </Button>
              </Stack>
              <Box>
                <Typography variant="body1" color={"InfoText"}>
                  {elem.title}
                </Typography>
                <Typography variant="body2" color={"limegreen"}>
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
        })}
        <Box textAlign={"right"} p={1}>
          <Button>Add new</Button>
        </Box>
      </Box>
    </>
  );
};
export default TechBlog;
