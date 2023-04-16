import { Avatar, Box, Typography } from "@mui/material";
import Carousel from "./Carousel/Carousel";
import AnimatedText from "./AnimatedText";

const SideHero = () => {
  const carouselImages = [
    { src: "menuIcon.jpg", word: "Welcome Stranger 👋" },
    { src: "mountains.svg", word: "Welcome to the small world of this Introvert." },
    {
      src: "mountains.svg",
      word: "Here I'll be posting some personal life updates, Some Tech Content and Some Original pieces of Writing.",
    },
    {
      src: "mountains.svg",
      word: "Feel free to explore this Website.",
    },
  ];
  return (
    <>
      <Carousel>
        {carouselImages.map((el) => {
          return (
            <Box position={"relative"}>
              <Box
                position={"absolute"}
                left={"50%"}
                top={"50%"}
                sx={{
                  transform: "translate(-50%,-50%)",
                  zIndex: 2,
                  maxWidth: "25rem",
                  overflowX: "auto",
                  textAlign: "center",
                }}
              >
                <h1>{el.word}</h1>
              </Box>
              <Avatar src={el.src} variant="square" sx={{ height: "100%", width: "100%" }} />
            </Box>
          );
        })}
      </Carousel>
    </>
  );
};
export default SideHero;
