import React from "react";
import Sidebar from "react-sidebar";
import Styles from "../../styles/sidebar.module.css";
import * as Icon from "react-bootstrap-icons";

const SideBar: React.FC<{
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  docked: boolean;
  children: JSX.Element;
}> = ({ sidebarOpen, setSidebarOpen, docked, children }): JSX.Element => {
  //this const needed to fix a overlay bug
  // const styles = {
  //   root: {
  //     position: undefined,
  //   },
  //   content: {
  //     position: undefined,
  //     top: undefined,
  //     left: undefined,
  //     right: undefined,
  //     bottom: undefined,
  //   },
  // };
  return (
    <>
      <Sidebar
        sidebar={
          <div className={Styles.sidebar}>
            <h5>Valley</h5>
            <a href="/">
              Home
              <Icon.ArrowUpRight className="ml-1" />
            </a>
            <a href="/plans">
              Plans
              <Icon.ArrowUpRight className="ml-1" />
            </a>
            <a href="/about">
              About
              <Icon.ArrowUpRight className="ml-1" />
            </a>
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
