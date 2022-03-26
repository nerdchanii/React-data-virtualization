import React from "react";
import "./App.css";
import PlotContainer from "components/PlotContainer";
function App() {
  return (
    <>
      <PlotContainer
        path={"./data/test1.json"}
        layout={{
          title: "Chanii",
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
      <PlotContainer path={"./data/test2.json"} />
      <PlotContainer path={"./data/test1.json"} />
      <PlotContainer path={"./data/test1.json"} />
    </>
  );
}

export default App;
