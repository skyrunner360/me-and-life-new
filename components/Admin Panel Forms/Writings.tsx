import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { CommonModal } from "../common/CommonComponents";
import { AddNewModalContent, PostCard } from "./AdminHelperComponents";
import { addWriting, changeWriting, deleteWriting, getWritings } from "./AdminPanelLogic";

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
  const [openAddNewModal, setOpenAddNewModal] = useState(false);
  const writingsQuery = useQuery({
    queryKey: ["writings"],
    queryFn: ({ queryKey }) => getWritings().then((res) => res.data),
  });
  const { data, isLoading, error } = writingsQuery;
  const editWritingMutation = useMutation({
    mutationFn: changeWriting,
    onSuccess: () => queryClient.invalidateQueries(["writings"]),
  });
  const addWritingMutation = useMutation({
    mutationFn: addWriting,
    onSuccess: () => queryClient.invalidateQueries(["writings"]),
  });
  const DeleteWriting = (slug: string) => {
    deleteWriting({ slug })
      .then((res) => {
        queryClient.invalidateQueries(["writings"]);
      })
      .catch((err) => console.log(`Error- ${err.message}`));
  };
  const editWritingFn = (mutateSlug: string, title: string, content: string, slug: string) => {
    editWritingMutation.mutate({
      slug: mutateSlug,
      data: {
        title,
        content,
        slug,
      },
    });
  };
  if (error) {
    return <pre>Something went Wrong {JSON.stringify(error)} </pre>;
  }
  if (isLoading) {
    return <CircularProgress />;
  }
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
                onEdit={(title: string, content: string, slug: string) =>
                  editWritingFn(elem.slug, title, content, slug)
                }
                onDelete={() => DeleteWriting(elem.slug)}
              />
            );
          })}
        </Box>
        <Box textAlign={"right"} p={1}>
          <Button onClick={() => setOpenAddNewModal(true)}>Add new</Button>
        </Box>
      </Box>
      <CommonModal open={openAddNewModal} onClose={() => setOpenAddNewModal(false)}>
        <AddNewModalContent
          onAdd={(title: string, content: string, slug: string) =>
            addWritingMutation.mutate({
              insert: { title, content, slug, author: "skyrunner", category: "writings" },
            })
          }
          closeModal={() => setOpenAddNewModal(false)}
        />
      </CommonModal>
    </>
  );
};
export default Writings;
