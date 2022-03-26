import axios from "axios";
import React, { useEffect, useState } from "react";
import DataViualization from "./DataViualization";

function PlotContainer(props) {
  const { path, layout } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(path)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [path]);

  return (
    <>
      <DataViualization data={data} layout={layout} />
    </>
  );
}

PlotContainer.defaultProps = {
  path: "./data/test1.json",
  layout: { width: 600, height: 600, title: "A Fancy Plot" },
};

export default PlotContainer;
