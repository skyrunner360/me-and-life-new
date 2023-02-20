import Container from "@mui/material/Container";
import Head from "next/head";
import FormManager from "../components/Admin Panel Forms/FormManager";
import Style from "../styles/AdminPanel.module.css";

const AdminPanel = () => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Container className={Style.main}>
        <FormManager />
      </Container>
    </>
  );
};
export default AdminPanel;
