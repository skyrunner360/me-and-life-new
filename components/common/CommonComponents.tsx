import { MouseEventHandler } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { commonPostResType } from "../../types/CommonTypes";
import moment from "moment";

interface MessagesModalProps {
  open: boolean;
  onClose: MouseEventHandler;
  title: string | null | undefined;
  msg: string | null | undefined;
  onConfirmClick: MouseEventHandler<HTMLButtonElement>;
}

interface CommonModalProps {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode | null | undefined;
}

export const CommonModal = ({ open, onClose, children }: CommonModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
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
        <Box>{children}</Box>
      </Box>
    </Modal>
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
    </Modal>
  );
};

export const PostViewer = ({ data }: { data: commonPostResType }) => {
  return (
    <>
      <Grid container sx={{ minHeight: 300 }}>
        <Grid item sm={1} position={"relative"} xs={12} height={"100%"}>
          <Box>
            <Typography variant="h3">{moment(data.timeStamp).format("MMM Do YY")}</Typography>
          </Box>
          <Box
            sx={{
              transform: { sm: "rotate(-90deg)", xs: "none" },
              position: { sm: "absolute", xs: "unset" },
              bottom: "-50%",
            }}
          >
            <Typography>By - {data.author}</Typography>
          </Box>
        </Grid>
        <Grid item sm={10} xs={12}>
          {data.isNew ? (
            data.content
              .toString()
              .split("\n")
              .filter((t) => t)
              .map((v: string) => (
                <p key={v} style={{ wordWrap: "break-word" }}>
                  {v}
                </p>
              ))
          ) : (
            <pre style={{ fontFamily: "inherit", wordWrap: "break-word" }}>{data.content}</pre>
          )}
        </Grid>
      </Grid>
    </>
  );
};
