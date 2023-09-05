import React, { useState } from "react";
import { initialData } from "../mock-data/mockData";

const DataManipulation = () => {
  const [manipulatedData, setManipulatedData] = useState(undefined);

  const onManipulateData = () => {
    const manipulatedData = initialData.reduce((a, b) => {
      a["status-" + b.status] = a["status-" + b.status] || [];
      a["status-" + b.status].push(b);
      return a;
    }, Object.create(null));
    setManipulatedData(manipulatedData);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column"
      }}
    >
      <pre>
        {JSON.stringify(
          manipulatedData ? manipulatedData : initialData,
          null,
          4
        )}
      </pre>
      <button onClick={onManipulateData} style={{ marginLeft: 100 }}>
        Manipulate Data
      </button>
    </div>
  );
};

export default DataManipulation;
