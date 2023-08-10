import Box from "@mui/material/Box";
import Styles from "./CardsList.module.css";
import { commonPostResType } from "../types/CommonTypes";
import moment from "moment";
import { Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
interface cardsListProps {
  data: [commonPostResType];
}
const CardsList = ({ data }: cardsListProps) => {
  return (
    <>
      <Box className={Styles.cardList}>
        {data?.map((elem, i) => {
          return (
            <>
              <article className={Styles.card}>
                <header className={Styles.cardHeader}>
                  <p>{moment(elem.timeStamp).format("MMM Do YY")}</p>
                  <h2>{elem?.title}</h2>
                </header>

                <div className={Styles.cardAuthor}>
                  {/* <a className={Styles.authorAvatar} href="#">
                    <img src="avatar.png" />
                  </a> */}
                  {/* <svg className={Styles.halfCircle} viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                  </svg> */}

                  <div className={Styles.authorName}>
                    <div className={Styles.authorNamePrefix}>Author</div>
                    {elem?.author}
                  </div>
                </div>
                <div className={Styles.tags}>
                  <a href="#">html</a>
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
