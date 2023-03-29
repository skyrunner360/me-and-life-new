import { useEffect } from "react";

interface textProps {
  word: string;
}
const AnimatedText = ({ word }: textProps) => {
  const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <h1
      onMouseOver={(e) => {
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
    </h1>
  );
};
export default AnimatedText;
