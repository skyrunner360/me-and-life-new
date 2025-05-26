import { ReactElement } from "react";
import SideNavBar from "./SideNavBar";
import { Helmet } from "react-helmet";

interface props {
  children: ReactElement;
}

export default function Layout({ children }: props) {
  return (
    <>
      <Helmet>
        <meta name="google-adsense-account" content="ca-pub-6549250688261499" />
      </Helmet>
      <SideNavBar />
      <main>{children}</main>
    </>
  );
}
