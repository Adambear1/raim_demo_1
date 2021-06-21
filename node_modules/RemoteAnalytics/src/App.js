import React from "react";
import AnalyticsDataConfig from "./analytics/InitGTM";

const App = (props) => {
  const {container_id, opt_container_id, currency_code} = props;
  console.log(`Loaded Remote Analytics:`, props);
  
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <AnalyticsDataConfig container_id={container_id} opt_container_id={opt_container_id} currency_code={currency_code}/>
      <h1 >Bug Fixed in remote component</h1>
    </div>
  )
}

export default App;

