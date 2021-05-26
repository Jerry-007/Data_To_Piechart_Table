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
  const sidebarItems = [
    { name: "Home", path: "/" },
    { name: "Plans", path: "/plans" },
    { name: "Connectors", path: "/connectors" },
    { name: "Integrations", path: "/integrations" },
    { name: "How to ?", path: "/faq" },
    { name: "About", path: "/about" },
  ];
  const router = useRouter();
  return (
    <>
      <Sidebar
        sidebar={
          <div className={Styles.sidebar}>
            <h5>
              <Logo className="mr-2" />
              VALLEY
            </h5>
            {sidebarItems.map((i) => (
              <Link href={i.path}>
                <a className={router.pathname === i.path ? Styles.active : ""}>
                  <div>
                    <SubtractIcon className="mr-2 mb-1" />
                    {i.name}
                  </div>
                </a>
              </Link>
            ))}
            {/* <Link href="/">
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
            <Link href="/connectors">
              <a
                className={
                  router.pathname === "/connectors" ? Styles.active : ""
                }
              >
                <div>
                  <SubtractIcon className="mr-2 mb-1" />
                  Connectors
                </div>
              </a>
            </Link>
            <Link href="/faq">
              <a className={router.pathname === "/faq" ? Styles.active : ""}>
                <div>
                  <SubtractIcon className="mr-2 mb-1" />
                  How to ?
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
            </Link> */}
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
