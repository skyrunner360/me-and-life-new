interface textProps {
  word: string;
  imgSrc: string;
  fontSize: string;
}
const ClippedText = ({ word, imgSrc, fontSize }: textProps) => {
  return (
    <div
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
export default ClippedText;
