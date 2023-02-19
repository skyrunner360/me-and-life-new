import Container from "@mui/material/Container";
import Head from "next/head";
import FormManager from "../components/Admin Panel Forms/FormManager";

const AdminPanel = () => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Container>
        <FormManager />
      </Container>
    </>
  );
};
export default AdminPanel;
