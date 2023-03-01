import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { MouseEventHandler, useState } from "react";
import { CommonModal, MessagesModal } from "../common/CommonComponents";
interface commonPostRes {
  _id: number;
  sno: number;
  title: string;
  content: string;
  category: string;
  author: string;
  slug: string;
  timeStamp: string;
  img?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  img6?: string;
  views: number;
}
interface postCardProps {
  elem: commonPostRes;
  onEdit: MouseEventHandler<HTMLButtonElement>;
  onDelete: MouseEventHandler;
}

export const PostCard = ({ elem, onEdit, onDelete }: postCardProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <>
      <Box p={2} key={elem.slug} border="1px solid #296bd6">
        <Stack direction={"row"} alignItems="center" justifyContent={"center"}>
          <Button onClick={() => setOpenEdit(true)}>Edit </Button>
          <Button onClick={() => setOpenDeleteModal(true)}>Delete</Button>
        </Stack>
        <Box>
          <Typography variant="body1" color={"primary"}>
            {elem.title}
          </Typography>
          <Typography variant="body2" color={"muted"}>
            {elem.slug}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" color={"GrayText"}>
            on: {moment(elem.timeStamp).format("MMMM Do YYYY, h:mm:ss a")}
          </Typography>
        </Box>
      </Box>
      <MessagesModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        title={"Are you Sure?"}
        msg={"This will permanently delete the post"}
        onConfirmClick={onDelete}
      />
      <CommonModal open={openEdit} onClose={() => setOpenEdit(false)}>
        <EditModalContents elem={elem} />
      </CommonModal>
    </>
  );
};

interface EditModalContentProps {
  elem: commonPostRes;
}

const EditModalContents = ({ elem }: EditModalContentProps) => {
  const [titleVal, setTitleVal] = useState(elem?.title || "");
  return (
    <Box p={1}>
      <Box>
        <TextField
          label="Title"
          placeholder="Any Title"
          value={titleVal}
          onChange={(e) => setTitleVal(e.target.value)}
        />
      </Box>
    </Box>
  );
};
