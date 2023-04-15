import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

interface textProps {
  word: string;
  component: any;
}
const AnimatedText = ({ word, component }: textProps) => {
  const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <Box
      component={component}
      onMouseOver={(e: MouseEvent) => {
        let iteration = 0;
        const interval = setInterval(() => {
          // @ts-ignore
          e.target.innerText = word
            .split("")
            .map((letter: string, i: number) => {
              if (i < iteration) {
                return word[i];
              }

              return Letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= word.length) clearInterval(interval);

          iteration += 1 / 3;
        }, 30);
      }}
    >
      {word}
    </Box>
  );
};
export default AnimatedText;
