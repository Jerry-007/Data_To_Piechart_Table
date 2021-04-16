import React from "react";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "@components/sidebar";
import Navbar from "@components/navbar";
import Main from "@components/main";
import { useState } from "react";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false); //for the sidebar functionality
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
        <Main>
          <Component {...pageProps} />
        </Main>
      </>
    </Sidebar>
  );
}

export default MyApp;
