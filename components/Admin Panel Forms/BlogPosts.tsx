import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { CommonModal } from "../common/CommonComponents";
import { AddNewModalContent, PostCard } from "./AdminHelperComponents";
import { addBlog, changeBlog, deleteBlog, getBlogs } from "./AdminPanelLogic";

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
  const queryClient = useQueryClient();

  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: ({ queryKey }) => getBlogs().then((res) => res.data),
  });

  const [openAddNewModal, setOpenAddNewModal] = useState(false);

  const editBlogMutation = useMutation({
    mutationFn: changeBlog,
    onSuccess: () => queryClient.invalidateQueries(["blogs"]),
  });

  const addBlogMutation = useMutation({
    mutationFn: addBlog,
    onSuccess: () => queryClient.invalidateQueries(["blogs"]),
  });

  const editBlogFn = (findSlug: string, title: string, content: string, slug: string) => {
    editBlogMutation.mutate({
      slug: findSlug,
      data: {
        title,
        content,
        slug,
      },
    });
  };

  const deleteBlogFn = (slug: string) => {
    deleteBlog({ slug })
      .then((res) => {
        queryClient.invalidateQueries(["blogs"]);
      })
      .catch((err) => console.log(`Error- ${err.message}`));
  };

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
                onEdit={(title: string, content: string, slug: string) =>
                  editBlogFn(elem.slug, title, content, slug)
                }
                onDelete={() => deleteBlogFn(elem.slug)}
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
            addBlogMutation.mutate({
              insert: { title, content, slug, author: "skyrunner", category: "blog" },
            })
          }
          closeModal={() => setOpenAddNewModal(false)}
        />
      </CommonModal>
    </>
  );
};
export default BlogPosts;
