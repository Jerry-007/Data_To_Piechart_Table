import React from "react";
import Sidebar from "react-sidebar";
import Styles from "@styles/sidebar.module.css";
import SubtractIcon from "@components/icons/SubtractIcon";
import Logo from "@components/logo";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar: React.FC<{
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  docked: boolean;
  children: JSX.Element;
}> = ({ sidebarOpen, setSidebarOpen, docked, children }): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Sidebar
        sidebar={
          <div className={Styles.sidebar}>
            <h5>
              <Logo />
              VALLEY
            </h5>
            <Link href="/">
              <a className={router.pathname === "/" ? Styles.active : ""}>
                <div>
                  <SubtractIcon className="mr-2 mb-1" />
                  Home
                </div>
              </a>
            </Link>
            <Link href="/plans">
              <a className={router.pathname === "/plans" ? Styles.active : ""}>
                <div>
                  <SubtractIcon className="mr-2 mb-1" />
                  Plans
                </div>
              </a>
            </Link>
            <Link href="/about">
              <a className={router.pathname === "/about" ? Styles.active : ""}>
                <div>
                  <SubtractIcon className="mr-2 mb-1" />
                  About
                </div>
              </a>
            </Link>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={(open) => setSidebarOpen(open)}
        docked={docked}
      >
        {children}
      </Sidebar>
    </>
  );
};

export default SideBar;
