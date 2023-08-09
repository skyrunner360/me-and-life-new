import { TextareaAutosize, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { MouseEventHandler, useState } from "react";
import { CommonModal, MessagesModal } from "../common/CommonComponents";
import { commonPostResType } from "../../types/CommonTypes";

interface postCardProps {
  elem: commonPostResType;
  onEdit: Function;
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
        <EditModalContents elem={elem} onEdit={onEdit} closeModal={() => setOpenEdit(false)} />
      </CommonModal>
    </>
  );
};

interface EditModalContentProps {
  elem: commonPostResType;
  onEdit: Function;
  closeModal: Function;
}

const EditModalContents = ({ elem, onEdit, closeModal }: EditModalContentProps) => {
  const [titleVal, setTitleVal] = useState(elem.title);
  const [contentVal, setContentVal] = useState(elem.content);
  const [slugVal, setSlugVal] = useState(elem.slug);
  return (
    <Box p={1}>
      <Stack textAlign={"center"} gap={2}>
        <TextField
          fullWidth
          label="Title"
          placeholder="Any Title"
          value={titleVal}
          onChange={(e) => setTitleVal(e.target.value)}
        />
        <TextField
          multiline
          rows={5}
          label="Content"
          placeholder="Content of the Post"
          value={contentVal}
          onChange={(e) => setContentVal(e.target.value)}
        />
        <TextField
          label="Slug"
          placeholder="Must be Unique hyphen separated"
          value={slugVal}
          onChange={(e) => setSlugVal(e.target.value)}
        />
      </Stack>
      <Box textAlign={"center"} p={2}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            onEdit(titleVal, contentVal, slugVal);
            closeModal();
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};
interface AddNewModalContentProps {
  onAdd: Function;
  closeModal: Function;
}
export const AddNewModalContent = ({ onAdd, closeModal }: AddNewModalContentProps) => {
  const [titleVal, setTitleVal] = useState("");
  const [contentVal, setContentVal] = useState("");
  const [slugVal, setSlugVal] = useState("");
  return (
    <Box p={2}>
      <Stack textAlign={"center"} gap={2}>
        <TextField
          fullWidth
          label="Title"
          placeholder="Any Title"
          value={titleVal}
          onChange={(e) => setTitleVal(e.target.value)}
        />
        <TextField
          multiline
          rows={5}
          label="Content"
          placeholder="Content of the Post"
          value={contentVal}
          onChange={(e) => setContentVal(e.target.value)}
        />
        <TextField
          label="Slug"
          placeholder="Must be Unique hyphen separated"
          value={slugVal}
          onChange={(e) => setSlugVal(e.target.value)}
        />
      </Stack>
      <Box textAlign={"center"} p={2}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            onAdd(titleVal, contentVal, slugVal);
            closeModal();
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};
