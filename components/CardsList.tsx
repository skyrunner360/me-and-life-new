import Box from "@mui/material/Box";
import moment from "moment";
import Image from "next/image";
import { commonPostResType } from "../types/CommonTypes";
import Styles from "./CardsList.module.css";
interface cardsListProps {
  data: Array<commonPostResType>;
}
const CardsList = ({ data }: cardsListProps) => {
  return (
    <>
      <Box className={Styles.cardList}>
        {data?.map((elem, i) => {
          const allslugs = elem?.slug.split("-");
          return (
            <>
              <article className={Styles.card} key={elem.slug + elem._id}>
                <header className={Styles.cardHeader}>
                  <p>{moment(elem?.timeStamp).format("MMM Do YY")}</p>
                  <h2>{elem?.title}</h2>
                </header>

                <div className={Styles.cardAuthor}>
                  <div className={Styles.authorAvatar}>
                    <Image src={"/Rishi.jpeg"} height={40} width={40} alt="Author" />
                  </div>
                  <svg className={Styles.halfCircle} viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                  </svg>

                  <div className={Styles.authorName}>
                    <div className={Styles.authorNamePrefix}>Author</div>
                    {elem?.author}
                  </div>
                </div>

                <div className={Styles.tags}>
                  {allslugs.map((word) => (
                    <span key={word + +new Date()}>{word}</span>
                  ))}
                </div>
              </article>
            </>
          );
        })}
      </Box>
    </>
  );
};
export default CardsList;
