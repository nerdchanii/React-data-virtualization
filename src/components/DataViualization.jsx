import React from "react";
import Plot from "react-plotly.js";

function DataViualization(props) {
  const { data, layout } = props;
  return <Plot data={data} layout={layout} />;
}

DataViualization.defaultProps = {
  data: [],
  layout: { width: 600, height: 600, title: "A Fancy Plot" },
};

export default DataViualization;
