interface textProps {
  word: string;
  imgSrc: string;
  fontSize: string;
}

const AnimatedClippedText = ({ word, imgSrc, fontSize }: textProps) => {
  const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div
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
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontSize: fontSize,
      }}
    >
      {word}
    </div>
  );
};
export default AnimatedClippedText;
