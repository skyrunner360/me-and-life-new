import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PostCard } from "./AdminHelperComponents";
import { deleteWriting, getWritings } from "./AdminPanelLogic";

interface writingsRes {
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

const Writings = () => {
  const queryClient = useQueryClient();
  const blogsQuery = useQuery({
    queryKey: ["writings"],
    queryFn: ({ queryKey }) => getWritings().then((res) => res.data),
  });
  const { data, isLoading, error } = blogsQuery;
  if (error) {
    return <pre>Something went Wrong {JSON.stringify(error)} </pre>;
  }
  if (isLoading) {
    return <CircularProgress />;
  }
  const DeleteWriting = (slug: string) => {
    deleteWriting({ slug })
      .then((res) => {
        queryClient.invalidateQueries(["writings"]);
      })
      .catch((err) => console.log(`Error- ${err.message}`));
  };
  return (
    <>
      <Box>
        <Typography variant="h2">All Writings </Typography>
        <Box maxHeight={"90vh"} overflow="auto">
          {data.data.map((elem: writingsRes) => {
            return (
              <PostCard
                key={elem.slug}
                elem={elem}
                onEdit={() => console.log("Edit from Writings clicked")}
                onDelete={() => DeleteWriting(elem.slug)}
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
export default Writings;
