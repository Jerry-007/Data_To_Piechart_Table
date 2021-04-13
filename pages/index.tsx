import React from "react";

import { Header, Main, Footer, Cards } from "@components";
import {getUser} from "@data/user";

const Home: React.FC = () => {
const {data, error} = getUser()
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Main />
    {data ?
    <p>The user's name is {data.name}</p>
    :
    <p>fetching user details...</p>}
      <Footer />
    </div>
  );
};

export default Home;
