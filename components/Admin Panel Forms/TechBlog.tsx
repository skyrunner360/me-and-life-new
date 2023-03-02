import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { CommonModal } from "../common/CommonComponents";
import { AddNewModalContent, PostCard } from "./AdminHelperComponents";
import { addTech, changeTech, deleteTech, getTechBlog } from "./AdminPanelLogic";

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
  const queryClient = useQueryClient();
  const techBlogQuery = useQuery({
    queryKey: ["techBlogs"],
    queryFn: ({ queryKey }) => getTechBlog().then((res) => res.data),
  });
  const { data, isLoading, error } = techBlogQuery;
  const [openAddNewModal, setOpenAddNewModal] = useState(false);
  const editTechMutation = useMutation({
    mutationFn: changeTech,
    onSuccess: () => queryClient.invalidateQueries(["techBlogs"]),
  });
  const addTechMutation = useMutation({
    mutationFn: addTech,
    onSuccess: () => queryClient.invalidateQueries(["techBlogs"]),
  });

  const editTechFn = (findSlug: string, title: string, content: string, slug: string) => {
    editTechMutation.mutate({
      slug: findSlug,
      data: {
        title,
        content,
        slug,
      },
    });
  };

  const deleteTechBlog = (slug: string) => {
    deleteTech({ slug })
      .then((res) => {
        queryClient.invalidateQueries(["techBlogs"]);
      })
      .catch((err) => console.log(`Error- ${err.message}`));
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
        <Typography variant="h2" p={1}>
          All Tech Blog posts{" "}
        </Typography>
        <Box maxHeight={"90vh"} overflow="auto">
          {data.data.map((elem: techBlogRes) => {
            return (
              <PostCard
                key={elem.slug}
                elem={elem}
                onEdit={(title: string, content: string, slug: string) =>
                  editTechFn(elem.slug, title, content, slug)
                }
                onDelete={() => deleteTechBlog(elem.slug)}
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
            addTechMutation.mutate({
              insert: { title, content, slug, author: "skyrunner", category: "tech" },
            })
          }
          closeModal={() => setOpenAddNewModal(false)}
        />
      </CommonModal>
    </>
  );
};
export default TechBlog;
