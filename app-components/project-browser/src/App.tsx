import { useState } from "react";
import { ProjectsBrowser } from "./components/ProjectsBrowser";
import "./App.css";

function App() {
  const [orgName] = useState<string>("MyOrg");
  const [page] = useState<number>(1);
  const [nbrOfProjects] = useState<number>(27);

  return (
    <>
      <h1>Project Browser App</h1>
      <ProjectsBrowser orgName={orgName} nbrOfProjects={nbrOfProjects} page={page}/>
    </>
  );
}

export default App;
