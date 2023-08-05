import { ReactElement } from "react";
import TrackingBlur from "./TrackingBlur";
import SideNavBar from "./SideNavBar";

interface props {
  children: ReactElement;
}

export default function Layout({ children }: props) {
  return (
    <>
      <SideNavBar />
      <main>{children}</main>
    </>
  );
}
