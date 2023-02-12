import Styles from "./CardsList.module.css";
const CardsList = () => {
  return (
    <>
      <section className={Styles.cardList}>
        <article className={Styles.card}>
          <header className={Styles.cardHeader}>
            <p>Sep 11th 2020</p>
            <h2>Never forget</h2>
          </header>

          <div className={Styles.cardAuthor}>
            <a className={Styles.authorAvatar} href="#">
              <img src="avatar.png" />
            </a>
            <svg className={Styles.halfCircle} viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className={Styles.authorName}>
              <div className={Styles.authorNamePrefix}>Author</div>
              Jeff Delaney
            </div>
          </div>
          <div className={Styles.tags}>
            <a href="#">html</a>
            <a href="#">css</a>
            <a href="#">web-dev</a>
          </div>
        </article>

        <article className={Styles.card}>
          <header className={Styles.cardHeader}>
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div className={Styles.cardAuthor}>
            <a className={Styles.authorAvatar} href="#">
              <img src="https://api.adorable.io/avatars/172/a.png" />
            </a>
            <svg className={Styles.halfCircle} viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className={Styles.authorName}>
              <div className={Styles.authorNamePrefix}>Pirate</div>
              Zheng Zhilong
            </div>
          </div>
          <div className={Styles.tags}>
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article className={Styles.card}>
          <header className={Styles.cardHeader}>
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div className={Styles.cardAuthor}>
            <a className={Styles.authorAvatar} href="#">
              <img src="https://api.adorable.io/avatars/172/b.png" />
            </a>
            <svg className={Styles.halfCircle} viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className={Styles.authorName}>
              <div className={Styles.authorNamePrefix}>Pirate</div>
              Francis Drake
            </div>
          </div>
          <div className={Styles.tags}>
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article className={Styles.card}>
          <header className={Styles.cardHeader}>
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div className={Styles.cardAuthor}>
            <a className={Styles.authorAvatar} href="#">
              <img src="https://api.adorable.io/avatars/172/c.png" />
            </a>
            <svg className={Styles.halfCircle} viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className={Styles.authorName}>
              <div className={Styles.authorNamePrefix}>Pirate</div>
              Edward Teach
            </div>
          </div>
          <div className={Styles.tags}>
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article className={Styles.card}>
          <header className={Styles.cardHeader}>
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div className={Styles.cardAuthor}>
            <a className={Styles.authorAvatar} href="#">
              <img src="https://api.adorable.io/avatars/172/d.png" />
            </a>
            <svg className={Styles.halfCircle} viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className={Styles.authorName}>
              <div className={Styles.authorNamePrefix}>Pirate</div>
              William Kidd
            </div>
          </div>
          <div className={Styles.tags}>
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article className={Styles.card}>
          <header className={Styles.cardHeader}>
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div className={Styles.cardAuthor}>
            <a className={Styles.authorAvatar} href="#">
              <img src="https://api.adorable.io/avatars/172/d.png" />
            </a>
            <svg className={Styles.halfCircle} viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className={Styles.authorName}>
              <div className={Styles.authorNamePrefix}>Pirate</div>
              William Kidd
            </div>
          </div>
          <div className={Styles.tags}>
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article className={Styles.card}>
          <header className={Styles.cardHeader}>
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div className={Styles.cardAuthor}>
            <a className={Styles.authorAvatar} href="#">
              <img src="https://api.adorable.io/avatars/172/d.png" />
            </a>
            <svg className={Styles.halfCircle} viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className={Styles.authorName}>
              <div className={Styles.authorNamePrefix}>Pirate</div>
              William Kidd
            </div>
          </div>
          <div className={Styles.tags}>
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>
      </section>
    </>
  );
};
export default CardsList;
