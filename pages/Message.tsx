import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import AnimatedText from "../components/AnimatedText";
import { useState } from "react";
import Link from "next/link";

const Message = () => {
  const [openModal, setOpenModal] = useState(false);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Box textAlign={"center"}>
        <Box fontSize={"3rem"} fontWeight={600} color={"#296bd6"}>
          <AnimatedText word="There, There. I'm here for you!" component={"h1"} />
        </Box>
        <Box p={2}>
          <Typography variant="h2" fontWeight={500} color={"pink"}>
            Hey, Friend. I&apos;m still here, Whatever you&apos;re going through, I&apos;ll always
            listen and be there for you.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={"yellowgreen"}>
            See I&apos;ve made this to remind you that we may be separated by distance but
            we&apos;re not separated by heart or connection💞. If I can&apos;t provide you a hug
            just{" "}
            <b>
              Call me, text me, reach me whenever or however you want and I&apos;ll pick up your
              call even at the middle of the night.
            </b>
          </Typography>
        </Box>
        <Box py={1}>
          <Button variant="contained" onClick={() => setOpenModal(true)}>
            CLICK FOR A SURPRISE
          </Button>
        </Box>
      </Box>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={modalStyle}>
          <Box textAlign={"center"}>
            <Avatar variant="square" src="hug.gif" sx={{ width: "100%", height: "100%" }} />
            <Link
              href={`https://api.whatsapp.com/send/?phone=917220008378&text=${encodeURIComponent(
                "Hi, Rishi. Thanks for this, I wanted to talk to you about"
              )}&type=phone_number&app_absent=0`}
              target="_blank"
            >
              <Button variant="outlined" color="success">
                Hug me back
              </Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default Message;
