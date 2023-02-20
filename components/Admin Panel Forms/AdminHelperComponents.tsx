import moment from "moment";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { MouseEventHandler } from "react";
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
  onDelete: MouseEventHandler<HTMLButtonElement>;
}
export const PostCard = ({ elem, onEdit, onDelete }: postCardProps) => {
  return (
    <Box p={2} key={elem.slug} border="1px solid #296bd6">
      <Stack direction={"row"} alignItems="center" justifyContent={"center"}>
        <Button onClick={onEdit}>Edit </Button>
        <Button onClick={onDelete}>Delete</Button>
      </Stack>
      <Box>
        <Typography variant="body1" color={"InfoText"}>
          {elem.title}
        </Typography>
        <Typography variant="body2" color={"limegreen"}>
          {elem.slug}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" color={"GrayText"}>
          on: {moment(elem.timeStamp).format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>
      </Box>
    </Box>
  );
};
