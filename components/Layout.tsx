import { ReactElement } from "react";
import SideNavBar from "./SideNavBar";

interface props {
  children: ReactElement;
}

export default function Layout({ children }: props) {
  return (
    <>
      {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6549250688261499"
          crossOrigin="anonymous"
        ></script> */}
      <SideNavBar />
      <main>{children}</main>
    </>
  );
}
