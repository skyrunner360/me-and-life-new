import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { MouseEventHandler, useState } from "react";
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
interface MessagesModalProps {
  open: boolean;
  onClose: MouseEventHandler;
  title: string | null | undefined;
  msg: string | null | undefined;
  onConfirmClick: MouseEventHandler<HTMLButtonElement>;
}
export const PostCard = ({ elem, onEdit, onDelete }: postCardProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      <Box p={2} key={elem.slug} border="1px solid #296bd6">
        <Stack direction={"row"} alignItems="center" justifyContent={"center"}>
          <Button onClick={onEdit}>Edit </Button>
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
    </>
  );
};

export const MessagesModal = ({
  open,
  onClose,
  title,
  msg,
  onConfirmClick,
}: MessagesModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 340, sm: 400 },
            bgcolor: "background.paper",
            boxShadow: "0px 4px 25px #DCDCE5",
            borderRadius: "4px",
            p: "10px 0 0 0",
            maxWidth: "100%",
            outline: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-30px",
              right: "0rem",
              cursor: "pointer",
              display: "block",
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </Box>
          <Box p={1} textAlign="center">
            <Typography variant="h5" color={"primary"} fontWeight={600}>
              {title}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" p={1} color="GrayText">
              {msg}
            </Typography>
          </Box>
          <Stack direction={"row"} alignItems="center" justifyContent={"center"} gap={2} p={1}>
            <Button onClick={onClose} variant="text">
              Cancel
            </Button>
            <Button onClick={onConfirmClick} variant="contained">
              Confirm
            </Button>
          </Stack>
        </Box>
      </>
    </Modal>
  );
};
