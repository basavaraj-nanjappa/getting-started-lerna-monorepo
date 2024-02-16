import { useState } from "react";
import { ProjectViewer } from "./components/ProjectViewer";
import "./App.css";

function App() {
  const [name] = useState<string>("celebration of Independence Day");

  return (
    <>
      <h1>Project Viewer App</h1>
      <ProjectViewer projectName={name}/>
    </>
  );
}

export default App;
