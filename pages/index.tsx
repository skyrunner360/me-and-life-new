import Head from "next/head";
import styles from "../styles/Home.module.css";
import SideNavBar from "../components/SideNavBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me and Life</title>
        <meta name="description" content="Welcome to Rishi's blog - ME AND LIFE" />
      </Head>
      <SideNavBar />
    </div>
  );
}
