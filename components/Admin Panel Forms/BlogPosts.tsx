import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { PostCard } from "./AdminHelperComponents";
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
          All Blog posts{" "}
        </Typography>
        <Box maxHeight={"90vh"} overflow="auto">
          {data.data.map((elem: blogPostsResponse) => {
            return (
              <PostCard
                key={elem.slug}
                elem={elem}
                onEdit={() => console.log("Edit from Blogpost clicked")}
                onDelete={() => console.log("Delete from Blog clicked")}
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
export default BlogPosts;
