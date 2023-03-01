import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { PostCard } from "./AdminHelperComponents";
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
  const techBlogQuery = useQuery({
    queryKey: ["techBlogs"],
    queryFn: ({ queryKey }) => getTechBlog().then((res) => res.data),
  });
  const { data, isLoading, error } = techBlogQuery;
  if (error) {
    return <pre>Something went Wrong {JSON.stringify(error)} </pre>;
  }
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Box>
        <Typography variant="h2" p={1}>
          All Tech Blog posts{" "}
        </Typography>
        <Box maxHeight={"90vh"} overflow="auto">
          {data.data.map((elem: techBlogRes) => {
            return (
              <PostCard
                key={elem.slug}
                elem={elem}
                onEdit={() => console.log("Edit from TechBlog clicked")}
                onDelete={() => console.log("Delete from TechBlog clicked")}
              />
            );
          })}
        </Box>
        <Box textAlign={"right"} p={1}>
          <Button>Add new</Button>
        </Box>
      </Box>
    </>
  );
};
export default TechBlog;
