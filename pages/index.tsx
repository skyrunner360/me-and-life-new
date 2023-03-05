import Head from "next/head";
import Image from "next/image";
import AnimatedBlob from "../components/AnimatedBlob";
import CardsList from "../components/CardsList";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me and Life</title>
        <meta name="description" content="Welcome to my blog - ME AND LIFE" />
      </Head>
      <Header />

      <CardsList />
      <section className={styles.neutral}>
        <h1>nice curves</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis rem fugiat delectus
          accusantium esse dignissimos perspiciatis quasi maiores sint, consectetur sunt, excepturi
          eum doloremque distinctio assumenda? Quisquam facilis ut dolorem?
        </p>
        <div className={styles.curve}></div>
      </section>

      <div className={`${styles.spacer} ${styles.mountains}`}></div>
      <section className={styles.highContrast}>
        <h1>nice curves</h1>
        <p>
          Molestias reprehenderit voluptatum animi nostrum in molestiae placeat autem quo suscipit
          asperiores accusamus veniam cumque debitis nobis ullam expedita recusandae, ipsa commodi
          illum voluptatibus omnis exercitationem. Minima hic beatae nostrum.
        </p>
      </section>
      <div className={`${styles.spacer} ${styles.mountains}`}>Mountains contains text</div>
      <section className={styles.accentColor}>
        <h1>nice curves</h1>
        <p>
          Veritatis eius, ex aperiam, facilis cupiditate amet possimus ducimus doloremque eum autem
          quod, incidunt aliquam laborum harum dolorum qui est officia quae! Quos, iusto modi totam
          perspiciatis quod consequuntur natus.
        </p>
      </section>
      <AnimatedBlob />
      <div className={`${styles.spacer} ${styles.mountains}`}></div>

      <section>
        <h1>nice curves</h1>
        <p>
          Excepturi ad eveniet laboriosam earum atque animi iure sit impedit cumque incidunt. Sequi
          quia iusto voluptatibus, molestias, minima error quis, ad fuga corporis voluptate velit
          recusandae iure iste. Quidem, laborum.
        </p>
      </section>
      <section>
        <h1>nice curves</h1>
        <p>
          Repellendus molestias cum deleniti, culpa debitis commodi ipsum aspernatur unde explicabo
          odit recusandae ducimus esse saepe odio velit dolorum maiores quisquam sunt. Veniam fugiat
          doloribus similique animi ipsam at odit.
        </p>
      </section>
      <section>
        <h1>nice curves</h1>
        <p>
          Debitis aliquam minima quam ex dolor corrupti voluptatem vitae? Modi blanditiis vel velit,
          officiis ratione ipsum iusto! Odio laboriosam, culpa soluta, quibusdam ea nam ipsa fuga,
          error aliquid explicabo pariatur!
        </p>
      </section>
      <section>
        <h1>nice curves</h1>
        <p>
          Illum non maxime ipsa, perspiciatis, dicta quia consequuntur, in veniam sequi sapiente ex
          recusandae veritatis tempore qui corporis nemo! Illum temporibus vel nesciunt veritatis
          autem. Ipsa dolores odio distinctio eveniet!
        </p>
      </section>
      <section>
        <h1>nice curves</h1>
        <p>
          Obcaecati molestiae magni, id rem sequi fugiat officiis optio vel vero, aspernatur numquam
          eum ipsum, minima inventore est cumque distinctio provident? Exercitationem quae rem animi
          voluptate deleniti expedita iste reiciendis!
        </p>
      </section>
    </div>
  );
}
