import Box from "@mui/material/Box";
import Image from "next/image";
import Carousel from "./Carousel/Carousel";

const SideHero = () => {
  const carouselImages = [
    { src: "/carousel1.jpg", word: "Hello! Stranger 👋", textColor: "#fff" },
    {
      src: "/carousel2.jpg",
      word: "Welcome to the small world of this Introvert.",
      textColor: "#fff",
    },
    {
      src: "/carousel3.jpg",
      word: "Here I'll be posting some personal life updates, Some Tech Content and Some Original pieces of Writing.",
      textColor: "#fff",
    },
    {
      src: "/carousel4.jpg",
      word: "Feel free to explore this Website.",
      textColor: "#fff",
    },
  ];
  return (
    <>
      <Carousel>
        {carouselImages.map((el) => {
          return (
            <Box position={"relative"} key={el.word + +new Date()}>
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
                  color: el.textColor,
                }}
              >
                <h1>{el.word}</h1>
              </Box>
              <Image
                alt="hero image"
                src={el.src}
                width={100}
                height={100}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "25px",
                  filter: "blur(3px)",
                }}
              />
            </Box>
          );
        })}
      </Carousel>
    </>
  );
};
export default SideHero;
