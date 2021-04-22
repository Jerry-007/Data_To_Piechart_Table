import React, { useState} from "react";
import Sidebar from "@components/sidebar";
import Navbar from "@components/navbar";
import Main from "@components/main";

const Layout: React.FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [docked, setDocked] = useState(false);

  return (
    <Sidebar
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      docked={docked}
    >
      <>
        <Navbar
          setSidebarOpen={setSidebarOpen}
          docked={docked}
          setDocked={setDocked}
        />
        <Main>{children}</Main>
      </>
    </Sidebar>
  );
};

export default Layout;
