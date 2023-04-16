import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MobileStepper from "@mui/material/MobileStepper";
import { MouseEvent, useState } from "react";
// @ts-ignore
import SwipeableViews from "react-swipeable-views-react-18-fix";
// @ts-ignore
import { autoPlay } from "react-swipeable-views-utils";

const Carousel = (props: any) => {
  const { children } = props;
  const [activeStep, setActiveStep] = useState(0);

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const handleNext = (e: MouseEvent) => {
    activeStep < children.length - 1 && setActiveStep((prevActiveStep) => prevActiveStep + 1);
    e.stopPropagation();
  };

  const handleBack = (e: MouseEvent) => {
    activeStep >= 1 && setActiveStep((prevActiveStep) => prevActiveStep - 1);
    e.stopPropagation();
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box position={"relative"}>
      <AutoPlaySwipeableViews
        interval={6000}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {children}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          position: "absolute",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={handleBack}
      >
        <IconButton
          disableFocusRipple
          sx={{
            width: "20px",
            height: "20px",
            background: "white",
          }}
          className={"PrdTheme"}
          disabled={activeStep === 0}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: "14px" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={handleNext}
      >
        <IconButton
          sx={{
            width: "18px",
            height: "18px",
            background: "white",
          }}
          className={"PrdTheme"}
          disabled={activeStep === children.length - 1}
        >
          <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
        </IconButton>
      </Box>
      <MobileStepper
        position="static"
        steps={children.length}
        activeStep={activeStep}
        sx={{
          background: "transparent",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        backButton={null}
        nextButton={null}
        className={"PrdTheme"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </Box>
  );
};

export default Carousel;
