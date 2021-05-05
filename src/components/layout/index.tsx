import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Sidebar from "@components/sidebar";
import Navbar from "@components/navbar";
import Main from "@components/main";

const Layout: React.FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [docked, setDocked] = useState(false);

  const isMidScreen = useMediaQuery({
    query: "(max-width: 576px)",
  });

  useEffect(() => {
    if (!isMidScreen) setDocked(true);
  }, []);

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
        {children}
      </>
    </Sidebar>
  );
};

export default Layout;
