import { useState } from "react";
import { ProjectUserDashboard } from "./components/ProjectUserDashboard";
import "./App.css";

function App() {
  const [orgName] = useState<string>("MyOrg");
  const [page] = useState<number>(1);

  return (
    <>
      <h1>Project App</h1>
      <ProjectUserDashboard orgName={orgName} page={page}/>
    </>
  );
}

export default App;
