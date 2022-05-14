import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Tab1 from "./components/tab1";
import Tab2 from "./components/tab2";

function App() {
  const [data, setData] = useState([]);
  const [showtab1, setShowtab1] = useState(false);
  const [showtab2, setShowtab2] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://api.jsonbin.io/b/60574a237ffeba41c07f4a56"
      );
      setData(res.data);
    };
    getData();
  }, []);

  // const data = [
  //   {
  //     "Department Name": "Department1",
  //     Sales: 1000,
  //     Percentage: "7%",
  //   },
  //   {
  //     "Department Name": "Department2",
  //     Sales: 2000,
  //     Percentage: "13%",
  //   },
  //   {
  //     "Department Name": "Department3",
  //     Sales: 3000,
  //     Percentage: "20%",
  //   },
  //   {
  //     "Department Name": "Department4",
  //     Sales: 4000,
  //     Percentage: "27%",
  //   },
  //   {
  //     "Department Name": "Department5",
  //     Sales: 5000,
  //     Percentage: "33%",
  //   },
  // ];

  return (
    <Router>
      <Route path="/" exact>
        <h3 className="fs-2 text-center mb-4">Represent data in the form of pie chart and table</h3>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn c-btn"
            onClick={() => {
              setShowtab1(!showtab1);
            }}
          >
            Show table
          </button>
          <button
            type="button"
            className="btn c-btn"
            onClick={() => {
              setShowtab2(!showtab2);
            }}
          >
            Show pie chart
          </button>
        </div>
        <div className="d-flex flex-wrap">
          {showtab1 ? <Tab1 data={data} /> : ""}
          {showtab2 ? <Tab2 data={data} /> : ""}
        </div>
      </Route>
    </Router>
  );
}

export default App;
