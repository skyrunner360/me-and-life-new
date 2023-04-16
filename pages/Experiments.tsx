import { Box } from "@mui/material";
import AnimatedText from "../components/AnimatedText";
import TrackingBlur from "../components/TrackingBlur";
import ClippedText from "../components/ClippedText";

const Experiments = () => {
  return (
    <div>
      <Box textAlign={"center"}>
        <ClippedText word="Hi Skyrunner" imgSrc="mountains.svg" fontSize="5rem" />
      </Box>
      {/* <TrackingBlur /> */}
    </div>
  );
};
export default Experiments;
